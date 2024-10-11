'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section


//012 Enhanced Object Literals NOTE
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },


};

// 018 Maps Iteration NOTE

/* const question = new Map([
  ['question', 'What is the best programming langeuga in the wrold?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct answer 😎'],
  [false, 'Try again!']
]);

console.log(question);


//convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// const answer = +prompt('Your answer');
console.log(answer);

console.log(question.get(answer === question.get('correct')));

//conver map to array 
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]); */


//017 Maps Fundamentals NOTE
/* 
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open 😊')
  .set(false, 'We are closed 😢');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

console.log(rest.get(arr)); */
//021 Working With Strings - Part 1 NOTE

const airline = 'TAP Air Portugal';
const plane = 'A320';

/* console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😊😊😊');
  else console.log('You got lucky 😁😁😁');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('ilya'));
console.log(typeof new String('ilya'));

console.log(typeof new String('ilya').slice(1)); */

//022 Working With Strings - Part 2 NOTE

/* console.log(airline.toLowerCase());
console.log(airline.toLocaleUpperCase());

//FIX capitalizaton in name
const passenger = 'iLyA';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const correctName = function (passenger) {
  const passengerLower = passenger.toLocaleLowerCase();
  const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
}

correctName('nAstyA');

//Copmparing emails

const email = 'example@mail.ru';
const loginEmail = ' Example@Mail.RU \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// replacing 
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//blooleans
const planeNew = 'Airbus A320neo';
console.log(planeNew.includes('A320'));
console.log(planeNew.includes('Boeing'));
console.log(planeNew.startsWith('Air'));

if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exerscise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!👌');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); */

// 023 Working With Strings - Part 3 NOTE

//split and join
/* console.log('a+very+nice+string'.split('+'));
console.log('Ilya Kurak'.split(' '));

const [firstName, lastName] = 'Ilya Kurak'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(firstName);
console.log(lastName);
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('ilya kurak');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Ilya'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(3819012));
console.log(maskCreditCard('3210931023118230912'));

//Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n) }`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12); */

// const myName = 'ilya';
// const myNameUpper = myName.replace(myName[0], myName[0].toUpperCase());
// console.log(myNameUpper);

//016 Sets NOTE

/* const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);
console.log(ordersSet);

console.log(new Set('Ilya'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staff);
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('ilyakurak').size); */


//014 Looping Objects Object Keys, Values, and Entries NOTE

/* //property NAMES
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(hours)) {
  openStr += `${day}, `
}

console.log( openStr);

//Property VALUES
const values = Object.values(hours);
console.log(values);

//Entire object
const entries = Object.entries(hours);
// console.log(entries);

// [key, value]
for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} */

//013 Optional Chaining (.) NOTE

/* if (restaurant.hours && restaurant.hours.mon) console.log(restaurant.hours.mon.open);

//ERROR
// console.log(restaurant.hours.mon.open);

//WITH optional chaining
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
  {name: 'ilya', email: 'example@ya.ru'}
];
console.log(users[1]?.name ?? 'User array empty'); */

//011 Looping Arrays The for-of Loop NOTE

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, elem] of menu.entries()) {
  console.log(`${i + 1}: ${elem}`);
} */

// console.log([...menu.entries()]);

//003 Destructuring Arrays NOTE
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//смена переменных
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 retrun values from a function
const [starter, mainCorse] = restaurant.order(2, 0);
console.log(starter, mainCorse);

//вложенная деструктуризация
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//дефолтные значения
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); */

//004 Destructuring Objects NOTE
/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//другие имена
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//дефолтное значение
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//изменение переменных
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, g: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
})
 */
// ({ a, b } = obj);
// console.log(a, b);

//005 The Spread Operator (...) NOTE

/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, ...arr];
console.log(badNewArr);
console.log(newArr);

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu];
console.log(newMenu);

//копирование массива
const mainMenuCopy = [...restaurant.mainMenu];

//объединение массивов
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, string, maps, sets. NOT OBJECTS
const str = 'Ilya';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);

//пример из реального мира
const ingridients = [prompt('Let\'s make pasta! Ingridient 1?'), prompt('Ingridient 2?'), prompt('Ingridient 3?')]
console.log(ingridients);

restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients);

//Объекты
const newRestoraunt = {foundingYear: 1998 ,...restaurant, founder: 'Guiseppe'};
console.log(newRestoraunt);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy); */

//006 Rest Pattern and Parameters NOTE
/*
//1) Деструктуризация

// SPREAD, потому что на ПРАВОЙ стороне =
const arr = [1, 2, ...[3, 4]];

//REST, потому что слева от =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Объекты
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Функции

const add = function (...numbers) {
  let num = 0;
  for (let i = 0; i < numbers.length; i++) {
    num += numbers[i];
  }
  console.log(num);
}
add(2, 3);
add(5, 3, 7, 2);
add(4, 5, 6, 78, 8, 4, 3);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

//007 Short Circuiting (&& and ) NOTE

/* console.log('----------OR---------');
// Использование любого типа данных, возврат любого типа данных, короткое замыкание
console.log(3 || 'Ilya');
console.log('' || 'Ilya');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------AND----------');

console.log(0 && 'Ilya');
console.log(7 && 'Ilya');

console.log('Hello' && 23 && null && 'ilya');

//практический пример
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'shpinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') */

//008 The Nullish Coalescing Operator () NOTE

/* restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); */

//009 Logical Assignment Operators NOTE

/* const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};


//OR assigment operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


//AND assigment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2); */



