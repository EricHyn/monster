let player = [];
let xPos;
let dir;


function preload() {
  player[0] = loadImage('data/leftmonster.PNG');
  player[1] = loadImage('data/rightmonster.PNG');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = 0;
  dir = 0;
}

function draw() {
  background(255);
  image(player[dir], xPos, height-500, 500, 500);
}

function mouseMoved(){
  xPos = mouseX;
  if (mouseX - pmouseX < 0){
    dir = 0;
  }
  else{
    dir = 1;
  }
}

function touchMoved(){
  xPos = mouseX;
  if (mouseX - pmouseX < 0){
    dir = 0;
  }
  else{
    dir = 1;
  }
}