'use strict';

/*
    S9 | EP 103: Destructuring Arrays

    Unpack values from array or object into separate variables
*/
console.log(`---- Destructuring Arrays ----`);

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

/*
    S9 | EP 104: Destrucuring Objects

    MVP: Object variables created must match the name of the object properties being destructured
*/
console.log(`---- Destructuring Objects ----`);

const restaurantWithHours = {
  name: 'Classicao Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (startItem, mainItem) {
    return [this.starterMenu[startItem], this.mainMenu[mainItem]];
  },

  // destructure directly in parameters
  // parameters are wrapped in object {} and match object properties
  // set default values if property is not sent (time)
  orderDelivery: function ({ time = '20:00', address, mainIndex, startIndex }) {
    console.log(
      `Order received:
      Starter: ${this.starterMenu[startIndex]}, 
      Main: ${this.mainMenu[mainIndex]}. 
      Time: ${time}. 
      Delivery Location: ${address} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your pasta, made with: ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
};

// call function with an object that will be destructured when passed in
restaurantWithHours.orderDelivery({
  time: '22:30',
  address: '123 Fake Street',
  mainIndex: 2,
  startIndex: 1,
});

// call function without all expected parameters - function sets default values
restaurantWithHours.orderDelivery({
  //   time: '22:30',
  address: '123 Fake Street',
  mainIndex: 2,
  startIndex: 1,
});

// Create an object using {}
// then provide variable names that exactly match the property names we want to retrieve from the object
const { name, openingHours, categories } = restaurantWithHours;
console.log(name, categories, openingHours);

// if you want the variable names to differ from the property names, use the :
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurantWithHours;
console.log(restaurantName, hours, tags);

// Setting default values
const { menu: menuItem = "I'm a default value", starterMenu: starters = [] } =
  restaurantWithHours;
console.log(menuItem); // doesn't exist, returns default value
console.log(`Starters:`, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

/*
 here we want to change 'a' and 'b'
 we cannot declare new 'a' 'b' variables because they already exist
 we cannot start a new line of code like {a,b = obj} becase starting a line with {} -> JS expects a code block
 we CAN wrap that in parantheses to resolve this
 */
({ a, b } = obj);
console.log(a, b); // now mutates 111 to 23, and 999 to 7

// Nested Objects
const { openingHours: openingHours2 } = restaurantWithHours;
const {
  fri: { open: o, close: c }, //exact name of object properties
} = openingHours2;
console.log(o, c);

/*
    S9 | EP 105: Spread Operator

    Unpacking / Expand array into all of its individual elements 

    Works on all 'iterables': arrays, strings, maps, sets (not objects)
*/

const arr1 = [7, 8, 9];
const badArray = [7, 8, 9, arr[0], arr[1], arr[2]]; //equivalent to spread operator
const arr2 = [1, 2, ...arr1];
console.log(arr2); //returns [1, 2, 7, 8, 9]
console.log(...arr2); //returns 1 2 7 8 9

const newMenuStart = ['Add to start', ...restaurantWithHours.mainMenu];
const newMenuEnd = [...restaurantWithHours.mainMenu, 'Add to end'];
console.log(newMenuStart);
console.log(newMenuEnd);

/*
    Spread operator is similar to destructuring 
    however, it does not create new variables
    so we can only use it in places where we'd otherwise 
    write values separated by commas.
*/

// Copy Array (Note the [] brackets are neccessary)
const mainMenuCopy = [...restaurantWithHours.mainMenu];

// Join two arrays or more together
const joinedMenus = [
  ...restaurantWithHours.starterMenu,
  ...restaurantWithHours.mainMenu,
];
console.log(joinedMenus);

const username = 'Brendan';
const letters = [...username, ' ', 'C.'];
console.log(...letters);
console.log('Name: ', ...letters);

// Build function that accepts multiple args, and use ... spread op to pass those arguments
const ingredients = [
  //   prompt("Let's make pasta. Ingredient 1"),
  //   prompt("Let's make pasta. Ingredient 2"),
  //   prompt("Let's make pasta. Ingredient 3"),
];
restaurantWithHours.orderPasta(...ingredients);
restaurantWithHours.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Objects (since 2018)
// Create a new object with all the data from original, plus additional data
// Creates a shallow copy
const newRestaurant = {
  foundingYear: 1993,
  ...restaurantWithHours,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

// Creates a shallow copy of the object
const restaurantCopy = { ...restaurantWithHours };
restaurantCopy.name = 'Ristorante Copy';
console.log(restaurantWithHours.name, restaurantCopy.name); //different because they are separate objects
