/*
    Steven wants to build a very simple tip calculator for whenever he goes eating in a
    restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
    300. If the value is different, the tip is 20%.

    Test data:
        - Test for bill values 275, 40 and 430
*/

// Test Data
const billOne = 275;
const billTwo = 40;
const billThree = 430;

/*
    1.  Calculate the tip, depending on the bill value. Create a variable called 'tip' for
        this & don't use an if/else statement.
*/
console.log("\n--- Task 1 ---\n");

let tipOne = billOne >= 50 && billOne <= 300 ? (billOne * 0.15) : (billOne * 0.2);
let tipTwo = billTwo >= 50 && billTwo <= 300 ? (billTwo * 0.15) : (billTwo * 0.2);
let tipThree = billThree >= 50 && billThree <= 300 ? (billThree * 0.15) : (billThree * 0.2);
console.log(tipOne);
console.log(tipTwo);
console.log(tipThree);


/*
    2.  Print a string to the console containing the bill value, the tip, and the final value
        (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
        316.25”
*/
console.log("\n--- Task 2 ---\n");

console.log(`The bill was ${billOne}, the tip was ${billOne >= 50 && billOne <= 300 ? (billOne * 0.15) : (billOne * 0.2)} and the total value is: ${tipOne + billOne}`)
console.log(`The bill was ${billTwo}, the tip was ${tipTwo} and the total value is: ${billTwo + tipTwo}`);
console.log(`The bill was ${billThree}, the tip was ${tipThree} and the total value is: ${billThree + tipThree}`);