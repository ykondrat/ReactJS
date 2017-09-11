'use strict';

function add5(x, y) {
    return x + y;
}

var add = function add(x, y) {
    return x + y;
};

var person = {
    name: 'Bob',
    greet: function greet() {
        console.log('Hello ' + this.name);
        console.log(this);
    }
    //person.greet();

};var person2 = {
    name: 'Bob',
    greet: function greet() {
        //console.log('Hello ' + this.name);
        console.log(undefined);
    }
};
person2.greet();