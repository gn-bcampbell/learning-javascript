'use strict';

/*
    ! S13 | EP 218: Inheritence between ES5 Classes (Constructor functions)

    * What we want for inheritence here is for Person.__proto__ to be the prototype of Student.__proto__
*/

const Person = function (firstName, birthYear) {

    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    return console.log(2037 - this.birthYear);
}

// constructor for student
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear) //Calls a method of an object, substituting another object for the current object
    this.course = course;
}
console.log(Student.__proto__ === Person.__proto__); //true

// Linking prototypes
console.log(Student.prototype); // no access to calcAge
// ! Without this, we can't use Person prototype methods like calcAge() 
Student.prototype = Object.create(Person.prototype)
console.log(Student.prototype); // access to calcAge inside __proto__

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science')
mike.introduce();
mike.calcAge(); // here we're doing a method lookup on the protoypal chain, it's not on Student object so it goes up to Person and finds it inside prototype
