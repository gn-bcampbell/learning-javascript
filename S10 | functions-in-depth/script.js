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
