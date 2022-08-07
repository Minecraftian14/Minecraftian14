p5js_simulations.push(new p5jsSimulations(
  () => {
    let cnv = createCanvas(100, 100);
    cnv.parent('pfjscontainer');
  },
  () => {
    loadPixels();
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let ns = noise(x * 0.02, y * 0.02) * 255;
        setColor(x, y, ns, ns, ns, 255);
      }
    }
    updatePixels();
  }
))

p5js_simulations[0].activate();
