'use strict';

const game = {
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
};

//CHALLENGE #2

//1
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

console.log(scorers);


//challenge#1

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

