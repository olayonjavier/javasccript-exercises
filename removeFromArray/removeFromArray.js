const removeFromArray = function() {
    let inputArr = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        inputArr = removalHelp(inputArr, arguments[i]);
    }
    return inputArr;
}

function removalHelp(inputArr, itemToRemove){
    for (let i =0; i < inputArr.length; i++){
        if(itemToRemove === inputArr[i]){
            inputArr.splice(i, 1);
        }
    }
    return inputArr;
}

module.exports = removeFromArray
