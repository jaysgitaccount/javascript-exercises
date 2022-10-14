const fibonacci = function(num) {
    // Fibonacci is the previous 2 numbers added
    if (num < 0 || isNaN(num)) {
        // isNaN accepts strings as numbers, which is required here
        // otherwise I would use typeof instead
        return 'OOPS';
    } else {
        let array = [0, 1];
        // generate Fibonacci numbers
        for (i = 1; i <= num - 1; i++) {
            let sum = array[i - 1] + array[i];
            array.push(sum);
        }
        // generate up until the given index (because 0 is 0), then return array[num]
        return array[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
