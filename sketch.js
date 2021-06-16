var gameState="undocked"

function preload(){
  spaceshipImg=loadImage("iss.png")
  bgImg=loadImage("spacebg.jpg")
  spacecraft1=loadAnimation("spacecraft2.png","spacecraft3.png","spacecraft4.png")
  spacecraft2=loadAnimation("spacecraft1.png")
}


function setup() {
  createCanvas(800,400);
  spaceship=createSprite(400, 200, 50, 50);
  spaceship.addImage(spaceshipImg)

  spacecraft=createSprite(400,300)
  spacecraft.addAnimation("undocked",spacecraft1)
  spacecraft.addAnimation("docked",spacecraft2)
  spacecraft.scale=0.15
}

function draw() {
  background(bgImg); 
  console.log(spacecraft.x)
  console.log(spacecraft.y)
  if(gameState !== "docked"){
    if(keyDown("right")){
      spacecraft.x += 5
    }
    if(keyDown("left")){
      spacecraft.x -= 5
    }
    if(keyDown("up")){
      spacecraft.y -= 5
    }
    if(keyDown("down")){
      spacecraft.y += 5
    }
    if(spacecraft.x===335 && spacecraft.y===280){
      gameState="docked"
    }
  }
  else{
    spacecraft.changeAnimation("docked",spacecraft2)
    spacecraft.y=265
  }
  drawSprites();
}