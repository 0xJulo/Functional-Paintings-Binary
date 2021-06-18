// FUNCTION PAINTINGS (BINARY)
// Justin Logue
// instagram.com/_justinlogue/

function setup() {
  createCanvas(1080, 1080);
}

function draw() {
  background(0);
  noLoop();
  for (let i = 0; i < 4; i++) {
    Shape();
  }
}

function randomNumber() {
  return vertex(
    Math.floor(Math.random() * 1080 + 1),
    Math.floor(Math.random() * 1080 + 1)
  );
}

function Shape() {
  beginShape();
  noStroke();
  for (let i = 0; i < 4; i++) {
    vertex(randomNumber(), randomNumber());
  }
  endShape(CLOSE);
}
