// Challenge#1 and challenge #2

let weightMark, weightJohn, heightMark, heightJohn, markHigherBMI;

weightMark = 78;
heightMark = 1.69;
weightJohn = 92;
heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2,
    johnBMI = weightJohn / heightJohn ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

/* weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

let markBMI = weightMark / heightMark ** 2,
    johnBMI = weightJohn / heightJohn ** 2;

markHigherBMI = markBMI > johnBMI; */

// console.log(markBMI, johnBMI, markHigherBMI);

if (markHigherBMI) {
    console.log(`ИМТ Марка(${markBMI}) выше, чем у Джона(${johnBMI})!`)
} else {
    console.log(`ИМТ Джона(${johnBMI}) выше, чем у Марка(${markBMI})!`)
}

//Challenge#3

const averageScoreDelf = (97 + 112 + 101) / 3,
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
}


//CHALLENGE #4

let check = 430;

let tip = check >= 50 && check <= 300 ? check * .15 : check * .2;  

console.log(`Чек составил: ${check}, чаевые - ${tip}, итоговая стоимость ${check + tip}`);