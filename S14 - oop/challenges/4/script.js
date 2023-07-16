'use strict';

/**
 * Your tasks:
        1.  Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
            child class of the 'CarCl' class
    
        2.  Make the 'charge' property private
    
        3.  Implement the ability to chain the 'accelerate' and 'chargeBattery'
            methods of this class, and also update the 'brake' method in the 'CarCl'
            class. Then experiment with chaining!
    
    Test data:
        § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
 */

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        this.speedMessage()
    }

    brake() {
        this.speed -= 5;
        this.speedMessage()
        return this;
    }

    speedMessage() {
        console.log(`Car: ${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(v) {
        return this.speed * 1.6;
    }
}

class EVC1 extends Car {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Child: ${this.make} goes vroom at ${this.speed}`);
        return this;
    }

    chargeBattery(v) {
        this.#charge = v;
        console.log(`Battery charged to ${this.#charge}`);
        return this;
    }
}

const tesla = new EVC1('Tesla', 120, 23);
tesla.accelerate().accelerate().accelerate().brake().chargeBattery(99)

/**
 * accelerate() uses child class
 * brake() uses parent class
 * chargeBattery() uses child class
 */