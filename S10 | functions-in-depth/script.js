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
