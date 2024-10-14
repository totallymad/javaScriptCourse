'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrect = [...dogsJulia].slice(1, -2);

    const printAge = function (dogAge, i) {
        if (dogAge >= 3) console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
        else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }

    dogsJuliaCorrect.forEach(printAge);
    dogsKate.forEach(printAge);
};

const julia = [9, 16, 6, 8, 3];
const kate = [10, 5, 6, 1, 4];

checkDogs(julia, kate);



// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]