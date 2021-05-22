class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.polygon = loadImage("polygon.png");
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.polygon.bodyA = body;
    }
    
    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.polygon,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.polygons,pointA.x -30, pointA.y -10,15,30);
            }
            
            pop();
        }
    }
    
}