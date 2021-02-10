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
var paused = false













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

   rickSprite = createSprite(300,400,30,30)
      rickSprite.scale = 0.4;
      rickSprite.addImage(rickAstley)
      rickSprite.visible = false;
  

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
    rickSprite.visible = true;
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
      if(score >=1000){
   rickSprite.visible = false
    }
      obstacleGroup.destroyEach()
      score = 0;
    }
  }
  else if (state === "immunity"){
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
  
    if(player.isTouching(obstacleGroup)){
      obstacleGroup.destroyEach()
      immunityGroup.destroyEach()
      state = "play"
    }
    else if (player.isTouching(wallGroup)){
      obstacleGroup.destroyEach()
      wallGroup.destroyEach()
      state = "end"

    }
  


  }
}












function spawnObject(){
  if (frameCount%20 === 0){

    var decider = Math.round(random(1,28));

    switch(decider){


        case 1:
        console.log("case 1,obstacle1")
        obstacle1 = createSprite(Math.round(random(30,560)),600,20,20)
        obstacle1.addImage(obstacle1Image)
        obstacle1.velocityY = -8 -score/300;
        obstacleGroup.add(obstacle1)
        obstacle1.lifetime = 200;
        
        break;

        case 2:
        console.log("case 2, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
        break;

      case 3: 
        console.log("case 3, obstacle 3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break;

      case 4:
      if(state != "immunity"){
      console.log("immunity spawned, case 4")
        immunity = createSprite(Math.round(random (30,560)),600,20,20)
        immunity.addImage(immunityIMG)
        immunity.velocityY = -8 - score/300;
        immunityGroup.add(immunity)
        immunity.lifetime = 200;
      }
      else{

        var nextDecider = Math.round(random(1,3))

          if(nextDecider === 1){
            
        console.log("subCase 1,obstacle1")
        obstacle1 = createSprite(Math.round(random(30,560)),600,20,20)
        obstacle1.addImage(obstacle1Image)
        obstacle1.velocityY = -8 -score/300;
        obstacleGroup.add(obstacle1)
        obstacle1.lifetime = 200;

          }
        
          else if (nextDecider === 2){
        console.log("subCase 2, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
          }
          else if (nextDecider === 3){
        console.log("case 3, obstacle 3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200
          }
        }
        break;
      

      case 5:
        console.log("case 5, obstacle 1")
        obstacle1 = createSprite(Math.round(random(30,560)),600,20,20)
        obstacle1.addImage(obstacle1Image)
        obstacle1.velocityY = -8 -score/300;
        obstacleGroup.add(obstacle1)
        obstacle1.lifetime = 200
        break;

      case 6:
        console.log("case 6, obstacle 2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
        break;

      case 7:
        console.log("case 7, obstacle 3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break;

      case 8:
      console.log("case 8, obstacle1")
          obstacle1 = createSprite(Math.round(random(30,560)),600,20,20)
        obstacle1.addImage(obstacle1Image)
        obstacle1.velocityY = -8 -score/300;
        obstacleGroup.add(obstacle1)
        obstacle1.lifetime = 200
        break;

      case 9:
        console.log("Case 9, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;

        break;
      case 10:
      console.log("case 10, obstacle3")      
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break;

      case 11:
      console.log("case 11, obstacle1")
      obstacle1 = createSprite(Math.round(random(30,560),600,20,20))
      obstacle1.addImage(obstacle1Image)
      obstacle1.velocityY = -8 - score/300;
      obstacleGroup.add(obstacle1)
      obstacle1.lifetime = 200
      break;

      case 12:
      console.log("case 11, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
        break;

      case 13:
      console.log("case 13, obstacle3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200
        break;

      case 14:
      console.log("case 14, obstacle1")
      obstacle1 = createSprite(Math.round(random(30,560),600,20,20))
      obstacle1.addImage(obstacle1Image)
      obstacle1.velocityY = -8 - score/300;
      obstacleGroup.add(obstacle1)
      obstacle1.lifetime = 200;
      break;

      case 15:
      console.log("case 15, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
      break;

      case 16:
      console.log("case 16, obstacle3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break;

      case 17:
      console.log("case 17, obstacle1")
      obstacle1 = createSprite(Math.round(random(30,560),600,20,20))
      obstacle1.addImage(obstacle1Image)
      obstacle1.velocityY = -8 - score/300;
      obstacleGroup.add(obstacle1)
      obstacle1.lifetime = 200;
      break;

      case 18:
      console.log("case 18, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
      break;

      case 19:
      console.log("case 19, obstacle3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break;

      case 20:
      console.log("case 20, obstacle1")
      obstacle1 = createSprite(Math.round(random(30,560),600,20,20))
      obstacle1.addImage(obstacle1Image)
      obstacle1.velocityY = -8 - score/300;
      obstacleGroup.add(obstacle1)
      obstacle1.lifetime = 200
      break;

      case 21:
      console.log("case 21, obstacle2")
        obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
      break;

      case 22:
      console.log("case 22, obstacle3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break;

        case 23:
        console.log("case 23, obstacle1")
      obstacle1 = createSprite(Math.round(random(30,560),600,20,20))
      obstacle1.addImage(obstacle1Image)
      obstacle1.velocityY = -8 - score/300;
      obstacleGroup.add(obstacle1)
      obstacle1.lifetime = 200
      break;

      case 24:
      console.log("case 24, obstacle2")
      obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200;
      break;

      case 25:
      console.log("case 25, obstacle3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200
        break; 

      case 26:
      console.log("case 26, obstacle1")
      obstacle1 = createSprite(Math.round(random(30,560),600,20,20))
      obstacle1.addImage(obstacle1Image)
      obstacle1.velocityY = -8 - score/300;
      obstacleGroup.add(obstacle1)
      obstacle1.lifetime = 200
      break;
      
      case 27:
      console.log("case 27, obstacle2")
      obstacle2 = createSprite(Math.round(random(30,560)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle2)
        obstacle2.lifetime = 200
        break;

      case 28:
    console.log("case 28, obstacle3")
        obstacle3 =  createSprite(Math.round(random(30,560)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8 - score/300;
        obstacleGroup.add(obstacle3);
        obstacle3.lifetime = 200;
        break; 

      }
      
    }

    



    
  }

