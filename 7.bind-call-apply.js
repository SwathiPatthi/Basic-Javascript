var person1 = {
    firstName:'Swathi',
    lastName:'Uma'
}

var person2={
    firstName:'Jagrav',
    lastName:'Uma'
}

function Sample(city,country){
    return this.firstName + ' ' + this.lastName + + ' ' + city + ' ' + country
   }

//Call, bind, apply these are pre-defined methods which will define this for the methods 

var output = Sample.bind(person2);
console.log(output('Bangalore','India'))

var output1 = Sample.call(person1,'Bangalore','India');
console.log(output1)

var output2 = Sample.apply(person1,['Bangalore','India'])
console.log(output2)


