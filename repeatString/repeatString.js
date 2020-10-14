const repeatString = function(inputString, numOfRepeats) {
    let returnString = ""
    if (numOfRepeats < 0){
        return "ERROR";
    }
    for(let i = 0; i < numOfRepeats; i++){
        returnString += inputString;
    }
    return returnString;
}

module.exports = repeatString
