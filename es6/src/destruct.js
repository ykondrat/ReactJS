let languages = ['JacaScript', 'PHP', 'Python', 'Ruby'];

let [js, php, py, rb] = languages;

console.log(js, php, py, rb);

let scores = [3, 4, 5];

let [low, ...rest] = scores;

console.log(low, rest);
