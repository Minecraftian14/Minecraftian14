const p5js_simulations = [
  "p5js/p5js_01_simpleNoise.html",
  "p5js/p5js_02_flowVectors.html",
  "p5js/p5js_03_simpleTerrain.html",
  "p5js/p5js_04_2DTerrain.html",
  "p5js/p5js_05_SimplePlanets.html",
  "p5js/p5js_06_LinesShow.html",
  "p5js/p5js_07_RadialPerlinNoise.html",
  "p5js/p5js_08_Better2DTerrainGen.html"
]

function activate_p5js_simulation(id) {
  const iframe = document.getElementById("pfjsIFrame");
  iframe.src = p5js_simulations[id];
  // const iWindow   = iframe.contentWindow;
  // const iDocument = iWindow.document;
}
