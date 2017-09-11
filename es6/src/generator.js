function *generate(){
    console.log('Start');
    yield;
    console.log('Finish');
}

let iterator = generate();

iterator.next();
