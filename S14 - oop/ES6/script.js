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
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // methods - available on Person prototype only
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear
    }

    /*
        * Setting a property that already exists:
        _fullName is required as workaround to both setter and constructor attempting to set fullName value
        hence why fullName getter is required to return _fullName
    */
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else console.log(`${name} is not a fullname!`);
    }

    get fullName() {
        return this._fullName
    }
}

const jess = new Person('Jessica Davis', 1993)
console.log(jess);
jess.calcAge()
console.log(`--- Using get / set functions from class --- `);
console.log(jess.age);
console.log(jess.fullName);
console.log(`--- Finished using get / set functions from class --- `);

console.log(jess.__proto__ === Person.prototype); //true

// It's still possible to add methods via prototype
Person.prototype.greet = function () {
    // console.log(`Hi, I'm ${this.fullName}`);
}
jess.greet() //add greet to Person, but called on instance of Person


/*
    ! S13 | EP 214: Setters and Getters

    * Common to all objects
    * Getters and Setters are 
*/

const account = {
    owner: 'Brendan',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest); //used as property - no ()
account.latest = 50 //also a property
console.log(account.latest);
console.log(account.movements);