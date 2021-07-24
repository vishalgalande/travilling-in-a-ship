var ship, shipimg;
var sea, seaimg;


function preload(){

  // loading ship animation
  shipimg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  
  //loading sea 
  seaimg = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  
  //creating ship
  ship = createSprite(100, 274, 20, 50);
  ship.addAnimation("idle", shipimg);
  ship.scale = 0.2;

  //creating sea
  sea = createSprite(200, 180, 100, 20);
  sea.addImage(seaimg);
  sea.x = sea.width / 1.999;
  

}



function draw() {
  background("blue");


  //changing ship depth make it visible
  ship.depth = 3;


  //makin sea move
  sea.velocityX = -7;

  if (sea.x < -1687)
  {
    sea.x = sea.width / 1.999;
  }

  //console.log(sea.x);
  //console.log(sea.width + " hello");
  drawSprites();
}