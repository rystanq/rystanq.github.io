// Declarying Variables

let volume = 0;
const curVolume = document.querySelector("#curVolume");
const canvas = document.querySelector("#container");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velx, vely, color, size, num) {
    this.x = x;
    this.y = y;
    this.velx = velx;
    this.vely = vely;
    this.color = color;
    this.size = size;
    this.num = num; // value for volume
  }

  draw() {
    ctx.beginPath(); // begin to draw a ball
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // draws an arc and uses x and y as parameters for radius, 0 to 2Pi is a circle
    ctx.fill(); // fill what weve just drawn

    // Display the pom value on the ball
    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.num, this.x, this.y); // Fill text at ball's position
  }
  collisionDetect() {
    for (const ball of balls) {
      if (ball !== this && ball !== upOne && ball !== downOne) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          // reverse velocities of ball
          ball.color = randomRGB();
          this.color = randomRGB();
          [this.velx, ball.velx] = [ball.velx, this.velx];
          [this.vely, ball.vely] = [ball.vely, this.vely];
        }
      }
    }
  }

  update() {
    if (this.x + this.size >= width) {
      // if ball hits edge of screen right side
      this.velx = -this.velx;
    }
    if (this.x + this.size <= 50) {
      // if ball hits edge of screen left side, 0 is the far most left side of the screen
      this.velx = -this.velx;
    }

    if (this.y + this.size >= height - 8) {
      // for bottom of screen bc top of screen is 0
      this.vely = -this.vely;
    }
    if (this.y + this.size <= 50) {
      // for top of screen
      this.vely = -this.vely;
    }

    this.x += this.velx;
    this.y += this.vely;
  }
}

canvas.addEventListener("click", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  for (const ball of balls) {
    // Check if the mouse click is within the bounding box of the ball
    const dx = mouseX - ball.x;
    const dy = mouseY - ball.y;
    const distanceSquared = dx * dx + dy * dy;

    // Check if the mouse click is within the circle's radius from the center
    if (distanceSquared <= ball.size * ball.size) {
      if (ball === upOne) {
        volume++; // Increment volume
      } else if (ball === downOne) {
        volume--; // Decrement volume
      } else if (ball === submit) {
        const userIntegral = prompt(
          "I hope you've kept up with you math skills... Solve the integral from 2-3 8x^3 + 3x^2 + 6x dx"
        ); // Prompt user for the integral equation
        const expectedResult = 164; // Set the expected result of the integral equation (adjust as needed)

        // Evaluate user's input equation
        try {
          const result = eval(userIntegral); // Evaluate the user's input equation

          // Check if the evaluated result matches the expected result
          if (result === expectedResult) {
            alert("Volume successfully submitted!"); // Display success message if the result is correct
            // Additional logic to update volume if needed
          } else {
            alert("Incorrect integral result. Please try again."); // Display error message if the result is incorrect
            volume = 0;
          }
        } catch (error) {
          alert("Invalid integral equation. Please enter a valid equation."); // Display error message for invalid input
        }

        return; // Prevent volume from being updated
      } else {
        volume = ball.num; // Update volume with the clicked ball's value
      }
      break; // Exit loop early if collision detected
    }
  }
});

function drawCount() {
  ctx.fillStyle = "white";
  ctx.font = "bold 24px Arial";
  ctx.fillText(`Volume: ${volume}`, 375, 50); // Adjust position as needed
}

const balls = [];
//Draw Balls to populate the Canvas
while (balls.length < 30) {
  const size = 25;
  const ball = new Ball(
    random(0 + size, width - size), // ensures ball will spawn on the screen
    random(0 + size, height - size),
    random(1, 3),
    random(1, 3),
    randomRGB(),
    size,
    random(1, 99) // creates random num to assign to ball
  );
  balls.push(ball);
}

const upOne = new Ball(150, 50, 0, 0, randomRGB(), 25, "+1");
balls.push(upOne);

const downOne = new Ball(50, 50, 0, 0, randomRGB(), 25, "-1");
balls.push(downOne);

const submit = new Ball(250, 50, 0, 0, randomRGB(), 25, "Submit");
balls.push(submit);

upOne.update = function () {
  // Keep the position fixed
};

downOne.update = function () {
  // Keep the position fixed
};

submit.update = function () {
  //Keep the position fixed
};

function loop() {
  // activley animate the ball
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  //UpOne.draw();
  //DownOne.draw();
  drawCount();
  requestAnimationFrame(loop); // built in js function, functionally makes this run forever
}

loop();
