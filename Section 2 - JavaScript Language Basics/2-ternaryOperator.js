/**************
* The ternary Operator
**************/

var firstName = 'John';
var age = 14;

age > 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age > 18 ? 'beer' : 'juice';
console.log(drink);
