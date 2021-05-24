class Slingshot{
    constructor(a,b){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=b
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
    this.sling.bodyA=null  
      
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}