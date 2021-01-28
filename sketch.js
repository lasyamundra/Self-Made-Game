var backgrd, backgroundImg;
var boy, boyImg;
var coin, gameLogo, gameOver, gameOverImg;
var reset, resetImg;
var track, trackImg;
var train, train1, train2, train3, train4;

function preload(){
    backgroundImg = loadImage ("images/background.png");
    
    boyImg = loadAnimation ("images/boy1.png", "images/boy2.png");
    
    coin = loadImage ("images/coin.png");
    gameLogo = loadImage ("images/gameLogo.png");
    gameOverImg = loadImage ("images/gameOver.png");
    
    resetImg = loadImage ("images/reset.png");
    trackImg = loadImage ("images/track.png");
    
    train1 = loadImage ("images/train.png");
    train2 = loadImage ("images/train2.png");
    train3 = loadImage ("images/train3.png");
    train4 = loadImage ("images/train4.png");
}

function setup(){
    createCanvas (windowWidth,windowHeight);

    backgrd = createSprite (500,500);
    backgrd.addImage (backgroundImg);
    backgrd.scale = 5;
    //backgrd.velocityY = -10;

    track = createSprite (width/2,200);
    track.addImage (trackImg);
    track.scale = 1;
    track.velocityY = 2;
}

function draw(){
    background (0);

    if (backgrd.y<0){
        backgrd.y = 800;
    }

    if (track.y>height){
        track.y = height/2;
    }
    image(trackImg, 0,-displayHeight*4,displayWidth, displayHeight*5);

    drawSprites();
}