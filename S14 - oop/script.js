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