/*
    S3 | EP32: Strict Mode

    --> Forbids certain things
    --> Creates visible errors in dev console
*/
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) undeclaredVariable = true; // results in not defined error

if (hasDriversLicense) console.log('I can drive.');

const interface = 'Audio' //potential javascript reserved word
