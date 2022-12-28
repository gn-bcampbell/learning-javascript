'use strict';

/*
    ! S11 | EP 141: Section Roadmap
    - Simple array methods
    - Looping arrays: forEach
    - foreach with Maps and Sets
*/

/*
    ! S11 | EP 142: Simple Array Methods
*/

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - DOES NOT mutate original array, can be method chained
console.log(arr.slice(2));
console.log(arr.slice(0, 4)); //up to but not inluding 4 ('e')
console.log(arr.slice(-2)); //get last elements and work backward
console.log(arr.slice(-1)); //get last element
console.log(arr.slice(1, -2)); // 'b' 'c' -> extract it up until last 2
console.log(arr.slice()); //create shallow copy
console.log([...arr]); //create shallow copy

// SPLICE - DOES mutate original array
console.log(arr.splice(2)); //extracts 'c' 'd' 'e'
arr.splice(-1); //mostly used to delete last element
console.log(arr); //now only contains 'a'

// REVERSE - DOES mutate original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT - DOES NOT mutate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(arr.join(' - ')); //a-b-c-d-e

/*
    ! S11 | EP 143: .at Method
*/

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//get value from end of array
console.log(arr3[arr3.length - 1]); //old
console.log(arr3.slice(-1)[0]); //old
console.log(arr3.at(-1));

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
