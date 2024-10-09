'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//007 Short Circuiting (&& and )

console.log('----------OR---------');
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

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

//006 Rest Pattern and Parameters
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

//005 The Spread Operator (...)

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

//004 Destructuring Objects
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


//003 Destructuring Arrays
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

