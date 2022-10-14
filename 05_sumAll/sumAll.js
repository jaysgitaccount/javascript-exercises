const sumAll = function(startNum, endNum) {
    let sumNum;

    // if arguments are negative numbers or not numbers, don't run
    if (startNum < 0 || endNum < 0 || typeof startNum !== "number" || typeof endNum !== "number") {
        sumNum = "ERROR";
    } else {
        sumNum = 0;
        
        // to handle biggest number passed first
        let smallestNum = startNum > endNum ? endNum : startNum;
        let largestNum = startNum > endNum ? startNum : endNum;

        for (let i = smallestNum; i <= largestNum; i++) {
            console.log(i);
            sumNum += i;
            console.log("sumNum after loop: " + sumNum);
        }
    }
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
