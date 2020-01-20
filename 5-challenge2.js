/**************
* Coding challenge 2 - Basketball Games
**************/

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
