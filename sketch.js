const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var flakes = []
var maxFlakes = 100;
function preload(){
backgroundImg = loadImage("snow1.jpg")

}
function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  

  if(frameCount%150 === 0){
  for(var i = 0; i<maxFlakes; i++){
  flakes.push(new Flake(random(0,800),random(0,800)))    
  }
  }
  
}

function draw() {
  background(backgroundImg)
  Engine.update(engine)
    

for( var i = 0; i<maxFlakes; i++){
  flakes[i].display();
  flakes[i].updateY() 
}  
  drawSprites();
}