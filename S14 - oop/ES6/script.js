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

    static staticHi() {
        console.log('Static Hi from Person 🙋‍♀️');
    }
}

const jess = new Person('Jessica Davis', 1993)
console.log(jess);
jess.calcAge()
console.log(`--- Using get / set functions from class --- `);
console.log(jess.age);
console.log(jess.fullName);
Person.staticHi()
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


/*
    ! S13 | EP 215: Static Methods
*/

// Can't be inherited by Person instances, as it's not added to `prototype`
Person.hey = function () {
    console.log('Hey there 👋');
    // console.log(this);
}
Person.hey()


/*
    ! S13 | EP 216: Object.create

    ? Least used.
    * No prototype properties
    * No constructor functions
    * No 'new' keyword
    * We can manually set the prototype of an object to any other Object we want
*/

// create an object that we want to be the prototype for this object
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },


    // workaround for constructor - same as it.
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// create a new empty object that's linked to proto object
const steven = Object.create(PersonProto);
steven.name = 'Steven'
steven.birthYear = 1993
steven.calcAge();

console.log(steven);
console.log(steven.__proto__ === PersonProto); //true

// Create object programmatically 
const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979)
sarah.calcAge()
