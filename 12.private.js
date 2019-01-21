//revealing module pattern - exposing the methods which are only required

function Draw(){
 var name = 'Swathi'
 var getname = function(){
     console.log("getname executed")
     return this.name;
 }
 var hello = function(){
     return "hello guys"
 }

 var display = function(){
     return "testing private modifiers specifiers"
 }

 return {
     print:display,
     say:hello
    }
}

var object = new Draw()
console.log(object.print())
console.log(object.say())



