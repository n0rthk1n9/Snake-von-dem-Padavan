function Snake() {
  this.xPosition = 0;
  this.yPosition = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.update = function() {
    for (var i = 0; i < this.total - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total - 1] = createVector(this.xPosition, this.yPosition);

    this.xPosition = this.xPosition + this.xSpeed * scl;
    this.yPosition = this.yPosition + this.ySpeed * scl;

    this.xPosition = constrain(this.xPosition, 0, width - scl);
    this.yPosition = constrain(this.yPosition, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    rect(this.xPosition, this.yPosition, scl, scl);
  }

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.eat = function (positionOfFood) {
    var distanceToFood = dist(this.xPosition, this.yPosition, positionOfFood.x, positionOfFood.y)
    if (distanceToFood < 1) {
      total++;
      return true;
    } else {
        return false;
    }
  }
}
