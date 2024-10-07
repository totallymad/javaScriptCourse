'use strict';


//007 Scoping in Practice
/* 
function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = 'some';
            //создание новой переменной с тем же именем, что и переменная внешней области видимости
            const firstName = 'Steven';
            
            //переназначение переменной внешней области видимости
            output = 'NEW OUTPUT';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }

        // console.log(str);
        // console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);

    }
    printAge();

    return age;
}

const firstName = 'Ilya';
calcAge(1991);
// console.log(age);
// printAge(); */


//009 Hoisting and TDZ in Practice


//variables
/* console.log(me);
console.log(job);
console.log(year);

var me = 'Ilya';
let job = 'sysadmin';
const year = 1998; */


//functions
/* console.log(addDecl(2,3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));


function addDecl(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;
 */
//Example

/* if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

//011 The this Keyword in Practice

/* console.log(this);

const calcAge = function(birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
}
calcAge(1998);

const calcAgeArrow = (birthYear) => {
    console.log(2024 - birthYear);
    console.log(this);
}
calcAgeArrow(1990);

const ilya = {
    year: 1998,
    calcAge: function() {
        console.log(this);
        console.log(2024 - this.year);
    }
}

ilya.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = ilya.calcAge;

matilda.calcAge();

const f = ilya.calcAge;

f(); */

// var firstName = 'Matilda';


//012 Regular Functions vs. Arrow Functions
/* const ilya = {
    firstName: 'Ilya',
    year: 1998,
    calcAge: function () {
        // console.log(this);
        console.log(2024 - this.year);

        //Solution 1
        // const self = this; // self or that
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        //Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
}

ilya.greet();
ilya.calcAge();

//Ключевое слово arguments
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 3, 9, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};

addArrow(2,5,2,3); */

//013 Primitives vs. Objects (Primitive vs. Reference Types)
/* 
let age = 26;
let oldAge = age;
age = 27;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Ilya',
    age: 26
};

const friend = me;
friend.age = 27;

console.log('Me', me);
console.log('Freind', friend); */

//014 Primitives vs. Objects in Practice
//Примитивные типы
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Ссылочные типы
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before' , jessica);
console.log('After', marriedJessica);


//копирование объекта
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before' , jessica2);
console.log('After', jessicaCopy);