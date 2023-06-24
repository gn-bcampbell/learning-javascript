'use strict';
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

// how much has been deposited in total in the bank
const bankDepositSum = accounts.flatMap((acc) => acc.movements)
    .filter(x => x > 1)
    .reduce((acc, cur) => acc + cur);
console.log(bankDepositSum);

// how many deposits in bank with at least 1000
const numDeposits1000 = accounts.flatMap((acc) => acc.movements)
    .filter(x => x >= 1000)
    .length;
console.log(numDeposits1000);

// complex reduce() to do the same as above
const deposits1000 = accounts.flatMap((acc) => acc.movements)
    .reduce((count, cur) => cur >= 1000 ? ++count : count, 0)
console.log(deposits1000);

// complex reduce: create new object instead of single value
// create an object that contains sum of deposits and withdrawels


const accountValues = accounts.flatMap((acc) => acc.movements)
    .reduce((sums, cur) => {
        cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        return sums // always have to return accumulator from the function when using arrow function {}
    }, { deposits: 0, withdrawals: 0 }); //starting point is an object (sums callback)

console.log(accountValues);

// destructure above, requires exact same names
const { deposits, withdrawals } = accounts.flatMap((acc) => acc.movements)
    .reduce((sums, cur) => {
        cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        return sums // always have to return accumulator from the function when using arrow function {}
    }, { deposits: 0, withdrawals: 0 }); //starting point is an object (sums callback)

console.log(deposits, withdrawals);

// improve above for DRY principles
const { deposits2, withdrawals2 } = accounts.flatMap((acc) => acc.movements)
    .reduce((sums, cur) => {
        sums[cur > 0 ? 'deposits2' : 'withdrawals2'] += cur
        return sums
    }, { deposits2: 0, withdrawals2: 0 });

console.log(deposits2, withdrawals2);


// convert any sentence to title case (all words are capitalised with some exceptions)
const convertTitleCase = (title) => {
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'with', 'on', 'in', 'is']

    // if word is in exceptions list, return it instead of altering it.
    const titleCase =
        title.toLowerCase()
            .split(' ')
            .map(word =>
                exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
            ).join(' ');

    return titleCase
}

console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a long title but not TOO LONG'))
console.log(convertTitleCase('and here is another title with an EXAMPLE'))

