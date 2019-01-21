var person = {name:'swathi',age:16}
//preventExtensions: updation and deletion of properties is possible and additional is not possible
Object.preventExtensions(person);

//seal: only updation is possible. Addition/deletion is not possible
Object.seal(person);

//freeze: does not allow to updation/addition/deletion
Object.freeze(person);
person.city = 'Bangalore'
delete person.age;
person.name='Swathi Mahesh'
console.log(person)