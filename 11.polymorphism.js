function Shape(){

}

Shape.prototype.draw = function(){
    console.log("I am generic draw method")
}

function Circle(){

}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.draw = function(){
    console.log("Circle draw method")
    return "Circle draw method";
}

function Triangle(){

}
Triangle.prototype = Object.create(Shape.prototype)
// var circle = new Circle();
// circle.draw()

// var triangle = new Triangle()
// triangle.draw()

var shapes = [new Shape(),new Circle(),new Triangle()]
shapes.forEach(function(value){
    value.draw()
})