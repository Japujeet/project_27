
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
  bob1=new Bob(200,500,40);
  bob2=new Bob(280,500,40);
  bob3=new Bob(360,500,40);
  bob4=new Bob(440,500,40);
  bob5=new Bob(520,500,40);

  rect1=new Rect(360,100,500,20);

  chain1=new Chain( bob1.body, rect1.body, -160, 0);
  chain2=new Chain(bob2.body,rect1.body,-80,0);
  chain3=new Chain(bob3.body,rect1.body,0,0);
  chain4=new Chain(bob4.body,rect1.body,80,0);
  chain5=new Chain(bob5.body,rect1.body,160,0);

}


function draw() {
	
  background(150,20,60);
  
  Engine.update(engine);
  
  rect1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  //move();

}

function keyPressed(){
  if (keycode===(UP_ARROW)){
    
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}

function drawline(){

}