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


