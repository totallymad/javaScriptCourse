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
console.log(ages);