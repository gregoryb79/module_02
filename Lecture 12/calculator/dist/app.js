alert("This is a CALCULATOR");
var variabel1 = Number(prompt("Please enter first Number"));
var operator = prompt("Please enter the action you want '+' or '-' or '/' or '*'.");
var variabel2 = Number(prompt("Please enter first Number"));
if (operator === "+") {
    alert(variabel1 + variabel2);
}
else if (operator === "-") {
    alert(variabel1 - variabel2);
}
else if (operator === "/") {
    alert(variabel1 / variabel2);
}
else if (operator === "*") {
    alert(variabel1 * variabel2);
}
else {
    alert("ERROR");
}
