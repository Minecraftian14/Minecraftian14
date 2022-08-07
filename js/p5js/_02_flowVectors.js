p5js_simulations.push((() => {

  let xyv = 0.005;
  let z = 0;
  let zv = 0.00001;

  return new p5jsSimulations(
    () => {
      let cnv = createCanvas(500, 500);
      cnv.parent('pfjscontainer');
      frameRate(16);
      stroke(255);
    },
    () => {
      background(0,50,150);
      for (let x = 0; x <= width; x += 10) {
        for (let y = 0; y <= height; y += 10) {
          let nse =  noise(x * xyv, y * xyv, z += zv) * 12;
          let c = cos(nse) * 10, s = sin(nse) * 10;
          line(x, y, x + c, y + s);
        }
      }
    }
  );
})())

