function cat(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Cat";
	this.image = "cat.png";
}

function fish(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Fish";
	this.image = "fish.png";
}

function dove(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Dove";
	this.image = "dove.png";
}

var animals = [new cat(), new fish(), new dove()];
var animals2 = [new cat(Fafsa, 10), new fish(Mom, 4), new dove(Pat, 1)];

function generateRandomIndex(maxIndex) {
	Math.floor(Math.random() * this.maxIndex); 
}