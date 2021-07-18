const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bottle;
var bottle1;
var bottle2;
var bottle3;
var gun;
var bullet;
var world;


function preload()
{
   bottleImg  = loadImage("bottle.png");
   bottleImg1 = loadImage("bottle1.png");
   bottleImg2 = loadImage("bottle2.png");
   bottleImg3 = loadImage("bottle3.png");
   gunImg = loadImage("gun.png");
   bulletImg = loadImage("bullet.jpeg")

}

function setup()
{
    canvas = createCanvas(1200,770);

    bottle = new Bottle(400,350,20,20);
    bottle.scale = 0.2;

    bottle1 = createSprite(530,250,20,20);
    bottle1.addImage("bottle1", bottleImg1);
    bottle1.scale = 0.2;

    bottle2 = createSprite(660,350,20,20)
    bottle2.addImage("bottle2", bottleImg2);
    bottle2.scale = 0.2;

    bottle3 = createSprite(520,460,20,20);
    bottle3.addImage("bottle3", bottleImg3);
    bottle3.scale = 0.2;
  

    gun = createSprite(520,350,20,20);
    gun.addImage("gun", gunImg);
    gun.scale = 0.2;

    bullet = createSprite(400,400,20,20);
    bullet.addImage("bullet", bulletImg);



    


    

}

function draw()
{
     fill(255);
    background(0);

      
    drawSprites();
}