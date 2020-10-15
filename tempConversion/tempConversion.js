const ftoc = function(input) {
  let result = ((input - 32) * 5/9);

  if(result.toString().includes(".")){
    return Math.round(result * 1e1) / 1e1;
  }else {
    return result;
  }
}

const ctof = function(input) {
  let result = (input * 9/5 + 32);
  if(result.toString().includes(".")){
    return Math.round(result * 1e1) / 1e1;
  }else{
    return result;
  }
}

module.exports = {
  ftoc,
  ctof
}
