const reverseString = function(input) {
    let returnString = "";
    for(let i = input.length; i >= 0; i--){
        returnString += input.charAt(i);
    }

    return returnString;
}

module.exports = reverseString
