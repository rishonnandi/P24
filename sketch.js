
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	 createCanvas(1200, 500);
	 engine = Engine.create();
	 world = engine.world;
	
    
   ground = new Ground(600,height,1200,20);
   paperObject=new Paper(200,480,40);
   box1=new Box(width/2-140,610,20,100);
	box2=new Box(width/2-60,649,200,20);
	box3=new Box(width-360,610,20,100);
	

	    
}


function draw() {
   background(0);
    Engine.update(engine);
    ground.display();
    paperObject.display();
    box1.display();
    box2.display();
    box3.display();

    drawSprites();
 }
 

  function keyPressed(){
     if(keyCode===UP_ARROW){
    
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});

     }

       }


