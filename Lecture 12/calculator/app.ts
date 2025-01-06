alert("This is a CALCULATOR");

let variabel1 = Number(prompt("Please enter first Number"));
let operator = prompt("Please enter the action you want '+' or '-' or '/' or '*'.");
let variabel2 = Number(prompt("Please enter first Number"));

if (operator === "+"){
    alert(variabel1 + variabel2);
} else if (operator === "-"){
    alert(variabel1 - variabel2);
} else if (operator === "/"){
    alert(variabel1 / variabel2);
} else if (operator === "*"){
    alert(variabel1 * variabel2);
} else {
    alert("ERROR"); 
}


