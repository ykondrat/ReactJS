'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('Hello ' + name).toUpperCase());
}

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        from: ' + from + '\n        subject: ' + subject + '\n        message: ' + message + '\n        ');
}
greet('Bill');

createEmail('john@mail.com', 'jane@mail.com', 'hello', 'how are you doing');

var name = 'Bill';
console.log(upperName(_templateObject, name));
function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}