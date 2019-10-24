function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function updateComparisonResult() {
  var num1 = parseInt(document.getElementById("number1").value)
  var num2 = parseInt(document.getElementById("number2").value)
  var resultString;
  if (isNaN(num1) || isNaN(num2)) {
    resultString = "The input is not a number.";
  } else {
    resultString = greaterNum(num1, num2) + " is greater.";
  }
  document.getElementById("result").textContent = resultString;
}
