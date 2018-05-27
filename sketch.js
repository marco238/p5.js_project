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
  stroke(102, 51, 0);
  branch(windowHeight * 0.33);
}

function branch(len) {

  if (len < 10) {
    stroke(0, 250, 0);
    strokeWeight(4);
  }
  if (len >= 30) {
    strokeWeight(1);
  }
  if (len >= 50) {
    strokeWeight(2);
  }
  if (len >= 70) {
    strokeWeight(4);
  }
  if (len >= 200) {
    strokeWeight(6);
  }
  if (len >= 290) {
    strokeWeight(12);
  }

  line(0, 0, 0, - len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len*0.67);
    pop();

    push();
    rotate(-angle);
    branch(len*0.67);
    pop();

    if (len < 200) {
      push();
      translate(0, len / 2);
      rotate(-angle);
      stroke(0, 250, 0);
      strokeWeight(2);
      line(0, 0, 0, - len/15);
      pop();

      push();
      translate(0, len / 2);
      rotate(angle);
      stroke(0, 250, 0);
      strokeWeight(2);
      line(0, 0, 0, - len/15);
      pop();
    }
  }
}
