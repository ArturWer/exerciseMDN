// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min+1)) + min;
  return num;
}

class Shape {
  constructor(x, y, speedX, speedY, exists) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.exists = exists;
  }
}
class Ball extends Shape {
  constructor(x, y, speedX, speedY, exists, color, size) {
    super(x, y, speedX, speedY, exists);
    this.color = color;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  };
  update() {
    if ((this.x + this.size) >= width) {
      this.speedX = -(this.speedX);
    }

    if ((this.x - this.size) <= 0) {
      this.speedX = -(this.speedX);
    }

    if ((this.y + this.size) >= height) {
      this.speedY = -(this.speedY);
    }

    if ((this.y - this.size) <= 0) {
      this.speedY = -(this.speedY);
    }

    this.x += this.speedX;
    this.y += this.speedY;
  };
  collisionDetect() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}
}
class EvilBall extends Shape {
  constructor(x, y, speedX, speedY, exists, color, size) {
    super(x, y, speedX, speedY, exists);
    this.speedX = 20;
    this.speedY = 20;
    this.color = "white";
    size = 10;
  }
 draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  };
  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.speedX --;
    }

    if ((this.x - this.size) <= 0) {
      this.speedX ++;
    }

    if ((this.y + this.size) >= height) {
      this.speedY --;
    }

    if ((this.y - this.size) <= 0) {
      this.speedY ++;
    }
  };
}

let balls = [];
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var size = random(10,20);
    var ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      true,
      "blue",
      random(10,20)
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  let evil = new EvilBall (
    random(0 + size,width - size),
    random(0 + size,height - size),
    );
  evil.draw();
  evil.checkBounds();

  requestAnimationFrame(loop);
}
loop();