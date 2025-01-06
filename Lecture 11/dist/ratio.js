var num1 = undefined;
do {
    num1 = Number(prompt("enter number"));
    if (isNaN(num1)) {
        alert("ERROR - This is not a valid number.");
    }
} while (isNaN(num1));
var num2 = undefined;
do {
    num2 = Number(prompt("Enter non-zero number."));
    if (isNaN(num2)) {
        alert("ERROR - This is not a valid number.");
    }
    if (num2 === 0) {
        alert("ERROR - Plese enter NON-ZERO number");
    }
} while (isNaN(num2) || (num2 === 0));
alert(num1 / num2);
