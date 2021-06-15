class Stone{
    constructor(x,y,radius) {
        var options = {
            density:1.5,
            friction:1.0,
            restitution : 0.5
        }
        
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,radius);

       
}
display(){
    var pos=this.body.position;
    var angle = this.body.angle;

    Push();
    Translate(pos.x,pos.y);
    rotate(angle);
    fill("red")
    ellipseMode(CENTER)
    ellipse(0,0,this.radius,this.radius)
    pop();
}
}