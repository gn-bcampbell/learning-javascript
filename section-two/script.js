/*
    S2 | EP20 : Type Conversion & Coercion
*/

// Setup
const inputYear = '1991';
console.log(inputYear + 18); // 199118

// Conversion
console.log(Number(inputYear)); // 1991
console.log(Number(inputYear) + 18) // 2009
console.log(Number('temp')); // NaN
console.log(String(23)); // '23'


// Coercion
console.log('I am ' + 23 + ' years old'); // string concat
console.log('23' - '10' - 3) // 10
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5


/*
    S2 | EP21 : Truthy & Falsy
*/

// 5 values are always considered falsy

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

const money = 0;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("Get a job you schmuck") //returned as money converted to false
}

/*
    S2 | EP22 : Equality Operators == vs. ===
*/
const age = 18;
if (age === 18)
    console.log('age is 18'); // returned 

if (age == '18')
    console.log('age is 18'); //returned because value is same even though type is different (type coercion)


/*
    S2 | EP23 & 24 : Logical Operators
*/

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense && !hasGoodVision); //false
console.log(hasDriversLicense || !hasGoodVision); //true
console.log(!hasDriversLicense || !hasGoodVision); //false

/*
    S2 | EP26: Switch Statement
*/

let value = 11;
switch (value) {
    case 10: console.log('value is 10');
        break;

    case 11:
    case 12:
        console.log('value either 11 or 12');
        break;

    default: console.log('unknown');
        break;
}

/*
    S2 | EP27: Statements vs Expressions

    Expression: Piece of code that produces a value 
                Can be used in template literals
                -> 3 + 4 
                -> true && false
    
    Statements: Bigger piece of code that when executed doesn't produce a value by itself
                -> const value = 10; (has a value but doesn't produce it)
                -> If / else ''statement'' 
*/


/*
    S2 | EP28: Ternary Condition

    --> condition ? true : false
    --> can be used inside template literal
*/

// simple if / else check
const ternaryOp = 10;
ternaryOp == 10 ? console.log('Value is 10') : console.log('Value is something else');

// assignment
const userAge = 18;
let willDrink = userAge >= 18 ? "I'll have wine 🍷" : "Water 💧";
console.log(willDrink); // outputs Wine 🍷

// template literal
console.log(`I like to drink ${userAge >= 18 ? "Wine 🍷" : "Water 💧"}`)