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
    super(x, y);
    this.speedX = 20;
    this.speedY = 20;
    this.exists = true;
    this.color = "white";
    this.size = 10;
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
      this.x = width - 30;
      if (this.size>=5) {
        this.size -= 1;
      }
    }
    if ((this.x - this.size) <= 0) {
      this.x = 0 + 30;
      if (this.size>=5) {
        this.size -= 1;
      }
    }
    if ((this.y + this.size) >= height) {
      this.y = height - 30;
      if (this.size>=5) {
        this.size -= 1;
      }
    }
    if ((this.y - this.size) <= 0) {
      this.y = 0 + 30;
      if (this.size>=5) {
        this.size -= 1;
      }
    }
  };
  setControls(){
    var _this = this;
    window.onkeydown = function(e) {
        if (e.keyCode === 65) {
          _this.x -= _this.speedX;
          console.log(`*** a *** keyCode ${e.keyCode}`);
        } else if (e.keyCode === 68) {
          _this.x += _this.speedX;
          console.log(`*** d *** keyCode ${e.keyCode}`);
        } else if (e.keyCode === 87) {
          _this.y -= _this.speedY;
          console.log(`*** w *** keyCode ${e.keyCode}`);
        } else if (e.keyCode === 83) {
          _this.y += _this.speedY;
          console.log(`*** s *** keyCode ${e.keyCode}`);
        }
    }
  };
  collisionDetect() {
  for (var j = 0; j < balls.length; j++) {
    if (balls[j].exists !== false) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        console.log("Eated a ball");
      }
    }
  }
 };
}

let balls = [];
let evil1 = new EvilBall(width/2, height/4*3, 20, 20, true, "white", 10);;
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
  if (evil1){
    evil1.setControls();
    evil1.draw();
    evil1.checkBounds();
    evil1.collisionDetect();
  }

  for (var i = 0; i < balls.length; i++) {
    if(balls[i].exists){
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }
  

  requestAnimationFrame(loop);
}
loop();