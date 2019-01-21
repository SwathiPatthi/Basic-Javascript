//ways of creating an arry
var array1 = new Array();
console.log(array1);
//result: [] - an array literal

var array2 = [];
console.log(array2);

//how to add data to array
array2[0]=1;
console.log(array2);
array2[1]=2;
console.log(array2);
array2[3]=3;
array2[4]=4;
console.log(array2);

//second way of adding value
var array3=[5,6,7,8,9];
console.log(array3);

//third way of adding the value
//push will add value at the end of the array
array3.push(10);
console.log(array3);

//unshift will add value at the beginning of the array
array3.unshift(0);
console.log(array3);

//pop will remove the last element from the array
array3.pop();
console.log(array3)

//shift will remove the first element from the array
array3.shift();
console.log(array3);

//Need to implement slice and splice



//read all the elements of the array
for(var i=0;i < array3.length;i++)
{
	console.log(array3[i]);
}

//read all the elements using foreach
array3.forEach(function(value,index){
     console.log(value,index);
})


//the differnce between foreach and map is that map returns object whereas foreach does not return value
var output1 = array3.forEach(function(value){
     return value
})
console.log(output1);

//read all the elements using map
var output2 = array3.map(function(value){
	return value * 2
})
console.log(output2)

//slice method retuns the selected items from the array. It can take 2 parameters. It does not alter the original object. Every time it gives new array object
var array4 = [1,2,3,4]
console.log(array4.slice(2)) //selects array elements from 3,4

var array5 = [1,2,3,4]
console.log(array5.slice(-1)) //selects array elements from last i.e., 4

console.log(array5) //result is 1,2,3,4 as there is no alteration is done for the original array

var array6= [1,2,3,4,5,6,7]
console.log(array6.slice(2,10))  //results 3,4,5,6,7

var array7=[1,2,3,4,5]
console.log(array7.slice(2,1)) //results [] empty literal

//if any argument is NaN, it is treated as 0
var array8=[1,2,3,4,5]
console.log(array8.slice(NaN,3)) //results 1,2,3

var array8=[1,2,3,4,5]
console.log(array8.slice(NaN,NaN)) //results [] empty literal

//splice method retuns the  removed items in an array. It can take 2 arguments. It alters the original array
var array9=[1,2,3,4,5,6,7]
console.log(array9.splice(2)) //results [3,4,5,6,7]
console.log(array9) // results 1,2 as the other elements are removed

console.log(array9.splice(3)) //results [] as array is already altered

//console.log(array9) // removes array items permananently and results 3,4,5









