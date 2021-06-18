// FUNCTION PAINTINGS (BINARY)
// Justin Logue
// instagram.com/_justinlogue/

function setup() {
  createCanvas(windowWidth, windowHeight);
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
    Math.floor(Math.random() * windowWidth + 1),
    Math.floor(Math.random() * windowHeight + 1)
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
