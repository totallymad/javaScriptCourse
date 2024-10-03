
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);


let firstName = 'Matilta';
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Переменные
let jonas_matilta = 'JM';
let $function = 27;

let person = 'Jonas';

let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myCurrentJob);
*/


// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof (javascriptIsFun));
// console.log(typeof 23);
// console.log(typeof 'ya');

// javascriptIsFun = 'yes';
// console.log(typeof (javascriptIsFun));

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;

// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

/* let age = 30;
age = 30;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Kurak';
console.log(lastName) */


/* const now = 2037;
const ageIlya = now - 1998;
const ageSarah = now - 2018;

console.log(ageIlya * 2, ageIlya / 10, 2**3);
//2 ** 3 означает 2 в 3 степени

const firstName = 'Ilya';
const secondName = 'Kurak';
console.log(firstName + ' ' + secondName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x + x * 4 = 100
x++; // x + 1 = 101
x--; // x - 1 = 100
console.log(x); */

/* const now = 2037;
const ageIlya = now - 1998;
const ageSarah = now - 2018;

console.log(ageIlya * 2, ageIlya / 10, 2 ** 3); */

/* const firstName = 'Ilya';
const job = 'system admin';
const birthYear = 1998;
const year = 2037;

const ilya = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(ilya);

const ilyaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(ilyaNew);

console.log(`Just a regular string....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); */

/* const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`)
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); */

/* //type converssion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(+inputYear + 18);

console.log(Number('Ilua'));
console.log(typeof(NaN));

console.log(String(23), 23);

//type coercion
console.log('I am' + 23 + 'years old');
console.log('23' - 10 - '3');
console.log('23' + 10 + '3'); */

// const age = 18;

// if (age === 18) console.log('You just became aduld');

/* const day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup')
        break;
    case 'thuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enfoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

 */

const age = 15;
age >= 18 ? console.log('I like to drink wine 🍷') :
console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(`I like to drink ${drink}`);