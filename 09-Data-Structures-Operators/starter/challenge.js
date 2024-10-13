'use strict';

/* const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals: function () {

    }
}; */

//CHALLENGE #2 NOTE

/* //1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

//2
// console.log(Object.entries(game.odds));
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
    average += odd;
}

average /= odds.length;
console.log(average);

//3
const entireOdds = Object.entries(game.odds);

for (const [key, value] of entireOdds) {
    const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
    console.log(`Odd of ${teamStr}: ${value}`);
}

//4

const scorers = {};

for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
}

console.log(scorers); */


//challenge#1 NOTE

/* //1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

//5
// const {team1, x: draw, team2} = game.odds;
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6 
const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Miller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Miller');
printGoals(...game.scored);

//7 
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win'); */

/* const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

//CHALLENGE #3 NOTE
//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
// console.log(time[time.length - 1]);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


//4

for (const [key, value] of gameEvents) {
    let str = key <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`${str} ${key}: ${value}`);
} */
// CHALLENGE #4 NOTE

/* 
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
delayed_departure
 */

// Добавляем textarea и кнопку на страницу
/* const textarea = document.createElement('textarea');
const button = document.createElement('button');
button.textContent = 'Обработать текст';

document.body.append(textarea);
document.body.append(button);

// Добавляем обработчик событий на кнопку
button.addEventListener('click', () => {
    // Получаем текст, преобразуем к нижнему регистру и убираем пробелы
    const text = textarea.value;
    const arr = text.toLowerCase().replace(' ', '').split('\n');

    console.log(arr);

    // Обрабатываем каждую строку
    arr.forEach((item, index) => {
        let [a, b] = item.split('_');
        
        // Делаем первую букву второй части заглавной
        let bUp = b.charAt(0).toUpperCase() + b.slice(1);
        
        // Объединяем строки и выравниваем по ширине 20 символов
        const formattedString = `${a}${bUp}`.padEnd(20);
        
        // Выводим результат с соответствующим количеством галочек
        console.log(`${formattedString} ${'✅'.repeat(index + 1)}`);
    });
}); */

//Bonus exercise

// Data needed for a later exercise
/* const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {

    const [type, from, to, time] = flight.split(';');
    const typeCorrect = type.replaceAll('_', ' ').trim();
    const fromCorrect = from.slice(0, 3).toLocaleUpperCase();
    const toCorrect = to.slice(0, 3).toLocaleUpperCase();
    const timeCorrect = time.replace(':', 'h')

    if (typeCorrect.includes('Delayed')) {
        console.log(`🔴 ${typeCorrect} from ${fromCorrect} to ${toCorrect} (${timeCorrect})`.padStart(45));
    } else {
        console.log(`${typeCorrect} from ${fromCorrect} to ${toCorrect} (${timeCorrect})`.padStart(45));
    }
} */