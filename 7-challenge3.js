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