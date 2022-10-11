"use strict";

/*
    S8 | EP97: The 'this' keyword in practice
*/

// this == the window object at global scope
console.log(this);

// this == undefined in 'strict mode'
// sloppy mode is the window object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1993);

/*
  this == window object because arrow functions 
  don't have their own this keyword so it returns 
  the surrounding parent which is the global scope (lexical scoping)
 */
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow();

/* 
  this == jonas object because that's the object calling the method (calcAge)
  explains why we can use this.year to access the year property of jonas
*/
const jonas = {
  year: 1989,
  calcAge: function () {
    console.log(this);
    return 2037 - this.year;
  },

  greet: () => console.log(`Hey, ${this.firstName}`),
};
jonas.calcAge();

// this keyword points to the object calling the method
const matild = {
  year: 2017,
};
matild.calcAge = jonas.calcAge; // borrows the method from jonas object into matild object
matild.methodAge = jonas.calcAge(); // adds a property 'methodAge' to matild with value calculated from jonas object & sets property value to 48
console.log(matild);
matild.age = matild.calcAge(); // adds property age to maltid with value calculated
// using this.year == matild.year (20) because
// matild was the object calling the method and sets
// the scope of 'this' to matild object
matild["age2"] = matild.calcAge(); // same as matild.age
console.log(matild);

/*
    S8 | EP98: Regular functions vs Arrow Functions
*/

// *[testdata] var firstName = "Brendan";
// *[testdata] window.firstName = "Brendan";
const brendan = {
  firstName: "Brendan",
  year: 1993,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // SOLUTION 1 (PRE-ES6)
    // const self = this; //self or that
    // const isMillennial = function () {
    //   console.log(this); //undefined
    //   console.log(self.year >= 1981 && self.year <= 1996); // * pre-es6 solution to access this outside the function
    // console.log(this.year >= 1981 && this.year <= 1996); // * errors out, this is undefined in function call
    // };

    // SOLUTION 2 (ES6 - Use arrow function)
    // self = this; is not required
    // works because arrow function has no 'this' keyword and defaults to parent scope (calcAge & brendan object)
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },

  // returns 'Hey undefined' because arrow function doesn't get it's own 'this' keyword
  // in this case this = window object and window object dones't have a window.firstName property
  greet: () => console.log(`Hey, ${this.firstName}`),

  // works as expected because regular functions have a this keyword
  // and will get scoped to the object calling the function
  greetFunction: function () {
    console.log(`Hey, ${this.firstName}`);
  },
};
brendan.greet();
brendan.greetFunction();
brendan.calcAge();

// functions get access to arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  let arugmentsCalculation = 0;
  for (let i = 0; i < arguments.length; i++) {
    arugmentsCalculation += arguments[i];
  }

  console.log(`Arguments Calculation: ${arugmentsCalculation}`);
  return a + b;
};

addExpression(2, 5);
addExpression(2, 5, 33, 56, 66); //valid because extra params get added to arguments keyword array (arguments[2] == 33)

const addArrow = (a, b) => {
  //console.log(arguments); // does not exist for arrow functions
  return a + b;
};

addArrow(2, 10);
// addArrow(2, 10, 55, 34, 65); //! invalid
