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

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);