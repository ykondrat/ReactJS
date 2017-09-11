'use strict';

var person = {
    fname: 'John',
    lname: 'Doe'

    //let {fname: firstName, lname: lastName, age = 25} = person;

    //console.log(firstName, lastName, age);

};var user = {
    fname: 'John',
    lname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

var firstName = user.fname,
    lastName = user.lname,
    facebook = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(firstName, lastName, facebook, age);

function post(url, _ref) {
    var _ref$data = _ref.data,
        fname = _ref$data.fname,
        lname = _ref$data.lname,
        cache = _ref.cache;

    console.log(url, fname, lname, cache);
}

var result = post('/api/user', { data: user, cache: false });

function getUserInfo() {
    return {
        fname: 'John',
        lname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

var _getUserInfo = getUserInfo(),
    fname = _getUserInfo.fname,
    lname = _getUserInfo.lname,
    twitter = _getUserInfo.social.twitter;

console.log(fname, lname, twitter);