var pathImg , runnerAnimation;
var track , player , invisibaleedgeL , invisibaleedgeR ;

function preload(){
  //pre-load images
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){ 
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage("track",pathImg)
  track.velocityY = 4;
  track.scale = 1.2;

  invisibaleedgeL = createSprite(20,200);
  invisibaleedgeL.visible = false;
  
  invisibaleedgeR = createSprite(380,200);
  invisibaleedgeR.visible = false;

  player = createSprite(200,150);
  player.addAnimation("running",runnerAnimation);
  player.scale = 0.5;
  
}
function draw() {
  background(0);

  
  
  if(track.y > 400){
    track.y = height/2
  }
  player.collide(invisibaleedgeL);
  player.collide(invisibaleedgeR);
  
  drawSprites();
}
