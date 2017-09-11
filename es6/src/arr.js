function add5(x, y) {
    return (x + y);
}

let add = (x, y) => x + y;

let person = {
    name: 'Bob',
    greet: function(){
        console.log('Hello ' + this.name);
        console.log(this);
    }
}
//person.greet();

let person2 = {
    name: 'Bob',
    greet: () => {
        //console.log('Hello ' + this.name);
        console.log(this);
    }
}
person2.greet();
