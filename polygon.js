class Polygon{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        polygonImg=loadImage("polygon.png")
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body)
        }
        display(){
            push()
            translate(this.body.position.x,this.body.position.y);
            ellipse(0,0,this.r,this.r);
            pop()
        }
    }