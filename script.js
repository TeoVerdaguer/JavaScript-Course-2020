/**************
* Boolean Logic
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
* The ternary Operator
**************/

/*
var firstName = 'John';
var age = 14;

age > 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age > 18 ? 'beer' : 'juice';
console.log(drink);

/**************
* The Switch Statement
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
* Truthy and Falsy values and equality operators
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
* Coding challenge 2 - Basketball Games
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
* Functions
**************/
/*
function calculateAge (birthYear){
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log('John\'s age: ' + ageJohn);
console.log('Mike\'s age: ' + ageMike);
console.log('Jane\'s age: ' + ageJane);

function yearsUntilRetirement(year, firstName) {
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
*/

/**************
* CODE CHALLENGE 3
**************/

/*
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

function calculateTip(bill){
  if (bill < 50) {
    var tip = bill * 0.2;
  } else if (bill > 50 && bill < 200) {
    var tip = bill * 0.15;
  } else {
    var tip = bill * 0.1;
  }
  return tip;
}

var tips = [calculateTip(bill1), calculateTip(bill2), calculateTip(bill3)];
var bills = [ (bill1 + tips[0]), (bill2 + tips[1]), (bill3 + tips[2])];

console.log(tips);
console.log(bills);
*/

/**************
* Objects and properties
**************/
/*
// Object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'
console.log(jane);
*/

/**************
* Objects and methods
**************/
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/**************
* CODE CHALLENGE 4
**************/

// fullname mass height

// method to calc bmi - save bmi to object and return bmi too

// log highest bmi (name and bmi) *consider they can have the same bmi
/*
var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calculateBmi(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calculateBmi(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calculateBmi();
john.calculateBmi();

if (john.bmi > mark.bmi) {
  console.log('John has a higher BMI than Mark, it\'s: ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log('Mark has a higher BMI than John, it\'s: ' + mark.bmi);
} else {
  console.log('Mark and John have the same BMI.');
}
*/

