function setup() {
  createCanvas(800, 600);

  // Set color mode to HSB
  colorMode(HSB);

  // Set screen reader accessible description
  describe('A canvas where the user draws ellipses on a framed picture.');

  drawFrame();
}

function drawFrame() {
  // Set a frame background
  background(500, 75, 25); // Warm wood-like color

  fill(255); // White drawing area
  strokeWeight(10);
  rect(50, 50, width - 100, height - 100);
}

function mouseDragged() {

  if (mouseX > 60 && mouseX < width - 60 && mouseY > 60 && mouseY < height - 60) {
    // Use the mouse position to set the hue and brightness dynamically
    let ellipseHue = (mouseX + mouseY) % 360;
    let ellipseBrightness = map(mouseY, 0, height, 50, 100);
    fill(ellipseHue, 90, ellipseBrightness, 0.8);

    // Randomize ellipse size
    let size = random(10, 30);

    // Draw ellipses instead of lines
    noStroke();
    ellipse(mouseX, mouseY, size, size);
  }
}
