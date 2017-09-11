function applyForVisa(documents) {
    console.log('pending data');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > 0 ? resolve({}) : reject('Decline visa');
            let visa = {};
        }, 2000);
    });
    return (promise);
}

function bookHotel(visa){
    console.log(visa);
    console.log('book hotel');
}

function buyTicket() {
    console.log('Buy tickets');
}

applyForVisa({})
    .then(visa => {
        console.log('Get visa');
        return (visa);
    })
    .then(bookHotel)
    .then(buyTicket)
    .catch(error => console.error(error))
