class Box {
  constructor(x, y, w, h) {
    var options = {
      friction: 0.3,
      restitution: 0.4
    }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }


  show() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();

    strokeWeight(3);
    stroke(255);
    fill(127);
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);

    pop();
  }
}
