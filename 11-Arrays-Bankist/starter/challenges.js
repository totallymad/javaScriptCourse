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
const kate = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(julia, kate) */

//CHALLENGE #3
/* 
const calcAverageHumanAgeArrow = ages =>
    ages
        .map(age => {
            if (age <= 2) return 2 * age
            else return 16 + age * 4
        })
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const julia = [5, 2, 4, 1, 15, 8, 3];
const kate = [16, 6, 10, 5, 6, 1, 4];

const avg1 = calcAverageHumanAgeArrow(julia);
const avg2 = calcAverageHumanAgeArrow(kate);

console.log(avg1, avg2); */

//CHALLENGE #4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// #1 Вычисление рекомендуемой порции для каждой собаки
dogs.forEach(dog => {
    dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// #2 Проверка состояния еды у собаки Сары
dogs.filter(dog => {
    if (dog.owners.includes('Sarah')) {
        if (dog.curFood > dog.recommendedFood * 1.1) {
            console.log('Sarah\'s dog eats too much');
        } else if (dog.curFood < dog.recommendedFood * 0.9) {
            console.log('Sarah\'s dog eats too little');
        } else {
            console.log('Sarah\'s dog eats normal');
        }
    }
});

// #3 Поиск владельцев, чьи собаки едят слишком много или слишком мало
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
    .map(dog => dog.owners)
    .flat(); // Собираем всех владельцев в один массив

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
    .map(dog => dog.owners)
    .flat();

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// #4 Вывод строк в консоль
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// #5 Хавает столько сколько нужно точно

const dogsEatExactly = dogs.some(dog => dog.curFood === dog.recommendedFood)

console.log(dogsEatExactly);

// #6 Хавает в пределах нормы

const dogsEatOk = dogs.some(dog => dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * .9)

console.log(dogsEatOk);

// #7 Хавает в пределах нормы(вывод в консоль)
const arrDogsEatOk = dogs.filter(dog => dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * .9)

console.log(arrDogsEatOk);

// #8 Сортировка

const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);