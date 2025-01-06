alert("let's check if your triangle is a valid right triangle");
var side1 = Number(prompt("Please enter first side length"));
var side2 = Number(prompt("Please enter second side length"));
var hypotenous = Number(prompt("Please enter hypotenous length"));
if ((Math.pow(side1, 2) + Math.pow(side2, 2)) === (Math.pow(hypotenous, 2))) {
    alert("This is a right angle triangle.");
}
else {
    alert("This is NOT a right angle triangle.");
}
