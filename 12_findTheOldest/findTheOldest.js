const findTheOldest = function(array) {
    let date = new Date();

    // get this person's lifespan in years

    for (person of array) {
        let getLifespan = function () {
            if (person.yearOfDeath === undefined) {
                // if still alive, measure from now
                return { lifeSpan: date.getFullYear() - person.yearOfBirth };
            } else {
                return { lifeSpan: person.yearOfDeath - person.yearOfBirth };
            }
        } 
        Object.assign(person,getLifespan());
    }
    // Compare and store the person with the highest lifespan
    let oldest = array[0];

    for (i = 0; i < array.length; i++) {
        if (array[i].lifeSpan > oldest.lifeSpan) {
            oldest = array[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
