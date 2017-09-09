function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

// function sum() {
//
//     var sum = 0;
//     Array.prototype.forEach.call(arguments, function (value) {
//         sum += value;
//     });
//
//     console.log(sum);
// }

// function sum(...values) {
//     let sum = 0;
//     values.forEach((value) => {
//         sum += value;
//     });
//     console.log(sum);
// }

function sum(...values) {
    console.log(values.reduce((prev, curr) => {
        return prev + curr;
    }));
}
sum(2, 3, 4, 5);
