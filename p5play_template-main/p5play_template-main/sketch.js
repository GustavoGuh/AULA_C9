var box;
function setup() {
  createCanvas(400,400);
   box = createSprite(200,200,30,30)
}

function draw() 
{
  background("purple");
  drawSprites();

  if(KeyIsDown(DOWN_ARROW)){
   box.position.y =box.position.y +2;
  }
}






