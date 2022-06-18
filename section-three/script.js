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