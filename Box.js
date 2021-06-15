class Box{
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
          'restitution':1

        }
        this. body= Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world,this.body) ;
    }
        display(){
            if(this.body.velocity.x > 10 && this.body.position.x > 200){
                var position = [this.body.position.x, this.body.position.y];
                this.trajectory.push(position);
              }
            var pos = this.body.position;
            rectMode(CENTER);
            fill("pink");
            rect(pos.x,pos.y,this.width,this.height);
        }
}
