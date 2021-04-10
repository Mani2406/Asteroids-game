var backgroundImg;
var asteroidGroup;
var ship, shipImg;
var laserImg, laser;
var earth, earthImg;
var block1;
var score = 0;
var looseImg;

function preload() {
  backgroundImg = loadImage("space.jpg");
  asteroidImg = loadImage("asteroid.png");
  shipImg = loadImage("ship.png");
  laserImg = loadImage("laser.png");
  earthImg = loadImage("earth.png");
  looseImg = loadImage("loose.gif");
}

function setup() {
  createCanvas(1200,800);
 
 

  asteroidGroup = createGroup();
  asteroidGroup2 = createGroup();

  ship = createSprite(250,325,20,20);
  ship.addImage(shipImg);
  ship.scale = 0.35;

  laser = createSprite(400,500,20,100);
  laser.addImage(laserImg);
  laser.scale = 0.3;
  

  earth = createSprite(100,200,50,50);
  earth.addImage(earthImg);
  earth.scale = 0.5;
  
}

function draw() {
  background(backgroundImg);

  stroke("Red");
	textSize(20);
	fill("Red");
	text("Score = " + score, 100,50);

  
  ship.y = World.mouseY;
  ship.x = World.mouseX;
  laser.y = World.mouseY;
  laser.x = World.mouseX + 120;
 
  block1 = createSprite(10,1,20,1400);
  block1.visible = false;

  if(asteroidGroup.collide(laser)) {
    asteroidGroup.destroyEach();
    score = score + 10;
  }

  if(asteroidGroup.collide(block1)) {
     var block2 = createSprite(600,400,1200,800);
     block2.addImage(looseImg);
     earth.visible = false;
  }

  asteroids();
  drawSprites();
 
 

function asteroids() {
  if (frameCount % 220 === 0){
    var asteroid = createSprite(1200,200,20,20);
   
    asteroid.addImage(asteroidImg);
    asteroid.velocityX = -5
    asteroidGroup.add(asteroid);
    asteroid.scale = 0.25;
    asteroid.lifetime = 300;
    asteroid.y = random(200,700);
    earth.y = asteroid.y  
    asteroid.depth = laser.depth;

  
  }
}
}



  
