'use strict';

/* 
    Your tasks:
    1.  Use a constructor function to implement an Electric Car (called 'EV') as a child
        "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
        current battery charge in % ('charge' property)
    
    2.  Implement a 'chargeBattery' method which takes an argument
        'chargeTo' and sets the battery charge to 'chargeTo'
    
    3.  Implement an 'accelerate' method that will increase the car's speed by 20,
        and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
        km/h, with a charge of 22%'
    
    4.  Create an electric car object and experiment with calling 'accelerate',
        'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
        you 'accelerate'! Hint: Review the definiton of polymorphism 😉
    
    Test data:
    - Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

*/

// * Create the constructor function of the parent object
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

// * Create methods attached to prototype of parent function
Car.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery is charged to ${this.charge}%`);
}

Car.prototype.brake = function () {
    this.speed -= 20;
}

Car.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

// * Create new EV object, inheriting constructor properties from Parent object
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// ! Link the two object prototypes to allow child to access methods declared in parent prototype
EV.prototype = Object.create(Car.prototype)

// ! If tesla.accelerate is called, this one is called as it exists first in the chain.
// EV.prototype.accelerate = function () {
//     console.log(`Calling EV method`);
// }

const tesla = new EV('Tesla', 120, 23)
tesla.accelerate()
tesla.accelerate()
tesla.brake()
tesla.chargeBattery(90)
tesla.accelerate()