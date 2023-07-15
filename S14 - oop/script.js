'use strict';

/*
    ! S13 | EP 208: Constructor Functions and new Operator

    Constructors cannot be arrow function because they need the 'this' keyword
    Do not create methods inside constructor functions
*/

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const Person = function (firstName, birthYear) {
    // console.log(this) // returns {}

    // create two new instance properties
    this.firstName = firstName,
        this.birthYear = birthYear
}

// create any number of objects
const brendan = new Person('Brendan', 1993)
console.log(brendan)

const matilda = new Person('Matilda', 2003)
const jack = new Person('Jack', 1995)
console.log(matilda, jack)

console.log(brendan instanceof Person) // true


/*
    ! S13 | EP 209: Prototypes

    Basic inheritence
    - Any object has access to the methods or properties from its prototype
    - Effectively prototype of linked objects 
    - Inherited properties go in __proto__ (they are available to inherited objects)
    - Defined properties (name and birthyear) from the constuctor are applied to the created objects
*/

console.log(Person.prototype);

// DOES NOT WORK WITH ARROW FUNCTIONS BECAUSE OF HOW 'THIS' KEYWORD OPERATES
Person.prototype.calcAge = function () { console.log(2037 - this.birthYear); } // uses birthyear from Person instance constructor

// reuse the object on instances of Person without having to repeat it on all objects.
// this keyword is set to the object calling the method (so brendan result is different from Matilda)
brendan.calcAge();
matilda.calcAge();

// ? Person.prototype is not the prototype of Person, instead it is what's going to be used as the prototype for any object
// ? that is created by the Person constructor function (line 15)
console.log(brendan.__proto__);
console.log(brendan.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// ? Where does __proto__ come from
// ? It is step 3 from above, it sets its value to the prototype property of the function being called (Person)

Person.prototype.species = 'Homo Sapiens' //now gets applied to the __proto__ of all objects (brendan, jack, matilda)
