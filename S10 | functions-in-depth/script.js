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
// document.body.addEventListener('click', high5); //* eventListener is higher order function, and high5 is callback function

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

/*
    ! S10 | EP 133: The Call and Apply methods

    ! Call: Accepts the object you want to substitute out, then other parameters are the method parameters needed for the function called
    ! Apply [deprecated]: Exact same, except it takes an array for the necessary parameters
*/

const lufthansa = {
  airline: 'Lufthansa',
  iata: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight: ${this.iata}:${flightNum}`
    );
    this.bookings.push({ flight: `${this.iata}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Brendan');
lufthansa.book(255, 'Kaya');
console.log(lufthansa.bookings);

const euroWings = {
  airline: 'EuroWings',
  iata: 'EW',
  bookings: [],
};

const book = lufthansa.book;

/* Calls a method of an object, substituting another object for the current object.
    @param thisArg — The object to be used as the current object.
    @param argArray — A list of arguments to be passed to the method. */
book.call(euroWings, 23, 'Sara');
book.call(lufthansa, 444, 'Mary');

const swiss = {
  airline: 'Swiss Air Lines',
  iata: 'SW',
  bookings: [],
};
book.call(swiss, 55, 'Jason');

// Apply [deprecated]
const flightData = [55, 'Brendan'];
book.apply(swiss, [22, 'Jackson']);
book.apply(lufthansa, flightData);

// preferred method using spread operator
book.call(euroWings, ...flightData);

/*
    ! S10 | EP 134: Bind Method

    ! Same as call (lets you set 'this' keyword)
    ! Difference is: bind doesn't immediately call the function, instead it returns a new function where the 'this' keyword is bound

    Useful if you have to use that function multiple times
*/

const bookEW = book.bind(euroWings); // returns a new function where 'this' keyword is always bound to euroWings object
bookEW(3321, 'Brian');
bookEW(3321, 'Steven');

console.log(euroWings.bookings);

const bookSW = book.bind(swiss);
bookSW(564, 'Mr Swiss');
bookSW(564, 'Mrs Swiss');

// create variable where all flights are euroWings 23 flights
const bookEW23 = book.bind(euroWings, 23);
bookEW23('Lionel'); // only needs one param

// Using objects together with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// .addEventListener('click', lufthansa.buyPlane); // ! 'this' scopes to the handler function and .button element & not lufthansa object

// ! Partial Application lets you preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// same as -> addVAT = value=> value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(200));

/* Challenge: Create a function that can return a function which does the same as addVAT */
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(200));

/*
    ! S10 | EP 136: Immediately Invoked Functions IIF

    Invoked and then disappears immediately after (used in async/await)
    Used for encapsulation to ensure variables are only accessible inside that scope [deprecated in ES6 due to blocks {variables in here are scoped}]

    1. Write a function with no name, 
    2. Wrap it in () to make it an expression,
    3. Immediately call it using ()
*/

(function () {
  console.log('IIF standard');
})();

(() => console.log('IIF arrow'))();

/*
    ! S10 | EP 137: Closures

    Any function always has access to the variable environment of the execution context in which the function was created

    Booker function will get access to the variable environment which contains the 'passengerCount' variable
    And this is how the function can read and manipulate that variable even after the execution context (secureBooking function) is completed
    
    CLOSEURE = The variable environment that's attached to the function exactly as it was at the time and place the function was created

    MVP - Just go back to the video
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
