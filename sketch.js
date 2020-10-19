
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash
var ground
var dustbin1,dustbin,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

trash = new Trash (10,20)
ground = new Ground (400,690,800,5)
dustbin1 = new Dustbin (430,610,45,400)
dustbin2 = new Dustbin (666,652,45,440)
dustbin3 = new Dustbin (466,694,400,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 trash.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 fill("grey")
 strokeWeight(3)
 stroke("grey")
 textSize(24)
 text("X:"+mouseX+",Y:"+mouseY,mouseX,mouseY)
}

function keyPressed (){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(trash.body,trash.body.position ,{x:175 , y:-175})
}
if (keyCode === LEFT_ARROW){
Matter.Body.applyForce(trash.body,trash.body.position,{x:-173 , y:-173})
}





}