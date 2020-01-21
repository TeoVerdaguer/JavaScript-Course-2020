/**************
* CODING CHALLENGE 2
**************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// John's team Scores
var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 103;

// Mike's team scores
var mikeTeamScore1 = 116;
var mikeTeamScore2 = 94;
var mikeTeamScore3 = 123;

// Mary's team score
var maryTeamScore1 = 97;
var maryTeamScore2 = 134
var maryTeamScore3 = 105

// average scores
var avgScoreJohn = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;
var avgScoreMike = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
var avgScoreMary = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;
console.log('john' + avgScoreJohn);
console.log('mike' + avgScoreMike);
console.log('mary' + avgScoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
