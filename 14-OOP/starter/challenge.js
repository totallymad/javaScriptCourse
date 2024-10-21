'use strict';

// CHALLENGE #1
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}

const bmw = new Car('BMW', 120);
const mercedec = new Car('Mercedec', 95);
console.log(bmw, mercedec);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
mercedec.accelerate();
mercedec.brake();

// CHALLENGE #2
/* class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} speed is ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} speed is ${this.speed}`);
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
console.log(ford.speedUS);
ford.brake();
ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford); */


// CHALLENGE #3

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`Battery of ${this.make} charged on ${this.charge}%`);
}

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV("Tesla", 120, 23);
console.log(tesla);
tesla.chargeBattery(80);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake(); 
tesla.accelerate();
