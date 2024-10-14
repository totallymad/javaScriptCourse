'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//008 Creating DOM Elements NOTE

const displayMovements = function (movements) {

  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
};

displayMovements(account1.movements);


//012 Computing Usernames NOTE

const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accs) {

  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(word => word[0].toLocaleUpperCase())
      .join('');
  })

}

createUsernames(accounts);
console.log(accounts);

//014 reduce NOTE

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`
};

calcDisplayBalance(account1.movements);

const calcDsiplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
  .filter(mov => mov > 0)
  .map(deposit => deposit * 1.2/100)
  .filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`
}

calcDsiplaySummary(account1.movements)


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//003 Simple Array Methods NOTE

/* let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE method DONT MUTATE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE method MUTATE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE MUTATE ORIGINAL
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//JOIN
console.log(letters.join(' - ')); */

//004 The new at Method NOTE

/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('ilya'.at(0));
console.log('ilya'.at(-1)); */

//006 forEach With Maps and Sets NOTE

/* //Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
})

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
}) */



//011 The map Method NOTE
/* 
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements, movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd)
}

console.log(movementsUSDfor);

const movementsUSDarr = movements.map(mov => mov * eurToUsd
);

console.log(movementsUSDarr);

const movementsDesctiptions = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDesctiptions); */

//013 The filter Method NOTE

/* const deposits = movements.filter(function(mov) {
  return mov > 0;
})

console.log(movements);
console.log(deposits);

const depositsFor = []
for( const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); */

//014 The reduce Method NOTE
/* 
console.log(movements);

//accumulator -> snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration number ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balanze2 = 0;
for (const mov of movements) {
  balanze2 += mov;
}
console.log(balanze2);


//MAX value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc 
  } else {
    return mov
  }
}, movements[0])

console.log(max); */


//016 The Magic of Chaining Methods NOTE

/* //PIPELINE 
const eurToUsd = 1.1;
console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov) => mov * eurToUsd)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   mov * eurToUsd
  // })
  .reduce((acc, mov) => acc + mov);

console.log(totalDepositsUSD); */

//018 The find Method NOTE

/* const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let accountFor;

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    accountFor = acc
    break;
  }
}

console.log(accountFor); */

