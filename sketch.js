const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1, rubber1, sand1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	var hammer1 = new Hammer(100, 100);
	var rubber1 = new Rubber(200, 300);
	var sand1 = new Sand(100, 400, 50, 50);


	
	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}



