const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("back.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(578,300,200,20);
    ground2 = new Ground(600,height,1200,20);
    ground3 = new Ground(1200,height,20,1200);

    box  = new Box(550,290,50,50);
    box1 = new Box1(540,290,50,50);
    box2 = new Box2(560,290,50,50);
    box3 = new Box3(650,270,50,50);
    box4 = new Box4(525,250,50,50);
    box5 = new Box5(575,240,50,50);
    box6 = new Box6(625,220,50,50);
    box7 = new Box (575,200,50,50);





    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{x:200, y:200});


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();




    bird.display();
  
    slingshot.display();    
    ground.display();
    ground2.display();
   // ground3.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32 ){
        
         slingshot.attach(bird.body);

    }
}