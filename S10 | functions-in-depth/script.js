'use strict';

/*
    ! S10 | EP 128: Default Parameters

    Default values or expressions are evaluated if a parameter is not supplied
*/

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 0,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2); // sets price to 199 * 2
createBooking('LH123', undefined, 55); // skip parameters to use default

/*
    ! S10 | EP 129: Passing Arguments: Value vs Reference

    ! JS does NOT support passing by reference
*/

const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmet',
  passport: 9347598374,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH444';
  passenger.name = 'Mr. ' + passenger.name;
};

checkIn(flight, jonas);
console.log(flight); // remains LH123
console.log(jonas); // updates to Mr. Jonas Schmet

/*
    ! S10 | EP 130: First Class and Higher Order Functions

    ! JS treats functions as first-class citizens
    ! Functions are simply values (all functions are objects so functions are also values)

    ! Higher Order-Function: A function that receives another function as an argument, that returns a new function (or both)
*/
const addEx = (a, b) => a + b; //*storing functions in variables
const counterEx = {
  value: 23,
  inc: function () {
    this.value;
  }, //*storing functions in properties
};
// btnClose.addEventlistener('click', counterEx); //* pass functions are arguments in other functions

// counterEx.inc.bind(someOtherObject); // *return functions from functions or call methods on functions

/*
    ! S10 | EP 131: Functions Accepting Callback Functions

    ! Callback function, we do not call the function ourselves, we tell one function 
    ! to call back to another function to later

    ! Why?  Makes code reusable and split up
    !       Allows for 'Abstraction' to hide the detail in the code
    !       transformer wants to change a string, but it doesn't care how it is changed, the 'HOW' is the detail in the abstracted callback functions
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// create higher order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord); // * callback function (inside transformer fn(str))
console.log('-----');
transformer('Javascript is the best!', oneWord); // * callback function

// another call back function
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5); //eventListener is higher order function, and high5 is callback function

// another
['Jonas', 'Martha', 'Adam'].forEach(high5); //foreach item in array call back to function high5

/*
    ! S10 | EP 132: Create a function that returns a new function
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

/* Greet returns a new function that we stored in greeterHey which is now just a function
that we can pass a parameter name into */
const greeterHey = greet('Hey');
greeterHey('Brendan');
greeterHey('Kaya');
greet('Hi')('Brendan'); //immediately call the function -> () after the function name

// one arrow function returning another arrow function
const greetArrow = greeting => name => console.log(`${greeting}, ${name}`);
greetArrow('Hi there')('Brendan');
