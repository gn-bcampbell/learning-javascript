'use strict';

/*

Your tasks:
    Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

    1. Calculate the dog age in human years using the following formula:
        if the dog is <= 2 years old, humanAge = 2 * dogAge. 
        If the dog is > 2 years old, humanAge = 16 + dogAge * 4

    2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

    3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

    4. Run the function for both test data sets

    Test data:
        Data1: [5,2,4,1,15,8,3]
        Data2: [16,6,10,5,6,1,4]

*/

const calcAverageHumanAge = function (ages) {
  const agesCopy = ages;

  const dogAgeInHumanYears = agesCopy.map(age => {
    if (age <= 2) return age * 2;
    else return (age = 16 + age * 4);
  });
  console.log(dogAgeInHumanYears);

  const under18 = dogAgeInHumanYears.filter(x => x >= 18);
  console.log(under18);

  const averageHumanAge =
    under18.reduce((acc = 0, age) => acc + age) / under18.length;

  const averageHumanAge2 = under18.reduce(
    (acc, age, index, array) => acc + age / array.length,
    0
  );
  console.log(averageHumanAge2);

  return averageHumanAge;
};

console.log(`Average 1: ${calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])}`);
console.log(`Average 2: ${calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])}`);
