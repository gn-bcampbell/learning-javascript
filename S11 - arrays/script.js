'use strict';

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

/*
    ! S11 | EP 144: forEach method

    loop over array and execute callback function, passing in current element of array
    movements.forEach((movement, index, array) => {});

    You CANNOT break out of forEach (break; continue;)

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('----For Of----');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`At index ${i + 1}: You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('----forEach----');
// loop over array and execute callback function, passing in current element of array
// 0: function(200)
// 1: function(450)
movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
});

console.log('----forEach arrow function with index ----');
// passes current element, index and entire array [order matters]
movements.forEach((movement, index, array) => {
  if (movement > 0)
    console.log(
      `At index ${index + 1}: You deposited ${movement} from array: ${array}`
    );
  else console.log(`At index ${index + 1}: You withdrew ${Math.abs(movement)}`);
});

/*
    ! S11 | EP 145: forEach on Maps and Sets

    Maps - value, key, map
    Sets - uses same parameters even though sets don't have indexes or keys
*/

// array of arrays
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`this is the value ${value}. This is the key ${key}`);
});

const currenciesUnique = new Set(['USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // only shows unique values

currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}`);
});

/*
    ! S11 | EP 149: Data transformation. Map, Filter, Reduce

    Map: Similar to forEach. It creates brand new array based on original array. Applies callback function on each iteration. 
         'Maps values of original array to the new array'. Builds a new array that is the result of applying an operation to the original array. Ie, 
         ? array1.map(x => x * 2);

    Filter: Used to filter for elements in original array that satisfy a certain condition. Only elements that pass condition will be included in new array
            ? words.filter(w => w.length > 6); 
            Creates a new array that only contains words > 6 characters

    Reduce: Boil down all elements of original array into one single value. Ie, add all elements together. Contains 'accumulator' variable 
           ? const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
*/

const euros = [200, 450, -400, 3000, -650, -130, 70, 1300];
const conversionRate = 1.12;

const dollars = euros.map(x => x * conversionRate);
console.log(dollars);

const otherDollars = [];
for (const euro of euros) {
  otherDollars.push(euro * conversionRate);
}
console.log(otherDollars);

/*
    ! S11 | EP 150: The map method
    ? map has access to the same 3 parameters of forEach  (element, index, map)
*/

const movementsDescription = euros.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementsDescription);

/*
    ! S11 | EP 151: Computing Usernames
*/

// Create a function that loops over accounts, creates a username based off of their initials and adds
// it as a property to each account object
const createUsername = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(x => x[0])
      .join('');
  });
};
createUsername(accounts);

accounts.forEach(acc => console.log(acc));

/*
    ! S11 | EP 152: Filter Method
    ? Return values that match condition
*/
const deposits = movements.filter(x => x > 0);
console.log(deposits);

const withdrawals = movements.filter(x => x < 0);
console.log(withdrawals);

/*
    ! S11 | EP 153: Reduce:
    ? Boil down all values in an array into a single value
*/

// set initial value in params
const totalBalance = movements.reduce(
  (accumulator = 0, current, index, array) => {
    return accumulator + current;
  }
);

// set initial value after declaration
const totalBalance2 = movements.reduce(
  (accumulator, current, index, array) => accumulator + current,
  0
);
console.log(totalBalance, totalBalance2);

const maxValue = movements.reduce((accumulator = 0, current) => {
  let currentMax = accumulator;
  if (current > currentMax) currentMax = current;

  return currentMax;
});

const maxValue2 = movements.reduce((accumulator, current) => {
  if (accumulator > current) return accumulator;
  else return current;
}, movements[0]); // start with initial value from array instead of 0

console.log(maxValue, maxValue2);

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // remove test data before adding

  //loop over all movements and create html elements containing data
  movements.forEach((movement, index) => {
    let transactionDirection = movement < 0 ? 'withdrawal' : 'deposit';
    const html = `        
    <div class="movements__row">
        <div class="movements__type movements__type--${transactionDirection}">${index + 1
      } ${transactionDirection}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement} €</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('beforeend', html); //add html above into element
  });
};

// calc and disply balance
const calcDispalyBalance = (account) => {
  account.balance = account.movements.reduce((acc = 0, movement) => acc + movement); //add property to account object
  labelBalance.textContent = `${account.balance} €`;
};


const calcDisplaySummary = (account) => {
  const incomes = account.movements
    .filter(x => x > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const outgoings = account.movements
    .filter(x => x < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = account.movements
    .filter(x => x > 0)
    .map(deposit => (deposit * account.interestRate) / 100) // * calculate percentages
    .filter(interests => interests > 1) // * only get interests where rate is > 1
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${Math.abs(outgoings)} €`;
  labelSumInterest.textContent = `${interest} €`;
};


/*
    ! S11 | EP 155: Chaining Methods

    * TIP: Don't overchain -> using massive arrays degrades performance
    *      Don't chain methods that mutate arrays (ie splice)

    * TIP: Inspect the array by using the built-in callback functions 
    * i.e. .map((x, index, arr) => {
    *       console.log(arr) //! see content here
    *       return x * 1.1
    * })
*/

// take all movements.deposits, convert them from euro to dollars and add them
const totalDepositsToDollars = movements
  .filter(x => x > 0)
  .map(x => x * conversionRate)
  .reduce((accumulator, current) => accumulator + current, 0);

console.log(`Total deposits in dollars: ${totalDepositsToDollars}`);


/*
    ! S11 | EP 157: The Find Method

    Find returns FIRST array element that matches condition (no new array created)

    Filter returns ALL array elements that match condition (in a new array)
*/

// Example
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements);
console.log(firstWithdrawal);

// Use-case
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);

// Alternative implementation
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis')
    console.log(acc)
}

/*
    ! S11 | EP 158: Implementing Login Controls
*/

let currentAccount;
btnLogin.addEventListener('click', (e) => {
  e.preventDefault(); //prevent form from submitting

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    // Display movements
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
})

/*
    ! S11 | EP 159: Implementing Transfers
*/

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const transferTo = accounts.find(acc => acc.username === inputTransferTo.value);
  const transferAmount = Number(inputTransferAmount.value);

  //clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (transferAmount > 0
    && transferTo
    && transferAmount <= currentAccount.balance
    && currentAccount.username !== transferTo?.username) {
    transferTo?.movements.push(transferAmount);
    currentAccount.movements.push(-transferAmount);
  }

  updateUI(currentAccount);
})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0
    && currentAccount.movements.some(mov => mov >= amount * 0.10)) {
    currentAccount.movements.push(amount);
  }
  updateUI(currentAccount);
  inputLoanAmount.value = ''

})

const updateUI = (currentAccount) => {
  displayMovements(currentAccount.movements);
  calcDispalyBalance(currentAccount)
  calcDisplaySummary(currentAccount);
}


/*
    ! S11 | EP 160: FindIndex() Method

    Return the index number that matches the condition
*/

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === Number(currentAccount.pin)) {
    console.log('account deleted');
    const index = accounts.findIndex((acc) => acc.username === currentAccount.username)
    accounts.splice(index, 1);
  }

  containerApp.style.opacity = 0;

  inputClosePin.value = inputCloseUsername.value = ''
})


/*
    ! S11 | EP 161: Some() Method & Every() Method
    - true if some/any value matches condition
    
    - includes() is an equality check, i.e. one value === -130
    - some() is a conditional check, i.e. at least one value >= -450 
      - any() in C#
*/

const anyDeposits = movements.some(x => x > 0);
const depositAbove5000 = movements.some(x => x >= 5000)

const everyDeposit = movements.every(x => 0); //false because of negative movements
const everyDeposit2 = movements.every(x => typeof Number) // true because they're all numbers