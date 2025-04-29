let resetButton;

function resetCanvas() {
  background(220);
}

function setup() {
  createCanvas(400, 400);
  background(220);

  // Create the Reset button using p5.js
  resetButton = createButton('Reset Canvas');
  resetButton.position(10, 420); // adjust position under canvas
  resetButton.mousePressed(resetCanvas); // now resetCanvas is already defined
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  }
}
