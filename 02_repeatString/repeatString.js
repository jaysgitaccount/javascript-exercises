let string = "testy";
let num = -1;

const repeatString = function(string, num) {
    let newString = "";

    for (let i = 1; i <= num; i++) {
        newString += string;
    }

    if (num < 0) {
        newString = 'ERROR';
    }

    return newString;
};

console.log(repeatString(string,num));

// Do not edit below this line
module.exports = repeatString;
