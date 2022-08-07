const p5js_simulations = []

// let setup = ()=>{
//   console.log("Lol")
// };

function setup() {
}

function draw() {
}

function windowResized() {
  resizeCanvas(500,500);
}

// @Warning(Context.Global)
function setColor(x, y, r, g, b, a) {

  let off = pixelDensity();

  for (let i = 0; i < off; i++) {
    for (let j = 0; j < off; j++) {
      let coord = 4 * ((y * off + j) * width * off + (x * off + i));
      pixels[coord/**/] = r;
      pixels[coord + 1] = g;
      pixels[coord + 2] = b;
      pixels[coord + 3] = a;
    }
  }
}

class p5jsSimulations {
  constructor(setup, draw) {
    this.setup = setup;
    this.draw = draw;
  }

  activate() {
    setup = this.setup;
    draw = this.draw;
  }
}
