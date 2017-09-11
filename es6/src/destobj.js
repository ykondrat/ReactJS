let person = {
    fname: 'John',
    lname: 'Doe'
}

//let {fname: firstName, lname: lastName, age = 25} = person;

//console.log(firstName, lastName, age);

let user = {
    fname: 'John',
    lname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
}

let {fname: firstName, lname: lastName, social: { facebook }, age = 25} = user;

console.log(firstName, lastName, facebook, age);

function post(url, {data: {fname, lname}, cache}) {
    console.log(url, fname, lname, cache);
}

let result = post('/api/user', {data: user, cache: false});

function getUserInfo(){
    return {
        fname: 'John',
        lname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    }
}

let { fname, lname, social: { twitter } } = getUserInfo();

console.log(fname, lname, twitter);
