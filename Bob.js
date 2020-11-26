class Bob{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:true});
      this.radius=radius;
      this.x=this.body.x;
      this.y=this.body.y;
        
        World.add(world,this.body);
    }
    display(){
      
      var pos=this.body.position;
       
      ellipseMode(RADIUS);
      fill(color(rgb(150,0,255)));
     ellipse(pos.x,pos.y,this.radius);
     
    }
}