const caesar = function(message, shiftByNum) {
    // NON LETTER ASCII values: 31-64, 91-96, 123-127
    // capitals 65-90, lowercase 97-122

    let newMessage = "";

    for (let i = 0; i < message.length; i++) {
        let value = message.charCodeAt(i);

        newMessage += String.fromCharCode(shiftLetter(value, shiftByNum));

        console.log("newMessage: " + newMessage);
    }
    return newMessage;
};

caesar("Hello, World!", 75);

function shiftLetter(value, shiftByNum) {
    // If it's a letter, shift it, else don't
    if (getType(value) !== null) {
        let min = getType(value).min;
        let max = getType(value).max;

        // % (max - min + 1) because max-min is 25 but there are 26 letters
        // min - 1 because we always need to include the 1st char
        // So we need to compensate for this exclusion
        if ( (value + shiftByNum) > max ) {          
            result = min - 1 + ((value + shiftByNum) - max) % (max - min + 1);
        } else if ( (value + shiftByNum) < min ) {
            result = max - ( (min - 1) - (value - Math.abs(shiftByNum)) ) % (max - min + 1);
        } else {
            result = value + shiftByNum;
        }
        return result;
    }
    return value;
}

function getType(value) {
    // Check if value is uppercase, lowercase, or not a letter
    const range = [
        {
            min : 65,
            max : 90
        },
        {
            min : 97,
            max : 122
        }
    ];

    for (i = 0; i < range.length; i++) {
        if (value >= range[i].min && value <= range[i].max) {
            return range[i];
        }
    }
    return null;
}

// Do not edit below this line
module.exports = caesar;
