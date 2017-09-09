'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fname = 'Bill';
var lname = 'Gates';
var email = 'bill@microsoft.com';

var person = {
    firstName: fname,
    lastName: lname,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi my name id ' + this.firstName + ' ' + this.lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

console.log(person);
person.sayHello();

function createClass(property, value) {
    return _defineProperty({}, property, value);
}

console.log(createClass('vin', 1));