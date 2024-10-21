'use strict';

//005 Constructor Functions and the new Operator NOTE
/* const Person = function (firstName, birthYear) {
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
console.log(jay instanceof Person); */

// 006 Prototypes NOTE

// Prototypes 
/* console.log(Person.prototype);

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
console.log(ilya.hasOwnProperty('species')); */

// 008 Prototypal Inheritance on Built-In Objects NOTE

/* console.log(ilya.__proto__);
// Object.prototype (top of prototype chain)
console.log(ilya.__proto__.__proto__);
console.log(ilya.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 5, 6, 6, 6, 23, 4, 5, 6]; // new Array = []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// generally not GOOD idea in big projects
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1); */

// 010 ES6 Classes NOTE

// class expression
// const PersonCl = class {

// }

// class declaration
/* class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods 
    // Methods will be add to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    //Setters and Getters NOTE
    get age() {
        return 2037 - this.birthYear;
    }

    // Set a rpoperty that already exist
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName
    }

    // Static method not avialable on instance class NOTE
    static hey() {
        console.log('Hey there 🙋‍♂️');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Davis', 1997);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey(); */

// 011 Setters and Getters NOTE

/* const account = {
    owner: 'Ilya',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements); */

// 012 Static Methods NOTE
/* 
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

// Static
Person.hey = function () {
    console.log('Hey there 🙋‍♂️');
    console.log(this);
}

Person.hey();
// ilya.hey(); */

//013 Object.create NOTE
/* 
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); */

// 015 Inheritance Between Classes Constructor Functions NOTE

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);