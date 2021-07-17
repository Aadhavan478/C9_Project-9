
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,100,100);
  box.shapeColor = "blue";
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x + 5;
    background('lightgreen');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x - 5;
    background('black');
  }
  if (keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y - 5;
    background('blue');
  }
  if (keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y + 5;
    background('yellow');
  }
}




