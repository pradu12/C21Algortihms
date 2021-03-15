var box1,box2;
var box3,box4;



function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box1.shapeColor ="green";
  box1.velocityX = 2;
  box2 = createSprite (600,200,50,50);
  box2.shapeColor = "green";
  box2.velocityX = -2;
  box3 = createSprite (200,50,50,50);
  box3.shapeColor = "yellow";
  box3.velocityY = +2;
  box4 = createSprite (200,250,50,50);
  box4. shapeColor = "blue";
  box4. velocityY = -2;
  



}

function draw() {
  background(255,255,255);  
  //box2.x = mouseX;
  //box2.y = mouseY;
  if (isTouching(box3,box4)){
    box3.shapeColor = "brown";
    box4.shapeColor = "brown";
  }
   bounceOff(box3,box4);
  drawSprites();
}
 


