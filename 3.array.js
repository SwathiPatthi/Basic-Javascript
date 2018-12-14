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

