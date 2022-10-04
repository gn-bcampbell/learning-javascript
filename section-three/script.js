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

/*
    S3 | EP36: Functions Calling Other Functions
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function processCutFruit(apples, oranges) {
    applePieces = cutFruitPieces(apples);
    orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apple & ${orangePieces} pieces of orange.`;
}
console.log(processCutFruit(2, 3));

/*
    S3 | EP37: Reviewing Functions
*/
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

function yearsToRetire(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    return retirement < 0 ? 0 : retirement;
}
console.log(yearsToRetire(1991, 'Brendan'));
console.log(yearsToRetire(1970, 'Jacob'));

// Recap

// function declartion: can be used before it's declared
function calc(year) {
    return 2037 - year;
}

// function expression: essentially a function stored in a variable
const age = function (year) {
    return 2037 - year;
}

// arrow functions: great for one-liners & has no return statement
const calulate = year => 2037 - year;
const calulate2 = (year, name) => `${name} was born in ${2037 - year}`;


/*
    S3 | EP39: Introduction to Arrays
*/
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

console.log(friends[0]);
console.log(friends.length); //property doesn't use ()
console.log(friends[friends.length - 1]); //supports expression inside square brackets 
friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Brendan'
const brendan = [firstName, 'Campbell', 2022 - 1993, 'Engineer', friends];
console.log(brendan);

// Exercise
const calcAgeAgain = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const arrayAge = calcAgeAgain(years[0]);
const arrayAge1 = calcAgeAgain(years[1]);
const arrayAge2 = calcAgeAgain(years[years.length - 1]);
console.log(arrayAge, arrayAge1, arrayAge2);
// Supports expressions as array values
const allAges = [calcAgeAgain(years[0]), calcAgeAgain(years[1]), calcAgeAgain(years[years.length - 1])];
console.log(allAges);

/*
    S3 | EP40: Basic Array Operations
*/
const mates = ['Michael', 'David', 'Blake'];

// add element to end of array
mates.push('Sara');
console.log(mates);

// add element to start of array
mates.unshift('John');
console.log(mates);

// remove last element
mates.pop();
console.log(mates);
// store removed element
const removedValue = mates.pop();
console.log(removedValue);

// remove first element 
mates.shift();
console.log(mates);

console.log(mates.indexOf('David')); //returns -1 if element doesn't exist

// uses strict === equality
console.log(mates.includes('David'));
console.log(mates.includes('Jason'));

if (mates.includes('David'))
    console.log("You've a mate called David");


/*
    S3 | EP41: Introduction to Objects
*/

// keys are 'properties' with values

// example of object literal
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

/*
    S3 | EP41: Dot vs Bracket Notation

    Access and change data in objects
*/

// Access
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]) //bracket is a javascript expression (something that produces a value. In this case, it's a correct property name 'firstName')

// example if we don't know what property we'll need to show (say via user interface)
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job or friends');

// if (jonas[interestedIn])
//     console.log(jonas[interestedIn]); //expression evaluates to property name
// else
//     console.log('Wrong request');

// Change (add) properties to object
jonas.location = 'Portugal';
jonas['twitter'] = '@tweet-tweet';

console.log(jonas);

// Challenge: "Jonas has 3 friends and his best friend is called Michael"
const challengeSentence = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
console.log(challengeSentence);

/*
    S3 | EP44: Object Methods

    Can add functions to objects
*/

const brendanObject = {
    firstName: 'Brendan',
    lastName: 'Campbell',
    birthYear: '1993',
    job: 'Software Engineer',
    friends: ['Bill', 'Bob', 'Tom',],
    hasDriversLicence: true,

    // any function attached to an object is a method (via js expression)
    // basically a property that contains a 'function value'
    calcAge: function(){
        return 2037 - this.birthYear; // using this instead of brendanObject.birthyear is safer as the object name could change
    },

    // effecient alternative (calculate once and store as object property)
    // better for more complex functional values
    getAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        this.summary = `${this.firstName} is a ${this.getAge()} year old ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`
        return this.summary;
    }
}

console.log(brendanObject.calcAge()); // no parameter required because it uses 'this' keyword [dependent on object calling the method, here it's brendanObject]
console.log(brendanObject['calcAge'](1991));
console.log(brendanObject.getAge()); 
console.log(brendanObject.getSummary());


/*
    S3 | EP46: The For Loop
*/

for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights, rep: ${rep} 🏋️‍♀️`);
}