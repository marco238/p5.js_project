function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
  background(50, 50, 50);
  //move your mouse to change light position
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;

  pointLight(255, 255, 255, locX, locY, 50);
  ambientMaterial(255);
  noStroke();
  sphere(35);
}
