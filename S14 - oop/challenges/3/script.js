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