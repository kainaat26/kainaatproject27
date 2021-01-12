class Rope {
    constructor(bodyA,pointB){
        var options = {
            stiffness : 0.04,
            length : 10,
            bodyA:bodyA,
            pointB:pointB
        }

    this.Rope = Constraint.create(options);
    World.add(world,this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}