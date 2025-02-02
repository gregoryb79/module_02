// alert("This is a CALCULATOR");
// let variable1 = Number(prompt("Please enter first Number"));
// if (isNaN(variable1)){
//     alert("ERROR - this is not a number!");
//     throw "ERROR - this is not a number!";
// }
// let operator = prompt("Please enter the action you want '+' or '-' or '/' or '*'.");
// if (!((operator === "+") || (operator === "-") || (operator === "/") || (operator === "*"))){
//     alert("ERROR - illegal operator!");
//     throw "ERROR - illegal operator!";
// }
// let variable2 = Number(prompt("Please enter second Number"));
// if (isNaN(variable2)){
//     alert("ERROR - this is not a number!");
//     throw "ERROR - this is not a number!";
// } else if ((operator === "/") && (variable2 === 0)){
//     alert("ERROR - division by 0!");
//     throw "ERROR - division by 0!";
// }
// if (operator === "+"){
//     alert(variable1 + variable2);
// } else if (operator === "-"){
//     alert(variable1 - variable2);
// } else if ((operator === "/") && (variable2 !== 0)){
//     alert(variable1 / variable2);
// } else if (operator === "*"){
//     alert(variable1 * variable2);
// } else {
//     alert("ERROR"); 
// }
console.log("Hello");
var output = "0";
var result = null;
var operator = "";
var waitingForNumber = false;
var calcOutput = document.querySelector("#calcOutput");
document.querySelectorAll(".calcButton").forEach(function (button) {
    button.addEventListener("click", function (event) {
        var _a;
        console.log("Button clicked: " + button.textContent);
        var calcInput = (_a = button.textContent) !== null && _a !== void 0 ? _a : "";
        console.log("calcInput = " + calcInput);
        var inputNumber = Number(calcInput);
        if (calcInput === "AC") {
            output = "0";
            result = null;
            operator = "";
            waitingForNumber = false;
            console.log("AC input all parameters reset, and return.");
            if (!calcOutput) {
                console.error("could not find the calcOutput element");
                return;
            }
            else {
                calcOutput.innerText = output;
            }
            return;
        }
        if (!isNaN(inputNumber) || (calcInput === ".")) {
            if ((output !== "0") && (!waitingForNumber)) {
                output = output + calcInput;
            }
            else {
                output = calcInput;
                waitingForNumber = false;
            }
        }
        else {
            waitingForNumber = true;
            var currNum = Number(output);
            console.log("currNum = " + currNum);
            if (isNaN(currNum)) {
                console.error("numA is NaN");
                return;
            }
            if (result === null) {
                result = currNum;
                console.log("result = " + result + " from null");
                operator = calcInput;
                console.log("operator = " + operator);
                //output = "0";
            }
            else {
                switch (operator) {
                    case "+":
                        result = result + currNum;
                        console.log("result = " + result);
                        break;
                    case "-":
                        result = result - currNum;
                        console.log("result = " + result);
                        break;
                    case "/":
                        if (currNum === 0) {
                            result = null;
                            console.log("result = " + result);
                            break;
                        }
                        else {
                            result = result / currNum;
                            console.log("result = " + result);
                        }
                        break;
                    case "x":
                        result = result * currNum;
                        console.log("result = " + result);
                        break;
                    case "=":
                        console.log("result = " + result);
                        break;
                    default:
                        console.error("unknown input");
                }
                if (result != null) {
                    output = result.toString();
                }
                else {
                    output = "ERROR";
                }
                operator = calcInput;
            }
        }
        if (!calcOutput) {
            console.error("could not find the calcOutput element");
            return;
        }
        else {
            calcOutput.innerText = output;
        }
    });
});
