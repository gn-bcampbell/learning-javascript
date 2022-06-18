/* 
    There are two gymnastics teams, Dolphins and Koalas. They compete against each
    other 3 times. The winner with the highest average score wins a trophy!
*/

// Test Data
const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

const dolphinsBonus1 = [97, 112, 101];
const koalaBonus1 = [109, 95, 123];

const dolphinsBonus2 = [97, 112, 101];
const koalaBonus2 = [109, 95, 106];

/*
    1.  Calculate the average score for each team, using the test data below
*/

function calculateAverage(teamScores) {
    let teamAverage = 0;

    for (let i = 0; i < teamScores.length; i++) {
        teamAverage += teamScores[i];
    }

    return teamAverage / teamScores.length;
}

console.log("\n--- Test 1 ---\n");
// data set 1
console.log(calculateAverage(dolphins));
console.log(calculateAverage(koalas));
// bonus set 1
console.log(calculateAverage(dolphinsBonus1));
console.log(calculateAverage(koalaBonus1));
// bonus set 2
console.log(calculateAverage(dolphinsBonus2));
console.log(calculateAverage(koalaBonus2));

/*
    2.  Compare the team's average scores to determine the winner of the competition,
        and print it to the console. Don't forget that there can be a draw, so test for that
        as well (draw means they have the same average score)
*/

function determineWinner(dolphins, koalas) {
    const dolphinsAvg = calculateAverage(dolphins);
    const koalasAvg = calculateAverage(koalas);

    if (dolphinsAvg > koalasAvg) {
        console.log("Dolphins win");
    }

    if (koalasAvg > dolphinsAvg) {
        console.log("Koalas win");
    }

    if (koalasAvg === dolphinsAvg) {
        console.log("Draw");
    }
}

console.log("\n--- Test 2 --- \n");
// data set 1
determineWinner(dolphins, koalas);
// bonus set 1
determineWinner(dolphinsBonus1, koalaBonus1);
// bonus set 2
determineWinner(dolphinsBonus2, koalaBonus2);

/*
    3.  Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
        team only wins if it has a higher score than the other team, and the same time a
        score of at least 100 points. Hint: Use a logical operator to test for minimum
        score, as well as multiple else-if blocks

    4.  Bonus 2: Minimum score also applies to a draw! So a draw only happens when
        both teams have the same score and both have a score greater or equal 100
        points. Otherwise, no team wins the trophy
*/

function determineWinnersOver100(dolphins, koalas) {
    const dolphinsAvg = calculateAverage(dolphins);
    const koalasAvg = calculateAverage(koalas);

    if (dolphinsAvg <= 100 && koalasAvg <= 100) {
        return console.log("Scores over 100, no winners.");
    }

    if ((dolphinsAvg > koalasAvg) && dolphinsAvg >= 100) {
        return console.log("Dolphins win");
    }

    if ((koalasAvg > dolphinsAvg) && koalasAvg >= 100) {
        return console.log("Koalas win");
    }

    if (koalasAvg === dolphinsAvg) {
        return console.log("Draw, both win.");
    }
}

console.log("\n--- Test 3 & 4 --- \n");
// data set 1
determineWinnersOver100(dolphins, koalas);
// bonus set 1
determineWinnersOver100(dolphinsBonus1, koalaBonus1);
// bonus set 2
determineWinnersOver100(dolphinsBonus2, koalaBonus2);