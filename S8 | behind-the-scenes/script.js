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
