
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("sprite_0.png")
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.widht/2;
  console.log(ground.x)
}


function draw() {
if(keyDown("space")&& trex.y >= 160) {
        monkey.velocityY = -12; 
}
 monkey.velocityY = monkey.velocityY + 0.8
  score = score + Math.round(getFrameRate()/60);
  monkey.collide(ground);
}

function food(){
 if (World.frameCount % 80 === 0) {
var banana = createSprite(400, 300);
banana.setAnimation("Banana")
banana.scale= 0.5    
banana.lifetime= 80
 banana.y = randomNumber(120,200);
 banana.velocityX= - 5
}   
}

function obstacles(){
if (World.frameCount%80 === 0) {
 var obstacle = createSprite(400, 350);
obstacle.setAnimation("Stone")
obstacle.scale=0.15
 obstacle.lifetime= 80
 
  obstacle.velocityX= -5 
  
  
}

  
  
}
