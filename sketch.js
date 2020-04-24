var rectangle_1
var rectangle_2
var rectangle_3
var rectangle_4
var rectangle_5
var rectangle_6
var rectangle_7
var rectangle_8
var triangle_2
var triangle_3
function setup() {
  createCanvas(400,400);
  rectangle_1=createSprite(360, 300, 20, 300);
  rectangle_2=createSprite(300,350,45,250)
  rectangle_3=createSprite(254,350,45,150)
  rectangle_4=createSprite(196,350.49,70)
  rectangle_5=createSprite(138,350,45,150)
  rectangle_6=createSprite(92 ,350,45,250)
  rectangle_7=createSprite(40, 300, 20, 300);
  rectangle_8=createSprite(195,250,0.9,100)
  rectangle_9=createSprite(95,230,0.9,100)
  rectangle_10=createSprite(300,230,0.9,100)
  
  

  


}

function draw() {
  background(0);  
  circle(196,287,67)
  circle(93,215,40)
  circle(300,215,40)
  drawSprites();
}