function setup() {
  createCanvas(1000, 500);

  // set background color in grayscale:


  // draw rectangle


  rect(300, 200, 100, 150)



}

function draw() {

  background(255, 0, 50);

  // draw rectangle
  fill(100, 150, 100);
  rect(300, 200, 100, 150)

  // draw ellipse
  fill(0, 255, 0, 80);
  stroke(0, 0, 255);
  strokeWeight(10);
  ellipse(mouseX, mouseY, 80);

}
