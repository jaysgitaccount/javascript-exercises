const ftoc = function(fahrenheit) {
  let result = (fahrenheit - 32) * (5/9);
  console.log(result);
  
  // round to 1 decimal place
  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function(celsius) {
  let result = (celsius * 1.8) + 32;

  result = Math.round(result * 10) / 10;
  return result;
};

console.log(ftoc(32));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
