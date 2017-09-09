function greet(name) {
    console.log(`Hello ${name}`.toUpperCase());
}

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        from: ${from}
        subject: ${subject}
        message: ${message}
        `);
}
greet('Bill');

createEmail('john@mail.com', 'jane@mail.com', 'hello', 'how are you doing');

let name = 'Bill';
console.log(upperName`Hello ${name}`);
function upperName(literals, value) {
    return (literals[0] + value.toUpperCase());
}
