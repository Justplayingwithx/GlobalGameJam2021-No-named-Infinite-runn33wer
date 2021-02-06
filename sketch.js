var player, playerImage
var obstacleGroup;
var obstacle1, obstacle2_1, obstacle2_2, obstacle2, obstacle3;
var obstacle1Image, obstacle2Animation, obstacle3Image;
var obstacleGroup;
var score = 0;
var state   = "play";
var wall1, wall2, wallGroup
var immunity, immunityIMG, immunityGroup, immunityDecider
var rickAstley;
var rickSprite;













function preload(){
obstacle1Image = loadImage("Obstacle1.png")
  playerImage = loadImage("Player.png")
  obstacle2Animation = loadAnimation("obstacle2_1.png","obstacle2_2.png");
  obstacle3Image = loadImage("obstacle3.png")
  immunityIMG = loadImage("immunity.png")
  rickAstley = loadImage("Ra50b8b482d66b8722f2e2b391e01119e.png")
 
  
}





function setup() {
  createCanvas(600,600)
  player = createSprite(300,70,20,20)
  player.addImage(playerImage)

  wall1 = createSprite(590,300,20,600)
  wall1.shapeColor = "blue"
  wall2 = createSprite(10,300,20,600)
  wall2.shapeColor = "blue"

  wallGroup = new Group();

  immunityGroup = new Group();

  wallGroup.add(wall1)
  wallGroup.add(wall2)
  
  obstacleGroup = new Group();
  spawnObject();
 
}











function draw() {
  background("white");
  if(state === "play"){
    
    if(score>=1000){
     rickSprite = createSprite(300,400,30,30)
      rickSprite.scale = 0.4;
      rickSprite.addImage(rickAstley)
      if(score < 1000){
        rickSprite.visible = false
      }
    }


    if(state != "immunity"){

      immunityDecider = random(1,5)
   
      if(immunityDecider === 5){
        console.log("sdfsd")
        immunity = createSprite(Math.round(random (30,560)),600,20,20)
        immunity.addImage(immunityIMG)
        immunity.velocityY = -8 - score/300;
        immunityGroup.add(immunity)
      }
     }



  text("Score: "+score,500,20)


  
  if(player.isTouching(immunityGroup)){
    immunityGroup.destroyEach()
    state = "immunity"
  }
 drawSprites();
  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
  }
  spawnObject();
  score = score + 1;
  if(player.isTouching(obstacleGroup)||player.isTouching(wallGroup)){
    state = "end"
  }
  }
  else if(state === "end"){
    player.x = 300
    text("Game Over! Press space to restart. Your final score was "+score+".",200,300)
    if(keyDown("space")){
      state = "play";
      obstacleGroup.destroyEach()
      score = 0;
    }
  }
  else if (state = "immunity"){
    text("Score: "+score,500,20)


 drawSprites();
  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
  }
  spawnObject();
  score = score + 1;
  
    if(player.isTouching(obstacleGroup)||player.isTouching(wallGroup)){
      obstacleGroup.destroyEach()
      immunityGroup.destroyEach()
      state = "play"
    }
  


  }
}












function spawnObject(){
  if (frameCount%20 === 0){
    var decider = Math.round(random(1,3));
    switch(decider){
        case 1:
        obstacle1 = createSprite(Math.round(random(30,560)),600,20,20)
        obstacle1.addImage(obstacle1Image)
        obstacle1.velocityY = -8 -score/300;
        obstacleGroup.add(obstacle1)
        
        break;
        case 2:
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        break;
      case 3: 
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
    }

    



    
  }
}
