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

