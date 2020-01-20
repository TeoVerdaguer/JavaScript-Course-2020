/**************
* CODE CHALLENGE 3
**************/

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