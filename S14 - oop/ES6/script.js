'use strict';

/*
    ! S13 | EP 213: ES6 Classes

    * Class is syntactic sugar for creating constructor functions and still implement prototypal inheritence
    * Class keyword is a special kind of function

    ! Note:
    * Classes are NOT hoisted - cannot be used before being declared
    * Classes are first-class citizens - can be passed into and be returned from functions (because they are just functions)
    * Classes are executed in 'strict-mode' by default
*/

// class expression
const PersonCl = class { }

// class declaration
class Person {

    // method of a class and must be called constructor
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // methods - available on Person prototype only
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jess = new Person('Jessica', 1993)
console.log(jess);
jess.calcAge()

console.log(jess.__proto__ === Person.prototype); //true

// It's still possible to add methods via prototype
Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.firstName}`);
}
jess.greet() //add greet to Person, but called on instance of Person