const leapYears = function(year) {

    // leap years are divisible by 4. 
    //BUT, if they are multiples of 100
    // they are only leap years if they are divisible by 400

    let isLeapYear;

    // if year is divisible by 4, but is not multiple of 100
    if (year % 4 === 0 && year % 100 !== 0) {
        isLeapYear = true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
