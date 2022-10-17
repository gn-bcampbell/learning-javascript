'use strict';

/*
    ! S9 | EP 103: Destructuring Arrays

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
    ! S9 | EP 104: Destrucuring Objects

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
  // requires 1 ingredient, but others are optional
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
    ! S9 | EP 105: Spread Operator

    Unpacking / Expand array into all of its individual elements 

    Works on all 'iterables': arrays, strings, maps, sets (not objects)

    Spread ... operator is on the RIGHT side of = assignment operator
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

/*
    ! S9 | EP 106: Rest Pattern and Parameters

    Packs elements into an array (using ... operator on LEFT side of =)
    Takes the 'rest' of the items and packs them into an array

    SPREAD: Unpacks on right
    REST: Packs on left
*/

// -- Destructuring --

// SPREAD, because it's on RIGHT side of =
const arrSpread = [1, 2, ...[3, 4, 5]];
// REST, because on LEFT side of =
const [one, two, ...others] = [1, 2, 3, 4, 5];

console.log(arrSpread); // returns 1,2,3,4,5
console.log(one, two, others); //returns 1,2 [3,4,5]

// Get the pizza, skip the pasta, get the risotto & pack everything else into otherFood

// Arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurantWithHours.mainMenu,
  ...restaurantWithHours.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
// Get only Saturday and other days go into 'Weekdays' (objects don't need to be in order so this works)
const { sat, ...weekdays } = openingHours;
console.log(sat, weekdays);

// -- Functions --

//take arbitrary amount of numbers and add them all together
const add = function (...numbers) {
  let x = 0;
  for (let i = 0; i < numbers.length; i++) {
    x += numbers[i];
  }
  console.log(x);
};
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const temp = [23, 5, 7];
add(...temp);

// Using rest arguments in a function
restaurantWithHours.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurantWithHours.orderPizza('mushrooms');

/*
    ! S9 | EP 109: Logical Assignment Operators

    OR Assignment Operator  ||=
    Nullish Assignment Operator ??= (null or undefined)
    AND Assignment Operator &&=
*/

const rest1 = {
  name: 'Capri',
  numOfGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

// OR assignment operator
// rest1.numOfGuests = rest1.numOfGuests || 10;
// rest2.numOfGuests = rest2.numOfGuests || 10;
rest1.numOfGuests ||= 10; // assign 10 if current value is falsey
rest2.numOfGuests ||= 10;
rest1.numOfGuests ??= 10; //assign 10 if null or undefined

// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'; // assign anonymous if current value is truthy
console.log(rest1, rest2);

/*
    ! S9 | EP 111: Looping Arrays: The for-of Loop
*/
console.log('---- EP 111 ----');

const menu = [
  ...restaurantWithHours.starterMenu,
  ...restaurantWithHours.mainMenu,
];

for (const item of menu) {
  console.log(item);
}

// return array of index and item
for (const item of menu.entries()) {
  // console.log(item);
  // console.log(menu.entries());
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// for with destructuring
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

/*
    ! S9 | EP 112: Enhanced Object Literals
*/

// using an external object inside another
const hoursObject = {
  fri: {
    open: '9am - 10pm',
  },
  sat: {
    open: '9am - 12pm',
  },
};

const tempObject = {
  name: 'salon',
  // hoursObject: hoursObject, SAME AS BELOW
  hoursObject,
};

// writing methods, doesn't need function keyword or colon
const anotherTempObject = {
  name: 'Thai Restaraunt',
  location: 'Belfast',

  getAddress(name, location) {
    return `${this.name} is located in ${this.location}`;
  },
};
console.log(anotherTempObject.getAddress());

// can compute property names instead of writing them literally
const tempWeekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const hoursObjectProp = {
  [tempWeekdays[4]]: {
    open: '9am - 10pm',
  },
  sat: {
    open: '9am - 12pm',
  },
  [`day-${tempWeekdays.length - 1}`]: {
    open: 'closed',
  },
};
console.log(hoursObjectProp);

/*
    ! S9 | EP 114: Looping Objects: Keys, Values and Entries
*/

for (const key of Object.keys(menu)) {
  console.log(key);
}

for (const key of menu.keys()) {
  console.log(key);
}

/*
    ! S9 | EP 116: Sets

    ! Ordered, unique - NOT used for retrieval ONLY used to see if a set HAS a value
*/

const newSet = new Set(['Pizza', 'Pizza', 'Rissoto', 'Garlic Bread']);
console.log(newSet);

const hasPizza = newSet.has('Pizza'); //true
newSet.size;
newSet.add('Garlic Bread'); // won't add because it's already there
newSet.delete('Garlic Bread'); // will delete value
// newSet.clear(); //removes all values from Set

// Use case -> remove duplicate values & create an array using ...
const stuff = new Set([...newSet]);

/*
    ! S9 | EP 117: Map

    ! Map values to keys, keys can have any types unlike an object
*/

const rest = new Map();

rest.set('name', 'Classico Italiano'); // add new key and element
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'); // calling set will update and return in same line meaning you can chain

rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//Get values
console.log(rest.get('name')); // classico italiano
console.log(rest.get(true)); // we are open

// Evaluate logic to get key
// result will be true or false & will return 'open' or 'close' value
// because it evaluates to rest.get(true) -> 'We are open'
const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

rest.has('categories'); //true
rest.delete(2); //deletes 'Firenze Italy'
rest.size;
// rest.clear(); // clears entire map
console.log(rest);

// use array or methods as map key
const arr3 = [1, 2];
rest.set(arr3, 'Workign');
console.log(rest.get(arr3)); //works as expected

rest.set([1, 2], 'Not working');
console.log(rest.get([1, 2])); //fails because the arrays are two different objects on the heap
