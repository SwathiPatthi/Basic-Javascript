function Student(firstname,lastname){
    this.firstName=firstname,
    this.lastName=lastname   
}

Student.prototype.fullName= function(){
    console.log('full name with prototype')
    return this.firstName + ' ' + this.lastName;
}

Student.fullName= function(){
    console.log('full name without prototype')
    return this.firstName + ' ' + this.lastName;
}

var student1 = new Student('Swathi','uma');
Student.fullName();
console.log(student1.fullName())
