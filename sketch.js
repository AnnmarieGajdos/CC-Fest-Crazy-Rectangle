var xPosition=300;
var yPosition=400;
var xSpeed=8;
var ySpeed=8;
var diameter = 100;
var rainbowColors;
var xAxis=10;
var yAxis=10;

function setup() {
  createCanvas(500,500);
  rainbowColors = color(0);
}

function draw() {
 background(150,150,250);
 var xAxis=mouseX
 var yAxis=mouseY
  fill(rainbowColors);
  diameter=mouseX
  rect(xPosition,yPosition,xAxis, yAxis);
  xPosition += xSpeed;
  if ((xPosition + 50 >= width) ||(xPosition -50 <=0)) {
    xSpeed *= -1;
  }
  yPosition += ySpeed;
  if ((yPosition +50 >=height) ||(yPosition -50 <=0)) {
  ySpeed *= -1;
  } 
  
  }

function mouseClicked() {
  rainbowColors = color(random (255), random(155), random (55));
}
  