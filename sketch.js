
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,200,23,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bobObject1.display();








  drawSprites();
 
}



