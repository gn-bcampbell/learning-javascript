'use strict';

/*
    Julia and Kate are still studying dogs, and this time they are studying if dogs are
    eating too much or too little.
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

/*
    1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
    the recommended food portion and add it to the object as a new property. Do
    not create a new array, simply loop over the array. Forumla:
    recommendedFood = weight ** 0.75 * 28. (The result is in grams of
    food, and the weight needs to be in kg)
*/

dogs.forEach((dog) => dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28))
console.log(dogs);

/*
    2. Find Sarah's dog and log to the console whether it's eating too much or too
    little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
    the owners array, and so this one is a bit tricky (on purpose) 🤓
*/
const sarahsDog = dogs.find((dogs) => dogs.owners.includes('Sarah'))
console.log(sarahsDog);

const calculateFoodIntake = (dog) => {
    if (dog.curFood > dog.recommendedFood)
        dog.foodIntake = 'Too much'

    if (dog.curFood < dog.recommendedFood)
        dog.foodIntake = 'Too little'

    if (dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10))
        dog.foodIntake = 'Ok'
}

calculateFoodIntake(sarahsDog)
console.log(`Sarah's dog is eating: ${sarahsDog.foodIntake}`);


/*
    3. Create an array containing all owners of dogs who eat too much
    ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
    ('ownersEatTooLittle'). 
*/
dogs.forEach((dog) => {
    calculateFoodIntake(dog);
})

const ownersEatTooMuch = dogs.filter(x => x.foodIntake === 'Too much').flatMap((dogs) => dogs.owners)
const ownersEatTooLittle = dogs.filter(x => x.foodIntake === 'Too little').flatMap((dogs) => dogs.owners)
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

/*
    4. Log a string to the console for each array created in 3., like this: "Matilda and
    Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
    too little!"
*/
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

/*
    5. Log to the console whether there is any dog eating exactly the amount of food
    that is recommended (just true or false)
*/
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood))

/*
    6. Log to the console whether there is any dog eating an okay amount of food 
    (just true or false)
*/
console.log(dogs.some((dog) => dog.foodIntake === 'Ok'))

/*
    7. Create an array containing the dogs that are eating an okay amount of food (try
    to reuse the condition used in 6.)
*/
const okDogs = dogs.filter((dog) => dog.foodIntake === 'Ok')
console.log(okDogs);


/*
    8. Create a shallow copy of the 'dogs' array and sort it by recommended food
    portion in an ascending order (keep in mind that the portions are inside the
    array's objects 😉)
*/

const foodSort = dogs.flatMap((dogs) => dogs.recommendedFood).sort((a, b) => a - b) //extract values and sort
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood) //shallow copy of array and sort

console.log(foodSort);
console.log(dogsSorted);