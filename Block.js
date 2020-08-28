class Box{
    constructor(x, y, width, height, color) {
        var options = {
            'restitution':0.5,
            'friction':1,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width-10, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        //this.gameState = "static";
        this.visibility = 255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill(this.color);
          strokeWeight(2);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else if(this.body.speed>=3){
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          rect(0,0,this.width,this.height);
          World.remove(world,this.body);
          pop();
          }
      }

      score(){
        if(this.visibility>-105 && this.visibility<0){
          score++;
        }
      }
}