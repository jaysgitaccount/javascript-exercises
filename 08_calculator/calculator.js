const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let result = 0;

  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
	return result;
};

const multiply = function(array) {
  let result = 1;

  for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
	return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let result = 1;

  for (i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
