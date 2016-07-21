var returnValue = countdown();
function fix_countdown() {
  return returnValue.; 
}

// Jim's final countdown function;
// may not be changed any more.
// (It used to work the day before!)
function countdown() {
  var ret = "";
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var number in numbers) {
    if (ret) ret += ", ";
    if (number < 10)
      number = 10 - number;
    else if (number == 10)
      number = "Zero";
    ret += number;
  }
  ret += "!";
  return ret;
  
}

console.log(fix_countdown());