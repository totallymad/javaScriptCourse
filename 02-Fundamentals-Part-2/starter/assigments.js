'use strict'

// Лекции функции

// function describeCountry(country, population, capitalCity) {
//     console.log(`В ${country} проживает ${population} человек, а её столица - ${capitalCity}`);
// }

// const finland = describeCountry('Финлядии', 6000000, 'Хельсинки');
// const russia = describeCountry('Россия', 146150789, 'Москва');
// const usa = describeCountry('США', 341800000, 'Washington');

// console.log(finland, russia, usa);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentageOfWorld3 = population => {
    return (population / 7900) * 100;
}

/* const china = percentageOfWorld1(1441000000);
const russia = percentageOfWorld1(146150789);
const usa = percentageOfWorld1(341800000);
const finland = percentageOfWorld2(6000000);
const greatBritan = percentageOfWorld2(4000000);
const india = percentageOfWorld2(93230000);
const canada = percentageOfWorld3(12391823091);

console.log(china, russia, usa, finland, greatBritan, india, canada); */
const russiaPop = percentageOfWorld1(146);

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${russiaPop}  of the world`;
}

const russia = describePopulation('Russia', 146);
console.log(russia);

const populations = [146, 34, 52, 1444];

console.log(populations.length === 4);

const percents = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percents);

const neighbours = new Array('Belarus', 'Latvia', 'Kazahstan', 'Finland');

neighbours.push('Utopia');

neighbours.pop();

if (neighbours.includes('Germany')) {
    console.log('Скорее всего это страна в центре Европы')
} else {
    console.log('Скорее всего страна не из центральной Европы')
}

const belarus = neighbours.indexOf('Belarus');

console.log(belarus);

neighbours[belarus] = 'Republic Belarus';

console.log(neighbours);

const myCountry = {
    country: 'Russia',
    capital: 'Moscow',
    language: 'Russian',
    population: 146,
    neighbours: ['Belarus', 'Latvia', 'Kazahstan', 'Finland'],

    describe: function () {
        console.log(`${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false
    }
}

// console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland()

console.log(myCountry);

for (voter = 1; voter <= 50; voter++) {
    console.log(`В данный момент голосует изюиратель номер ${voter}`)
}

const populations2 = [1444, 34, 52, 1444];

const percents2 = [];

for (let i = 0; i < 4; i++) {
    percents2.push(percentageOfWorld1(populations2[i]));
}

console.log(percents2);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

for (let i = 0; i < listOfNeighbours.length; i++) {
    // console.log(listOfNeighbours[i]);

    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Сосед: ${listOfNeighbours[i][j]}`)
    }
}