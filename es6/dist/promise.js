'use strict';

function applyForVisa(documents) {
    console.log('pending data');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0 ? resolve({}) : reject('Decline visa');
            var visa = {};
        }, 2000);
    });
    return promise;
}

function bookHotel(visa) {
    console.log(visa);
    console.log('book hotel');
}

function buyTicket() {
    console.log('Buy tickets');
}

applyForVisa({}).then(function (visa) {
    console.log('Get visa');
    return visa;
}).then(bookHotel).then(buyTicket).catch(function (error) {
    return console.error(error);
});