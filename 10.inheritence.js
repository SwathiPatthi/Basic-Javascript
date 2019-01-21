function Person(){
    this.firstName = 'swathi',
    this.lastName = 'uma' 
}

Person.prototype.fullName = function(){
    return this.firstName + '  ' + this.lastName
}

function Student(){
    this.studentAge ='23'
}

function Address(){
  this.address = 'Nandini layout'
}


Student.prototype = new Person()
Student.prototype.getAge = function(){
    return this.studentAge
}

var student = new Student()
console.log(student.firstName)
console.log(student.lastName)
console.log(student.studentAge)
console.log(student.fullName())
console.log(student.getAge())

Address.prototype = new Student()
var address = new Address();
console.log(address.firstName)
console.log(address.fullName())

