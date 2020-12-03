var ground;
var groundObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1300, 800);


	engine = Engine.create();
	world = engine.world;
	groundObject=new Ground(width/2,height/4,width/7,20); 
	bobDiameter=40;
	 startBobPositionX=width/2;
	  startBobPositionY=height/4+500;
	   bobObject1= new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
		bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
		 bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
		  bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
		   bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);



var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white"); 
 groundObject.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
  drawSprites();
 
}



