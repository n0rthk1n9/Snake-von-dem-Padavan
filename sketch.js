var snake;
var scl = 20;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(51);
  snake.update();
  snake.show();
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      snake.dir(0, -1)
      break;
    case DOWN_ARROW:
      snake.dir(0, 1)
      break;
    case LEFT_ARROW:
      snake.dir(-1, 0)
      break;
    case RIGHT_ARROW:
      snake.dir(1, 0)
      break;

    default:
      break;
  }
}
