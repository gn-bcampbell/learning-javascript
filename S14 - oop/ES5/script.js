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


/*
    ! S13 | EP 211: Prototypal Inheritence on Built-In objects

    All objects are inherited from JavaScripts base Object() class
    If a function or variable called on an object doesn't exist, JS will go up the chain to find if it exists in the Prototypal inheritence

    Note this is why MDN documentation uses Array.prototype.IndexOf() because the method is inherited to new arrays from the Array __proto__ 
*/

console.log(brendan.__proto__.__proto__); // goes up the chain to return Object __proto__
console.log(brendan.hasOwnProperty('firstName')); // this is why we can call hasOwnProperty as it's a function available within the __proto__ of Object
console.log(brendan.__proto__.__proto__.__proto__); // null
// console.log(brendan.fakeMethod()) // this will fail because it doesn't exist on Brendan, Person or Object __proto__

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9]; // new Array === [] 
console.log(arr.__proto__); // returns all methods inherited from the Array.prototype
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__); // goes back to the Object prototype

// ! You could extend the functionality of an inbuilt object... but DON'T DO THIS THO
Array.prototype.unique = function () {
    return [...new Set(this)]
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); // __proto__ is a HTMLHeadingElement --> HTMLElement --> Element --> Node --> EventTarget --> Object