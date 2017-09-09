let fname = 'Bill';
let lname = 'Gates';
let email = 'bill@microsoft.com'

let person = {
    firstName: fname,
    lastName: lname,
    email,
    sayHello() {
        console.log(`Hi my name id ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return (`${this.firstName} ${this.lastName}`);
    },
    set fullName(value) {
        this.firstName = value;
    }
}

console.log(person);
person.sayHello();

function createClass(property, value){
    return ({
        [property]: value
    })
}

console.log(createClass('vin', 1));
