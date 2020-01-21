/**************
 * CODING CHALLENGE 1
 **************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/**************
 * If / else statements
 **************/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/

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
 * CODING CHALLENGE 3
 **************/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

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
 * CODING CHALLENGE 4
 **************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

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

/**************
 * Loops and Iteration
 **************/
/*
// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.lenght) {
  console.log(john[i]);
  i++;
}
*/

// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}


// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/**************
 * CODING CHALLENGE 5
 **************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTip() {
    this.tips = [];
    this.finalAmounts = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add results to arrays
      this.tips[i] = bill * percentage;
      this.finalAmounts[i] = bill + bill * percentage;
    }
  }
}; 


var mark = {
  fullName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  calcTip() {
    this.tips = [];
    this.finalAmounts = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add results to arrays
      this.tips[i] = bill * percentage;
      this.finalAmounts[i] = bill + bill * percentage;
    }
  }
}; 


// Do the calculations
john.calcTip();
mark.calcTip();

john.average = calcAvgTip(john.tips);
mark.average = calcAvgTip(mark.tips);

if (john.average > mark.average) {
  console.log(john.fullName + '\s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\s family pays higher tips, with an average of $' + mark.average);
} 
