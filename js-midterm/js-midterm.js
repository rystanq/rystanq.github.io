// Declarying Variables 

const curVolume = document.querySelector("#curVolume");
//const submitBtn = document.querySelector("#submit");
//const radnomBtn = document.querySelector("#random");
//const UpOne = document.querySelector(".upOne");
//const DownOne = document.querySelector(".downOne");

//let volume = 13;

//submitBtn.addEventListener("click", submitted);
//radnomBtn.addEventListener("click", ranNumber);
//UpOne.addEventListener("click", addVol);
//DownOne.addEventListener("click", subVol);

//function submitted(){
  //  alert("Your final volume is " + volume + ". Thank you for playing, I hope it was infuriating.");
    //randomize volume when finished so user can start over
//}



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
  
  
  
  class Ball{
      constructor(x, y, velx, vely, color, size, pom){
          this.x = x;
          this.y = y;
          this.velx = velx;
          this.vely = vely;
          this.color = color; 
          this.size = size;
          this.pom = pom; // plus or minus 
      }
  
      draw(){
          ctx.beginPath(); // begin to draw a ball
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, 0, 2 *Math.PI); // draws an arc and uses x and y as parameters for radius, 0 to 2Pi is a circle
          ctx.fill(); // fill what weve just drawn
      }
      collisionDetect(){ // for one percent extra credit make the balls bounce off eachother 
          for (const ball of balls){
              if (this !== ball){
                  const dx = this.x - ball.x;
                  const dy = this.y - ball.y;
                  const distance = Math.sqrt(dx * dx + dy * dy);
  
                  if (distance < this.size + ball.size){
                      // reverse velocities of ball
                      ball.color = this.color = randomRGB();
                      [this.velx, ball.velx] = [ball.velx, this.velx];
                      [this.vely, ball.vely] = [ball.vely, this.vely];
                  }
              }
          }
      }
  
      update(){
          if ((this.x + this.size) >= width){ // if ball hits edge of screen right side
              this.velx = -(this.velx);
          }
          if ((this.x + this.size) <= 0){ // if ball hits edge of screen left side, 0 is the far most left side of the screen
              this.velx = -(this.velx);
          }
  
          if((this.y + this.size) >= height){ // for bottom of screen bc top of screen is 0
              this.vely = -(this.vely);
          }
          if((this.y + this.size) <= 0){ // for top of screen
              this.vely = -(this.vely);
          }
  
          this.x += this.velx;
          this.y += this.vely;
      }

      upone(){
        if (this.pom === 1) {
            volume++;
        } else if (this.pom === 0) {
            volume--;
        }
      }

      collisonVol(){
        for (const ball of balls){
            ball.addEventListener("click", upOne)
        }
      }
  }
  
  const balls = [];
  
  while (balls.length < 30){
      const size = 15;
      const ball = new Ball(
          random(0 + size, width - size), // ensures ball will spawn on the screen
          random(0 + size, height - size),
          random(-10, 10), 
          random(-10, 10),
          randomRGB(),
          size,
          random(0,1)// creates either a plus one or minus one ball to affect the volume
      );
  
      balls.push(ball);
  }
  
  function loop(){ // activley animate the ball
      ctx.fillStyle = "rgb(0 0 0 / 25%)";
      ctx.fillRect(0, 0, width, height);
      
      for (const ball of balls){
          ball.draw();
          ball.update();
          ball.collisionDetect();
      }
  
      requestAnimationFrame(loop);// built in js function, functionally makes this run forever

      // could create a loop that creates a div, and in that for loop i could add the event listerner before iterating
      // up. the canvas aspect is messing me up, the work around could be tricky 
  }
  
  loop();

