const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box6;
var stone;

function preload(){

}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 ground= new Ground(200,390,400,20);
 box1 = new Box(330,235,30,40);
 box2 = new Box(360,235,30,40);
 box3 = new Box(390,235,30,40);
 box4 = new Box(420,235,30,40);
 box5 = new Box(450,235,30,40);
 box6 = new Box(360,195,30,40);
 stone = new Stone(50,200,20);
 slingshot=new Slingshot()
var options={
    bodyA: bird.body,
    bodyB:constraintstone.body,
    stiffness: 0.04,
    length:10
}
}



function draw(){
    background(255,255,255);
    Engine.update(engine);
   ground.dislpay();
 
   box.dislpay();
   box.dislpay();
   box.dislpay();
   box.display();
   box.display();
   box.display();
   stone.display();
   slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,stone.body.position, {x: 10 , y: -10});
}


function mouseReleased(){
    slingshot.fly();
}
