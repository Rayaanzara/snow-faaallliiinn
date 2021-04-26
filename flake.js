class Flake{
    constructor(x,y){
        var options = {
         friction:0.001,
        restitution:0.01}
    this.flake  = Bodies.circle(x,y,5,options)
   this.radius = 15;
   this.image = loadImage("snow4.jpg")

   World.add(world,this.flake)
    }


    updateY(){

 if(this.flake.position.y > height){
 Matter.Body.setPosition(this.flake,{x:random(0,400) , y:random(0,400)})
}





}

display(){
    fill("white")
    imageMode(CENTER)
    image(this.image ,this.flake.position.x , this.flake.position.y , this.radius , this.radius)
}
}