var canvas;
var gameState;
var play = 1;
var end = 2;
var runner,runner_Img;
var runner_Img2;
var runner_Img3;
var runnerstarterImg;
var startPoint,startPoint_Img;
var ground2;
var ground1;
var backgroundImg;
var obstaclesGroup;
var obstacle;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle1s;
var starterText;
var starterTextImg;
function preload(){
    backgroundImg = loadImage("./img/BACK.png");
    runnerstarterImg = loadImage("./img/starter.png");
    runner_Img = loadImage("./img/runner.gif");
    runner_Img2 = loadImage("./img/jumper.png");
    runner_Img3 = loadImage("./img/lander.png");
    startPoint_Img = loadImage("./img/startPoint.png");
    obstacle1 = loadImage("./img/1obstacle.png");
    obstacle2 = loadImage("./img/2obstacle.png");
    obstacle3 = loadImage("./img/3obstacle.png");
    obstacle4 = loadImage("./img/trapper.png");
    obstacle5 = loadImage("./img/fire.png");
    obstacle6 = loadImage("./img/point.png");
    starterTextImg = loadImage("./img/starterText1.png");
}
    
function setup(){
    canvas = createCanvas(800,300);
    runner = createSprite(100,265,0,0);
    runner.addImage(runnerstarterImg);
   // runner.addImage(runner_Img);
    startPoint = createSprite(80,265,0,0);
    startPoint.addImage(startPoint_Img); 
    starterText = createSprite(350,150,30,30);
    starterText.addImage(starterTextImg);
    ground1 = createSprite(0,180,displayWidth+1000,4);
    ground2 = createSprite(0,290,displayWidth+1000,4);
    runner.setCollider('circle',0,0,15)
    //runner.debug = true;
    obstaclesGroup = new Group();
   // obstacle1s = createSprite(800,265,10,40);
   // obstacle2s = createSprite(200,265,10,40);
  //  obstacle3s = createSprite(400,265,10,40);
}

function draw(){
    background(backgroundImg)
    starterText.scale = 0.5;

 if(keyCode === 32){
    gameState = play;
 }

 ground1.visible = false;
 ground2.visible = false; 
   if(gameState ===play){
 spawnobstacles();
 runner.scale = 1.5;
 startPoint.position.x = startPoint.position.x-3;
 starterText.position.x = starterText.position.x-3;
 if(keyIsDown(UP_ARROW) && (gameState)){
 runner.position.y = runner.position.y-5
 runner.addImage(runner_Img2);

 }

 runner.position.y = runner.position.y+3
     
 if(runner.collide(ground1)){
    runner.addImage(runner_Img3);
 }
 if( runner.collide(ground2))
 {
 runner.addImage(runner_Img);
 }
if(runner.isTouching(obstaclesGroup)){
runner.addImage(runnerstarterImg);
gameState = end;
//obstacle1s.velocity.x = 0;
}    //ground.x = ground.position.x-3
//backgroundSound.play();
   }
   if(gameState === end){
  obstaclesGroup.setVelocityXEach(0);
   }
   drawSprites();
}

function spawnobstacles(){
    if(frameCount % 250 === 0) {
        obstacle1s = createSprite(800,280,10,40);
       // obstacle.debug = true;
        obstacle1s.velocity.x = -3;
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle1s.addImage(obstacle1);
                  break;
          case 2: obstacle1s.addImage(obstacle2);
                  break;
          case 3: obstacle1s.addImage(obstacle3);
                  break;
          case 4: obstacle1s.addImage(obstacle4);
                  break;
          case 5: obstacle1s.addImage(obstacle5);
                  break;
          case 6: obstacle1s.addImage(obstacle6);
                  break;        
          default: break;
        }
                 
        obstacle1s.scale = 0.5;
        //obstacle1s.lifetime = 300;
        obstaclesGroup.add(obstacle1s);
        
      }

}