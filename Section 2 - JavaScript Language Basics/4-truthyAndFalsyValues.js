/**************
* Truthy and Falsy values and equality operators
**************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: Non falsy values


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