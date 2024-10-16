'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-10-10T17:01:17.194Z',
    '2024-10-14T10:36:17.929Z',
    '2024-10-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date)
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

//008 Creating DOM Elements NOTE

const displayMovements = function (acc, sort = false) {

  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatedMov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
};



//012 Computing Usernames NOTE

const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accs) {

  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  })

}

createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDsiplaySummary(acc);
}

//014 reduce NOTE

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};


const calcDsiplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
}

// Event handler
let currentAccount;

//FAKE ALWAUYS LOG IN

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;




btnLogin.addEventListener('click', (e) => {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  // console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and messsage
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    //Current date 

    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
    //Experimenting API
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long'
    };
    const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

    //Clear input fileds
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //UPDATE UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && recieverAcc && currentAccount.balance >= amount && recieverAcc?.username !== currentAccount.username) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    //UPDATE UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);

  }

  inputLoanAmount.value = '';
});

//021 The findIndex Method NOTE

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    //delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;

  }

  inputCloseUsername.value = inputClosePin.value = '';

});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//003 Converting and Checking Numbers NOTE

/* console.log(23 === 23.0);

// Base 10 - 0 to 9
// Binary base 2 - 0, 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseFloat('30px', 10));
console.log(Number.parseFloat('e23', 10));

console.log(Number.parseFloat('2.5rem', 10));
console.log(Number.parseInt('2.5rem', 10));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Chicking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.9)); */

//004 Math and Rounding NOTE

/* console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 20, 2));
console.log(Math.max(5, 18, '20', 2));
console.log(Math.max(5, 18, '20px', 2));

console.log(Math.min(5, 18, '20', 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1 + min);
//0...1 -> 0...(max - min) -> min...(max - min + min) -> min...max

// console.log(randomInt(-10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round('23.9'));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor('23.9'));
console.log(Math.floor(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.734).toFixed(2)); */

//005 The Remainder Operator NOTE
/* console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(8));
console.log(isEven(513));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  })
}) */

//006 Numeric Separators NOTE

// 287,460,000,000
/* const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15
console.log(PI);

console.log(Number('23_0000'));
console.log(Number.parseInt('23_0000')); */

//007 Working with BigInt NOTE

/* console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 6);
console.log(2 ** 53 + 100);
console.log(2 ** 53 + 120);

console.log(52904895082339058326209n);
console.log(BigInt(52904895012425));

//Operations 
console.log(10000n + 10000n);
console.log(123815092185903268n * 18690383905n);
// console.log(Math.sqrt(16n));

const huge = 49205832490586940n;
const num = 23;
// console.log(huge * num);
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == '20');
console.log(typeof 20n);

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(10n / 3n);
console.log(10 / 3); */

// 08 Creating Dates NOTE 

// Create a date

/* const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));


// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future); */

//010 Operations With Dates NOTE
/* const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 4)
);
console.log(days1);
 */

//012 Internationalizing Numbers (Intl) NOTE
/* const num = 3149284.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'RUB',
  // useGrouping: false
}

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('en-DE', options).format(num));
console.log('Russia:', new Intl.NumberFormat('ru-RU', options).format(num));
console.log('Browser:', new Intl.NumberFormat(navigator.language, options).format(num)); */

//013 Timers setTimeout and setInterval NOTE
/* 
//setTimeout
const ingrindients = ['olives', 'shpinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingrindients
);
console.log('Waiting...');

if (ingrindients.includes('shpinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  // console.log(`Сейчас ${hour}:${minute}:${seconds}`);
}, 1000);
 */