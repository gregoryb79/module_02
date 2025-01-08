alert("This is a CALCULATOR");
var variable1 = Number(prompt("Please enter first Number"));
if (isNaN(variable1)) {
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}
var operator = prompt("Please enter the action you want '+' or '-' or '/' or '*'.");
if (!((operator === "+") || (operator === "-") || (operator === "/") || (operator === "*"))) {
    alert("ERROR - illegal operator!");
    throw "ERROR - illegal operator!";
}
var variable2 = Number(prompt("Please enter second Number"));
if (isNaN(variable2)) {
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}
else if ((operator === "/") && (variable2 === 0)) {
    alert("ERROR - division by 0!");
    throw "ERROR - division by 0!";
}
if (operator === "+") {
    alert(variable1 + variable2);
}
else if (operator === "-") {
    alert(variable1 - variable2);
}
else if ((operator === "/") && (variable2 !== 0)) {
    alert(variable1 / variable2);
}
else if (operator === "*") {
    alert(variable1 * variable2);
}
else {
    alert("ERROR");
}
