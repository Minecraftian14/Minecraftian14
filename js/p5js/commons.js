const P5JS_CONTAINER_NAME = 'pfjscontainer';

createDefaultCanvas = () => {
  let cnv = createCanvas(500, 500);
  cnv.parent(P5JS_CONTAINER_NAME);
  return cnv;
}

setColor = (x, y, r, g, b, a) => {
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

randomColorA = () => {
  return color(random(100, 255), 100, random(0, 255))
}

randomColorB = () => {
  return color(random(100,255), random(100,255), random(100,255))
}

gradiantLine = (color1, color2, x1, y1, x2, y2) => {
  let steps = 10;
  for (let i = 0; i < steps; i ++) {
    stroke(lerpColor(color1, color2, i/steps));
    line(
      ((steps - i) * x1 + i * x2) / steps,
      ((steps - i) * y1 + i * y2) / steps,
      ((steps - i - 1) * x1 + (i + 1) * x2) / steps,
      ((steps - i - 1) * y1 + (i + 1) * y2) / steps
    );
  }
}

newDynamicPhysicsBody = (
  pos = createVector(random(width), random(height)),
  vel = createVector(random(-1, 1), random(-1, 1)).limit(10),
  acc = createVector(),
  mass = random(1, 10),
  shape = createCircularShape(),
  color = randomColorA()
) => {
  return {
    pos: pos,
    vel: vel,
    acc: acc,
    mass: mass,
    shape: shape,
    color: color
  };
};

createCircularShape = (radius = 100) => {
  return (body) => {
    fill(body.color);
    circle(body.pos.x, body.pos.y, 2 * radius);
  }
}

drawDynamicPhysicsBody = (body) => body.shape(body);

updateDynamicPhysicsBody = (body) => {
  body.pos.add(body.vel);
  body.vel.add(body.acc).limit(10);
};
