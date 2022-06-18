/*
    S3 | EP33: Functions

    --> Holds several lines of code
    --> Can be reused
*/

function logger() {
    console.log('Hi');
}

//Call | Run | Invoke | Execute function()
logger();
logger();

function processFruit(apples, oranges) {
    return `Juice with ${apples} apples & ${oranges} oranges.`;
}

//Result of function return statement is captured in variable
const appleJuice = processFruit(1, 3);
console.log(appleJuice);

//Or logged out via console
console.log(processFruit(5, 6));


/*
    S3 | EP34: Function Declarations vs. Expressions
   
    --> Declartions CAN be called before they're created
    --> Expressions CANNOT because of 'hoisting' & they initialize a variable
*/

// Declartion
const age1 = calcAge1(1993);
console.log(age1);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// Expression / Anonymous function (no name)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
age2 = calcAge2(1992);
console.log(age1, age2);

/*
    S3 | EP35: Arrow Functions

    --> Great for one liners
    --> Debateable if they're as useful for more complicated functions
        --> Do not get 'this' keyword.
*/

// Simple: One line, one parameter returns implicitly without 'return' keyword
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1992));

// More than one line requires return keyword
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    return 65 - age;
}
console.log(yearsUntilRetirement(1993));

// Multiple parameters requires paranthesis
const personRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(personRetirement(1993, 'Brendan'));
console.log(personRetirement(1980, 'Bob'));

