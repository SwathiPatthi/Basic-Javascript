//A closure is a way to  access and manipulate external variables from within a function

function hello(message){
    return function(firstname,lastname){
        return message + ' ' + firstname + ' ' + lastname
    }
}
var wish = hello('hello')
console.log(wish)