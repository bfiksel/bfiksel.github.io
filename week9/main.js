function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function updateComparisonResult() {
  var num1 = document.getElementById("number1").value
  var num2 = document.getElementById("number2").value
  var resultString = resultString = greaterNum(num1, num2) + " is greater.";
  document.getElementById("result").textContent = resultString;
}

var person1 = {
	firstName:"John", 
	lastName:"Doe", 
	age:50, 
	eyeColor: "blue", 
getName:function() {
	return this.firstName + " " + this.lastName;;}
}

function getName() {

}

var cat = { name: "Teru", weight: 10, age: 1.5};

localStorage.setItem("myCat", JSON.stringify(cat));

JSON.parse(localStorage.getItem("myCat"));
