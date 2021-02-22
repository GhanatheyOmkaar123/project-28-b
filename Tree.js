class Tree{
    constructor(x,y,width,height){
       var options = {
           isStatic:true,
           restitution:0,
           friction:1,
           density:1.2
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.image= loadImage("images/tree.png");
       World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,500,500);
        pop();
    }
}