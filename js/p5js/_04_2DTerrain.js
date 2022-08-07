p5js_simulations.push((() => {

  let xs = 0.002;
  let xf = 0;
  let xv = 0.00003;

  let waterDepth;
  let cloudHeight;
  let groundHeightVariance;
  let groundHeightOffset;
  let tideHeightVariance;
  let waveHeightVariance;

  return new p5jsSimulations(
    () => {
      let cnv = createCanvas(400, 400);

      cnv.parent('pfjscontainer');
      frameRate(16);

      waterDepth = height * 0.55;
      cloudHeight = height * 0.8;
      groundHeightVariance = height * 0.6;
      groundHeightOffset = height - groundHeightVariance;
      tideHeightVariance = height * 0.3;
      waveHeightVariance = height * 0.002;
    },
    () => {
      loadPixels();

      for (let x = 0; x < width; x++) {
        let app_x = x * xs + (xf += xv);
        let detail_x = app_x * 10;

        let groundHeight = groundHeightOffset
          + (noise(app_x) * groundHeightVariance) | 0;
        // let groundHeight = height;
        let grassHeight = groundHeight + (noise(app_x, 40) * 40) | 0;
        let tideHeight = noise(app_x / 3) * tideHeightVariance
          + sin((x * 0.01 - xf) * 50) * waveHeightVariance;

        for (let y = 0; y < groundHeight; y++) // Background {
          if (y > waterDepth + tideHeight)
            setColor(x, y, 42, 83, 161, 255); // Water
          else if (y < cloudHeight)
            setColor(x, y,
              lerp(0,
                noise(detail_x, y * xs * 10) * 150 + 100,
                1 - y / cloudHeight),
              200, 200, 255); // Sky White
          else
            setColor(x, y, 0, 200, 200, 255); // Sky White
        for (let y = groundHeight; y < height; y++) // Ground
          if (y < grassHeight)
            setColor(x, y, 84, 145, 51, 255); // Grass
          else if (noise(detail_x, y * xs * 10) < 0.6)
            setColor(x, y, 89, 77, 45, 255); // Brown
          else  setColor(x, y, 100, 100, 100, 255); // Stone

      }

      updatePixels();
    }
  );
})())
