var sea,ship;
var seaImg,shipImg;

function preload(){

  shipImg1= loadAnimation("ship-1.png","ship-2.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  //moving background
  sea=createSprite(400,200,20,50);
  sea.addAnimation("ship-1.png",shipImg1);
  edges=createEdgeSprites();

 

  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  edges = createEdgeSprites(200,180,400,20);
  ship.scale =0.25;
  
}

function draw() {
  background("blue");
  sea.velocityX = -3;


  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
    sea.y = height;
  }

 
  drawSprites();
}