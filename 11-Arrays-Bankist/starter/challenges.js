'use strict';

// CHALLENGE #1
/* const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrect = dogsJulia.slice(1, -2);

    // Объединяем два массива и используем forEach для вывода информации
    const dogsAges = dogsJuliaCorrect.concat(dogsKate);

    dogsAges.forEach((dogAge, i) => {
        if (dogAge >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
};

const julia = [9, 16, 6, 8, 3];
const kate = [10, 5, 6, 1, 4];

// Вызов функции
checkDogs(julia, kate); */

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

//CHALLENGE #2

/* const calcAverageHumanAge = function (dogsJulia, dogsKate) {
    const dogsAges = dogsJulia.concat(dogsKate);

    const humanAges = dogsAges.map(function (age) {
        if (age <= 2) return 2 * age
        else return 16 + age * 4
    });

    const adultAges = humanAges.filter(age => age >= 18);

    const averageAdultAges = adultAges.reduce((acc, age) => {
        return acc + age
    }, 0) / adultAges.length;

    return averageAdultAges;
};

const julia = [5, 2, 4, 1, 15, 8, 3];
const kate =  [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(julia, kate) */