
var Engine = Matter.Engine,
    // render = Matter.Render,
    World  = Matter.World,
    Bodies = Matter.Bodies;

var boxes = [];
var ground;

function setup() {
  createCanvas(800, 800);
  var engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400, height, width, 10, options);
  World.add(world, ground);

  Engine.run(engine);
}

function draw() {
  background(0);

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  rectMode(CENTER);
  fill(0, 255, 100);
  rect(400, height, width, 10);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}
