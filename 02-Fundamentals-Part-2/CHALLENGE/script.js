// Challenge#1 and challenge #2
/* 
let weightMark, weightJohn, heightMark, heightJohn, markHigherBMI;

weightMark = 78;
heightMark = 1.69;
weightJohn = 92;
heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2,
    johnBMI = weightJohn / heightJohn ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI); */

/* weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

let markBMI = weightMark / heightMark ** 2,
    johnBMI = weightJohn / heightJohn ** 2;

markHigherBMI = markBMI > johnBMI; */

// console.log(markBMI, johnBMI, markHigherBMI);

/* if (markHigherBMI) {
    console.log(`ИМТ Марка(${markBMI}) выше, чем у Джона(${johnBMI})!`)
} else {
    console.log(`ИМТ Джона(${johnBMI}) выше, чем у Марка(${markBMI})!`)
} */

//Challenge#3

/* const averageScoreDelf = (97 + 112 + 101) / 3,
    averageScoreCoal = (109 + 95 + 106) / 3;

console.log(`Дельфины: ${averageScoreDelf}
Коалы: ${averageScoreCoal}`);

if ((averageScoreDelf > averageScoreCoal) && (averageScoreDelf > 100)) {
    console.log('Победили Дельфины')
} else if ((averageScoreCoal > averageScoreDelf) && (averageScoreCoal > 100)) {
    console.log('Победили Коалы')
} else if ((averageScoreCoal > 100) && (averageScoreDelf > 100) && (averageScoreCoal === averageScoreDelf)) {
    console.log('Победила дружба')
} else {
    console.log('Условия не выполнены')
} */


//CHALLENGE #1

/* let check = 430;

let tip = check >= 50 && check <= 300 ? check * .15 : check * .2;  

console.log(`Чек составил: ${check}, чаевые - ${tip}, итоговая стоимость ${check + tip}`); */

//CHALLENGE #5

const calcAverage = (a, b, c) => (a + b + c) / 3;


const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolhins, avgKoalas);

const checkWinner = (dolhpins, koalas) => {
    if (dolhpins >= 2 * koalas) {
        return `Дельфины победили (${dolhpins} против ${koalas})`
    } else if (koalas >= 2 * dolhpins) {
        return `Коалы победили (${koalas} против ${dolhpins})`
    } else {
        return 'Победили все 😊'
    }
}

console.log(checkWinner(avgDolhins, avgKoalas));

//CHALLENGE #2

const calcTip = (check) => {
    return check >= 50 && check <= 300 ? check * .15 : check * .2;  
}

console.log(calcTip(310));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

//CHALLENGE #3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`)
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`)
} else {
    console.log('Они равны')
}