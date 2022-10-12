'use strict';

/*
    S9 | EP 103: Destructuring Arrays

    Unpack values from array or object into separate variables
*/
const restaurant = {
  name: 'Classicao Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissotto'],

  order: function (startItem, mainItem) {
    return [this.starterMenu[startItem], this.mainMenu[mainItem]];
  },
};

// destructuring assignment - creating 3 variables from the elements in 'arr'
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// only take subset (first two elements: Italian Pizzeria)
const [cat1, cat2] = restaurant.categories;
console.log(cat1, cat2);

// skip certain elements: Italian Vegetarian
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);
// is the equivalent to;
// const temp = main;
// main = secondary;
// secondary = temp;

// Receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
console.log(nested);

const [n1, n2, n3] = nested;
console.log(n1, n2, n3); // returns 2, 4, [5,6]

// access nested array by destructuring during destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); //returns 2, 5, 6

// set default values (useful when length of array is unknown)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // r returns 1 because of default value
