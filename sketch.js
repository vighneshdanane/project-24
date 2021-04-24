
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas( 1600 , 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new dustbin(1040,610,20,100);
	box2 = new dustbin(1100,650,100,20);
	box3 = new dustbin(1150,610,20,100);

    paper1 = new paper(200 , 450 , 40 )
    
    ground = new Ground (width/2 , 670 , width , 20 )


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
box1.display();
box2.display();
box3.display();
paper1.display();
ground.display();




  drawSprites();

}

  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:83,y:-83});
  
	}
}



