let array = ['apple', 'orange', 'banana', 'pear'];

const removeFromArray = function(array, ...items) {
    // For each item argument
    for (item of items) {
            // Use the index of the argument to remove
            let removedIndex = array.indexOf(item);

            if (array[removedIndex] > 0) {
                array.splice(removedIndex, 1);
            }
    }
    return array;
};

console.log(removeFromArray(["butt", 2, 3, 4], "butt", 3));


// Do not edit below this line
module.exports = removeFromArray;
