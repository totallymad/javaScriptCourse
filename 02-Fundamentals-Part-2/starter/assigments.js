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
