// functions can be crated in below ways
//1. regular functions
console.log(sample());

function sample(){
console.log("sample")
return {}
}

console.log(fun)
//2. anonymous functions
var fun = function(){
	console.log("hello")
	return function b(){return "swathi"}
}

console.log(fun()());

//3. IIF (immediate invoking function) or self invoking functions
var add = (function(a,b){
	return a + b
}(1,2));

console.log(add);

//4. constructor functions
function Person(firstName,lastName){
 // this.fName = firstName;
 // this.lName = lastName;
}
var person1 = new Person("swathi","patthi")
console.log(person1);
