'use strict';


//002 Activating Strict Mode
/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 125125; */

//003 Functions

/* function logger() {
    console.log('My name is Ilya');
}

//вызов функции
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

// 004 Function Declarations vs. Expressions

/* function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1998);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1998);

console.log(age1, age2); */

//005 Arrow Functions
/* 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const calcAge3 =  birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetierment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retierment = 65 - age;
    // return retierment;
    return `${firstName} retires in ${retierment}`;
}

console.log(yearsUntilRetierment(1998, 'Ilya'));
console.log(yearsUntilRetierment(1980, 'BOb')); */


//006 Functions Calling Other Functions

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces and ${orangePieces} pieces`;
    return juice;
}

console.log(fruitProcessor(3,2)); */

//007 Reviewing Functions

/* const calcAge = function (birthYear) {
    return 2037 - birthYear;

}
const yearsUntilRetierment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retierment = 65 - age;

    if (retierment > 0) {
        console.log(`${firstName} retires in ${retierment} years`);
        return retierment;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }


    // return `${firstName} retires in ${retierment} years`;
}

console.log(yearsUntilRetierment(1998, 'Ilya'));
console.log(yearsUntilRetierment(1950, 'Mike')); */

// 010 Introduction to Arrays
/* 
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Ilya';
const ilya = [firstName, 'Kurak', 2024 - 1998, 'sysadmin', friends];
console.log(ilya);

//exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);


console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); */

//011 Basic Array Operations (Methods)

/* const friends = ['Michael', 'Steven', 'Peter'];

//add elem

const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elem
friends.pop(); //LAST
const popped = friends.pop(); //LAST
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Ilya'));

friends.push(23);
console.log(friends.includes('Ilya'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23')); //strict сравнение

if (friends.includes('Steven')) {
    console.log('У тебя есть друго по имени Стивен');
} else {
    console.log('У тебя нет такого друга')
}
 */

//014 Introduction to Objects

/* const ilyaArray = [
    'ilya',
    'kurak',
    2024 - 1998,
    'sysadmin',
    ['michael', 'peter', 'steven']
];

const ilya = {
    firstName: 'Ilya',
    lastName: 'Kurak',
    age: 2024 - 1998,
    job: 'sysadmin',
    friends: ['michael', 'peter', 'steven']
}

console.log(ilyaArray);
console.log(ilya); */

//015 Dot vs. Bracket Notation

/* const ilya = {
    firstName: 'Ilya',
    lastName: 'Kurak',
    age: 2024 - 1998,
    job: 'sysadmin',
    friends: ['michael', 'peter', 'steven']
};

console.log(ilya);

console.log(ilya.friends);
console.log(ilya['lastName']);

const nameKey = 'Name';
console.log(ilya['first' + nameKey]);
console.log(ilya['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Ilya? Choose between firstName, lastName, age, job, and friends');

if (ilya[interestedIn]) {
    console.log(ilya[interestedIn]);
} else {
    console.log('Такого значения нет')
}

ilya.location = 'Russia';
ilya['vk'] = '@ilya'
console.log(ilya);

//challenge

console.log(`${ilya.firstName} has ${ilya.friends.length} friends, and his best friend is called ${ilya.friends[0]}`);
 */


//016 Object Methods
/* const ilya = {
    firstName: 'Ilya',
    lastName: 'Kurak',
    birthYear: 1998,
    job: 'sysadmin',
    friends: ['michael', 'peter', 'steven'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2024 - birthYear
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2024 - this.birthYear
    // }

    calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(ilya.calcAge());


console.log(ilya.age);

//challenge 

console.log(ilya.getSummary()); */

//019 Iteration The for Loop

/* for (let rep = 5; rep <= 100; rep++) {
    console.log(`Lifting weights repetition ${rep} ⛹️‍♀️`)
}
 */
//020 Looping Arrays, Breaking and Continuing

/* const ilyaArray = [
    'ilya',
    'kurak',
    2024 - 1998,
    'sysadmin',
    ['michael', 'peter', 'steven'],
    'blabla'
];

const types = [];

for (let i = 0; i < ilyaArray.length; i++) {
    // reading from ilya array
    console.log(ilyaArray[i], typeof ilyaArray[i]);

    // filling types array
    // types[i] = typeof ilyaArray[i];
    types.push(typeof ilyaArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= 3; i++) {
    ages.push(2024 - years[i])
}

console.log(ages);

// continiu and break

console.log('--- ONLY STRINGS ---');

for (let i = 0; i < ilyaArray.length; i++) {
    if (typeof ilyaArray[i] !== 'string') continue;

    console.log(ilyaArray[i], typeof ilyaArray[i]);
}

console.log('--- BREAK with NUMBER  ---');

for (let i = 0; i < ilyaArray.length; i++) {
    if (typeof ilyaArray[i] === 'number') break;

    console.log(ilyaArray[i], typeof ilyaArray[i]);
} */

//021 Looping Backwards and Loops in Loops

/* const ilya = [
    'ilya',
    'kurak',
    2024 - 1998,
    'sysadmin',
    ['michael', 'peter', 'steven'],
    'blabla'
];

for (let i = ilya.length - 1; i >= 0; i--) {
    console.log(ilya[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ⛹️‍♂️`)
    };
} */

//022 The while Loop

let rep = 1;

// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} ⛹️‍♀️`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`); 
    dice = Math.trunc(Math.random() * 6) + 1;   
    if (dice === 6) console.log('Loop is about to end...');
}

