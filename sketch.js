var sea,seaImg;
var ship,shipImg;

function preload()
{
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png");
}

function setup()
{
  createCanvas(400,400);
  sea = createSprite (400,100,100,100);
  sea.addImage(seaImg);
  ship = createSprite (250,200,50,50);
  ship.addAnimation ("ship_moving",shipImg);
  ship.scale = 0.3;
  sea.scale = 0.7;
}

function draw() 
{
  background("Lightblue");
  sea.velocityX = -5;

  if (sea.x < 0)
  {
    sea.x = sea.width/3;
  }

  drawSprites();
}