class Trash {

constructor(x,y){

var options = {
    restitution : 0.3,
    friction : 0.5,
    density : 1.2,
}

this.body = Bodies.circle(x,y,30,options)
World.add(world,this.body)
}

display(){

var pos = this.body.position
var angle = this.body.angle
fill("pink")
strokeWeight(6)
stroke("purple")
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,30,30)
}


















}