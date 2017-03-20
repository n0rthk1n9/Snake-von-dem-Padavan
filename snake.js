function Snake() {
  this.xPosition = 0;
  this.yPosition = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.update = function() {
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
}
