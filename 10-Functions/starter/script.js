'use strict';

//003 Default Parameters NOTE

/* const bookings = [];

 const createBooking = function(
    flightNum, 
    numPasswngers = 1, 
    price = 199 * numPasswngers
) {

    //ES5
    // numPasswngers = numPasswngers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPasswngers,
        price
    }

    console.log(booking);
    bookings.push(booking);
 }

 createBooking('LH123');
 createBooking('LH123', 2, 800);
 createBooking('LH123', 5);

 //trick
 createBooking('LH123', undefined, 1000) */

// 004 How Passing Arguments Works Value vs. Reference NOTE

/* const flight = 'LH234';
const ilya = {
    name: 'Ilya Kurak',
    passport: 1231409890
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 1231409890) {
        alert('Check in')
    } else {
        alert('Wrong passport')
    }
}

// checkIn(flight, ilya);
console.log(flight);
console.log(ilya);

// Is the as doing......
const flightNum = flight;
const passenger = ilya;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000); 
}

newPassport(ilya);
checkIn(flight, ilya); */

//006 Functions Accepting Callback Functions NOTE

/* const oneWord = function(str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callback all the time
const high5 = function() {
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Ilya', 'Nastya', 'Sanya'].forEach(high5); */

//007 Functions Returning Functions NOTE

/* const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Ilya');
greeterHey('Steven');

greet('Hello')('Nastya');

const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet1('Hello')('Nastya'); */

//008 The call and apply Methods NOTE

/* const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
};

lufthansa.book(239, 'Ilya Kurak');
lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//DOES NOT work
// book(23, 'Sarah');

//CALL method
book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 573, 'Mary Cooper');
// console.log(swiss);

// APPLY method OLD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
// console.log(swiss);

//NEW trick
book.call(swiss, ...flightData); */

//009 The bind Method NOTE

//bind method
//book.call(eurowings, 23, 'Sarah Williams');

/* const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ilya Kurak');
bookEW23('Martha Cooper');
console.log(eurowings);

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(.1, 200)); 

const addVAT = addTax.bind(null, .23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
} 

const addVAT2 = addTaxRate(.23);
console.log(addVAT2(100));
console.log(addVAT2(23)); */

// 011 Immediately Invoked Function Expressions (IIFE) NOTE

/* const runOnce = function () {
    console.log('This will neve run again');
}

runOnce();


// Imidietly invoke function expression (IIFE)
(function () {
    console.log('This will neve run again');
    const isPrivate = 23;
})();

(() => console.log('This will neve run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
 */

//012 Closures NOTE 
/* 
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker =  secureBooking();

booker();
booker();
booker();

console.dir(booker); */

//013 More Closure Examples NOTE
/* 
// EXAMPLE 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 888;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are no boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
 */

