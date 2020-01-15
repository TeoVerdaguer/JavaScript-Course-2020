/**************
 Boolean Logic
**************/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstname + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/**************
 The ternary Operator
**************/

/*
var firstName = 'John';
var age = 14;

age > 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age > 18 ? 'beer' : 'juice';
console.log(drink);

/**************
 The Switch Statement
**************/

/*
var job = 'instructor';

switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an Uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
  default:
    console.log(firstName + ' does something else.');
}
*/


/**************
 Truthy and Falsy values and equality operators
**************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: Non falsy values

/*
var height;

if (height || height === 0) {
  console.log('the variable is defined.');
} else {
  console.log('the variable is NOT defined.');
}

height = 23;
// Equality operators
if (height == '23') {
  console.log('The == operator does type coercion!')
}
*/

/**************
 Coding challenge 2 - Basketball Games
**************/
/*
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

/**************
 Functions
**************/

fuction calculateAge (birthYear){
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log('John\'s age: ' + ageJohn);
console.log('Mike\'s age: ' + ageMike);
console.log('Jane\'s age: ' + ageJane);

fuction yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  
  if (retirement > 0) {
  console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'John');
yearsUntilRetirement(1969, 'Jane');

console.log('hola');
