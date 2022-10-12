let string = "Bobby is a dog";

const reverseString = function(string) {
    let newString = '';
    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    } 
    return newString;
};

console.log(reverseString(string));

// Do not edit below this line
module.exports = reverseString;
