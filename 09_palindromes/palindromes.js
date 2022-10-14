const palindromes = function (string) {
    // First let's remove punctuation from the string
    string = getLettersOnly(string);
    let reversedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return string === reversedString;
};

function getLettersOnly (anyString) {
    let nonLetters = [" ", "/", "^", "[", ".", ",", ":", "!", "?", "]"];
    let string = anyString.toLowerCase();

    for (let i = 0; i < nonLetters.length; i++) {
        // If the current non letter is present in string
        if (string.indexOf(nonLetters[i]) >= 0) {
            let selectedIndex = string.indexOf(nonLetters[i]);

            // Remove that particular character
            string = string.slice(0,selectedIndex) + string.slice(selectedIndex + 1);
        }

        // If this nonLetter remains, continue to remove it
        if (string.indexOf(nonLetters[i]) !== -1) {
            i--;
        }
    }
    return string;
}

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
