var angle;

function setup() {
  var slider = document.getElementById('slider');
  angle = PI / 4;
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  angle = slider.value;

  translate(width / 2, height);
  stroke(255);
  branch(300)
}

function branch(len) {
  line(0, 0, 0, - len);
  translate(0, -len);
  rotate(angle);
  line(0, 0, 0, - len*0.67);
  if (len > 2) {
    branch(len*0.67);
  }
}
