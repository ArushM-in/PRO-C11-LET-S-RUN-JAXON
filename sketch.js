
function preload(){
  trackImage=loadImage("path.png");
  runningBoy=loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  track=createSprite(200,200,400,400);
  track.addImage(trackImage);

  boy=createSprite(200,320,400,400);
  boy.addAnimation("running", runningBoy);
  boy.scale=0.08;

  left=createSprite(1,200,5,400);
  left.visible=false;
  right=createSprite(399,200,5,400);
  right.visible=false;
}

function draw() {
  background(0);

  track.velocityY=10;
  if (track.y>400) {
    track.y = 25;
  }
 
  boy.x=mouseX;

  if (mouseX<5) {
    boy.x=5;
  }

  boy.collide(left);
  boy.collide(right);

  drawSprites();
}
