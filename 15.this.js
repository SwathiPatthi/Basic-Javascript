var obj = {
    name:'Swathi',
    city:'Bangalore',
    display:function(){
        console.log(this)
        var self =  this
        return function(){
            console.log(self)
        }
    }
}
console.log(obj.display()())