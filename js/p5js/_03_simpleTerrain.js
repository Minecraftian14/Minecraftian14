p5js_simulations.push((() => {

  let xyv = 0.005;
  let z = 0;
  let zv = 0.00000005;

  return new p5jsSimulations(
    () => {
      let cnv = createCanvas(500, 500);
      cnv.parent('pfjscontainer');
      stroke(255);
    },
    () => {
      loadPixels();
      for (let x = 0; x < width; x++) {
        for (let y = 0; y <height; y++) {
          let ns = noise(x * xyv, y * xyv, z += zv) * 255;
          if (ns < 100)
            setColor(x, y, 0, 0, ns+105, 255);
          else if (ns < 150)
            setColor(x, y, 0, ns, 0, 255);
          else
            setColor(x, y, ns, ns, ns, 255);

        }}
      updatePixels();
    }
  );
})())

