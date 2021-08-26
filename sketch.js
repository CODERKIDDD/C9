var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 10, 10);
}

function draw() 
{
  background("blue");
  drawSprites()

  if (keyIsDown(RIGHT_ARROW)) {
    box.x = box.x+1;
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x-1;
  }

}




