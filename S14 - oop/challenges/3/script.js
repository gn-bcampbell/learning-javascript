'use strict';

/*
    S13 | EP 220: ES6 inheritence and `super()` keyword
*/

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hi ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name
        else console.log('This is not a fullname');
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log(`Hey there 👋`);
    }
}

class Student extends Person {

    constructor(fullName, birthYear, course) {
        super(fullName, birthYear) // ! constructor of Person class - needs to happen first
        this.course = course;
    }

    introduce() {
        console.log(`Hi there, I am ${this.fullName} and I'm studying ${this.course}`);
    }

    // ! override parent class method
    calcAge() {
        console.log(`Here we're overriding calcAge`);
    }
}

const brendan = new Student('Brendan C', 1993, 'Software Engineeering');

brendan.introduce();
brendan.calcAge();
brendan.hey; // child classes do not inherit static methods from parents


/*
    S13 |   EP 222 : Class example 
        |   EP 223 : Encapsulation
        |   EP 224 : Private Class Fields and Methods

    ? Default values into constructor
    ? Calling instance methods inside other instance methods (deposit/withdraw)
    ? _underscore convention to denote private/readonly fields.

    ? public fields     ->  create a class variable
    ? private fields    ->  prefix with #
    ? public methods    ->  standard ES6 methods 
    ? private methods   ->  method prefix with #
    ? static            ->  applies to all public/private fields/methods
*/


class Account {
    // ! public fields (instances)
    locale = navigator.language;
    // ! private fields
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // *  add default values via constructor without having to pass them in
        // this.locale = navigator.language;

        // * protected _ is a convention - can be edited, but is a convention to inform others that it shouldn't be
        // this._movements = []
        this._pin = pin;

        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    // ! public methods

    getMovements() {
        return this.#movements;
    }

    deposit(value) {
        this.#movements.push(value)
    }

    withdraw(value) {
        this.deposit(-value)
    }

    // _ denotes readOnly
    _approveLoan() {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan) {
            this.deposit(val)
            console.log(`Loan approved`)
        }
    }

    // ! private methods
    #approvedInformation() {
        return false;
    }
}

const account1 = new Account('Brendan', 'EUR', 1111)
console.log(account1);
account1.deposit(444)
account1.withdraw(123)
account1.requestLoan(1000);
// console.log(account1.#movements); // ! fails becuase it's a private field
// console.log(account1.#approvedInformation()); // ! fails becuase it's not implemented yet in JavaScript
console.log(account1); 
