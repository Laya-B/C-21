const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground
var left
var top
var right

var button1, button2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground = new Ground(200, 390, 400, 20)
  left = new Ground(10, 200, 20, 400)
  top = new Ground(200, 10, 400, 20)
  right = new Ground(390, 200, 20, 400)



  rectMode(CENTER);
  ellipseMode(RADIUS)
}

function draw() 
{
  background(51);
  ground.show()
  left.show()
  top.show()
  right.show()
  Engine.update(engine);
}

function h_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})
}

function v_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}