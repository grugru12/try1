let stage = 0;
let frame = 0;
let a, b, c;
let im;

function setup() {
  createCanvas(800, 1422);
}

function preload() {
  im1 = loadImage("image/i 1.jpg");
  im2 = loadImage("image/i 2.jpg");
  im3 = loadImage("image/i 3.jpg");
  im4 = loadImage("image/i 4.jpg");
  im5 = loadImage("image/i 5.jpg");
  im6 = loadImage("image/i 6.jpg");
  im7 = loadImage("image/i 7.jpg");
  im8 = loadImage("image/i 8.jpg");
  im9 = loadImage("image/i 9.jpg");
  im10 = loadImage("image/i 10.jpg");
  im11 = loadImage("image/i 11.jpg");
  im12 = loadImage("image/i 12.jpg");
}

function draw() {
  background(220);
  switch (stage) {
    case 0:
      frame = frame + 1;
      image(im12, 0, 0, width, height);
      if (frame > 10) {
        if (  mouseIsPressed &&
        mouseX >= 200 &&
        mouseX <= 640 &&
        mouseY >= 1020 &&
        mouseY <= 1120) {
          frame = 0;
          stage = 1;
        }
      }
      break;
    case 1:
      frame = frame + 1;
      image(im1, 0, 0, width, height);
      if (frame > 10) {
        up(2);
        down(12);
        back(12);
      }
      break;
    case 2:
      frame = frame + 1;
      image(im2, 0, 0, width, height);
      if (frame > 10) {
        up(3);
        down(12);
        back(1);
      }
      break;
    case 3:
      frame = frame + 1;
      image(im3, 0, 0, width, height);
      if (frame > 10) {
        up(5);
        down(4);
        back(2);
      }
      break;
    case 4:
      frame = frame + 1;
      image(im4, 0, 0, width, height);
      if (frame > 10) {
        up(5);
        down(6);
        back(3);
      }
      break;
    case 5:
      frame = frame + 1;
      image(im5, 0, 0, width, height);
      if (frame > 10) {
        up(7);
        down(7);
        back(3);
      }
      break;
    case 6:
      frame = frame + 1;
      image(im6, 0, 0, width, height);
      if (frame > 10) {
        up(12);
        down(12);
        back(4);
      }
      break;
    case 7:
      frame = frame + 1;
      image(im7, 0, 0, width, height);
      if (frame > 10) {
        up(8);
        down(10);
        back(5);
      }
      break;
    case 8:
      frame = frame + 1;
      image(im8, 0, 0, width, height);
      if (frame > 10) {
      if (
        mouseIsPressed &&
        mouseX >= 550 &&
        mouseX <= 750 &&
        mouseY >= 1250 &&
        mouseY <= 1350
      ) {
        frame = 0;
        stage = 9;
      }
      }
      break;
    case 9:
      frame = frame + 1;
      image(im9, 0, 0, width, height);
      if (frame > 10) {
        back(8);
      }
      break;
    case 10:
      frame = frame + 1;
      image(im10, 0, 0, width, height);
      if (
        mouseIsPressed &&
        mouseX >= 550 &&
        mouseX <= 750 &&
        mouseY >= 1250 &&
        mouseY <= 1350
      ) {
        frame = 0;
        stage = 11;
      }
      break;
    case 11:
      frame = frame + 1;
      image(im11, 0, 0, width, height);
      if (frame > 10) {
        back(10);
      }
      break;
    default:
      break;
  }
}

function up(a) {
  if (
    mouseIsPressed &&
    mouseX >= 70 &&
    mouseX <= 730 &&
    mouseY >= 637 &&
    mouseY <= 759
  ) {
    frame = 0;
    stage = a;
  }
}

function down(b) {
  if (
    mouseIsPressed &&
    mouseX >= 70 &&
    mouseX <= 730 &&
    mouseY >= 880 &&
    mouseY <= 1002
  ) {
    frame = 0;
    stage = b;
  }
}

function back(c) {
  if (
    mouseIsPressed &&
    mouseX >= 260 &&
    mouseX <= 530 &&
    mouseY >= 1120 &&
    mouseY <= 1220
  ) {
    frame = 0;
    stage = c;
  }
}
