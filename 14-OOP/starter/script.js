'use strict';

//005 Constructor Functions and the new Operator NOTE
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER DO THIS
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const ilya = new Person('Ilya', 1998);
console.log(ilya);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticlly return {}

const nastya = new Person('Nastya', 2003);
const kos = new Person('Sanya', 1999);
console.log(nastya, kos);

const jay = 'Jay';

console.log(ilya instanceof Person);
console.log(jay instanceof Person);

// 006 Prototypes NOTE

// Prototypes 
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

ilya.calcAge();
nastya.calcAge();

console.log(ilya.__proto__);
console.log(ilya.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ilya));
console.log(Person.prototype.isPrototypeOf(nastya));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(ilya.species, nastya.species);

console.log(ilya.hasOwnProperty('firstName'));
console.log(ilya.hasOwnProperty('species'));