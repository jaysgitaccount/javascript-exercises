let array = ['apple', 'orange', 'banana', 'pear', 2, 4, "2"];

const removeFromArray = function(array, ...items) {
    // For each item argument
    for (item of items) {
            // Use the index of the argument to remove
            let removedIndex = array.indexOf(item);

                console.log(array.indexOf(item));
                console.log("removedindex: " + removedIndex);
            if (removedIndex >= 0) {
                array.splice(removedIndex, 1);
            }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
