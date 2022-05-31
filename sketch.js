var canvas;
var mario,marioimgD,marioimgI,mario_running_D,mario_running_I,saltod_img,saltoi_img;
var pisoi,piso;
var invisiblemuroI,invisiblepiso,invisiblemuroD
var backgroundImg;

function preload(){
backgroundImg=loadImage("./imagenes/fondo.png");
marioimgD=loadImage("./imagenes/mario-D.png");
marioimgI=loadImage("./imagenes/mario-I.png");
//saltod_img=loadImage("./imagenes/mario_salta-D.png");
//saltoi_img=loadImage("./imagenes/mario_salta-I.png");
mario_running_D=loadAnimation("./imagenes/mario_corriendo1-D.png","./imagenes/mario_corriendo2-D.png","./imagenes/mario_corriendo3-D.png");
mario_running_I=loadAnimation("./imagenes/mario_corriendo1-I.png","./imagenes/mario_corriendo2-I.png","./imagenes/mario_corriendo3-I.png");
pisoi=loadImage("./imagenes/piso.png");
}

function setup(){
    //muros invisibles
invisiblepiso=createSprite(0,557,900,5);
invisiblepiso.visible=true;
invisiblepiso.shapeColor="green";
invisiblemuroD=createSprite(04,505,5,100);
invisiblemuroD.visible=true;
invisiblemuroD.shapeColor="green";
invisiblemuroI=createSprite(595,505,5,100);
invisiblemuroI.visible=true;
invisiblemuroI.shapeColor="green";

//cargar los personajes
canvas=createCanvas(600,600);
mario=createSprite(100,545,20,20);
mario.addImage("parado_D",marioimgD);
mario.addImage("parado_I",marioimgI);
//mario.addImage("salto_D",saltod_img);
//mario.addImage("salto_I",saltoi_img);
mario.addAnimation("corriendod",mario_running_D);
mario.addAnimation("corriendoi",mario_running_I);
piso=createSprite(300,580,600,50);
piso.addImage(pisoi);
}

function draw(){
background("pink");
image(backgroundImg,0,0,600,600);
drawSprites();
//colicion con muros
mario.collide(invisiblepiso);
mario.collide(invisiblemuroD);
mario.collide(invisiblemuroI);
//gavedad o salto 
mario.velocityY=mario.velocityY+0.25;

 move();
}

function move(){
    if(keyDown("UP_ARROW")){
        mario.y=mario.y -5;
    }
    if(keyDown("DOWN_ARROW")){
        mario.y=mario.y +5;
    }
    if(keyDown("LEFT_ARROW")){
        mario.x=mario.x -5;
        //mario.addImage(marioimgI);
        mario.changeAnimation("corriendoi",mario_running_I);
        piso.x=piso.x -2;
        invisiblepiso.x=piso.x;
    }
    if(keyDown("RIGHT_ARROW")){
        mario.x=mario.x +5;
        //mario.addImage(marioimgD);
        mario.changeAnimation("corriendod",mario_running_D);
        piso.x=piso.x +2;
        invisiblepiso.x=piso.x;
    }
    if(keyDown("UP_ARROW")){
        mario.y=mario.y -3;
        //mario.changeImage("salto_D",saltod_img);
    }
    if(keyWentUp("RIGHT_ARROW")){
        mario.changeImage("parado_D",marioimgD);
        piso.x=piso.x;
    }
    if(keyWentUp("LEFT_ARROW")){
        mario.changeImage("parado_I",marioimgI);
        piso.x=piso.x;
    }
}