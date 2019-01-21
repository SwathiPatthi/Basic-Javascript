// //objects can be created in 4 ways
// //1. using new Object()
// var obj1=new Object()
// console.log(obj1)

// //2. using object.create method, pass null if there is no prototype defined.
// var obj2=Object.create(null); //try passing obj1 instead of null.
// console.log(obj2)

// //3. using object literal {}
// var obj3 ={}
// console.log(obj3);

// //4. using constructor functions. Using new keyword from the functions.
// function Person(firstName,lastName){
// 	this.fName = firstName;
// 	this.lName = lastName;
// }
// var person1 = new Person("swathi","patthi");
// console.log(person1);

// //ways of creating properties and methods
// var obj=new Object();
// obj.firstName = 'swathi'
// obj.lastName='Uma'
// obj.fullName = function(){
//     return this.firstName + ' ' + this.lastName
// }
// console.log(obj.fullName())

// var object2 = {
//     firstName:'swathi',
//     lastName:'uma',
//     fullName:function(){
//         return this.firstName + ' ' + this.lastName
//     }
// }
// console.log(object2.fullName())

//assign methods used to copy from one object values to another object
var book1 = {
	author:'Uma',
	publish:'Swathi',
	city:'Bangalore',
	country:'Inida'
}

var book2 = {

}

Object.assign(book2,book1)
console.log(book2) 
//result:

var bookkeys = Object.keys(book1)
console.log(bookkeys)
//result: ["author", "publish", "city", "country"] with keys

var bookvalues = Object.values(book1)
console.log(bookvalues)
//result: 

var bookentries = Object.entries(book1)
console.log(bookentries)
//result: returns an array with arrays of key and value pair
