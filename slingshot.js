class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=this.pointB
        this.sling = Constraint. create(options)
        World.add(world,this.sling)
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stokeweight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
