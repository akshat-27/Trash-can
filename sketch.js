
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var ground;
var box, box1, box2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	 paperBall = new Paper(100, 500, 35, 35);
	 ground = new Ground(500,690,1000,20);
}

function draw() {
  rectMode(CENTER);
  background(0);

  box = createSprite(600, 675, 130,  10);
  box1 = createSprite(670, 650, 10,  60);
  box2 = createSprite(530, 650, 10,  60);

  paperBall.display();
  ground.display();
  drawSprites();
 
  //paperBall.bounce(box);
  //paperBall.bounce(box1);
  //paperBall.bounce(box2);
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 2, y: -5});
  }
}