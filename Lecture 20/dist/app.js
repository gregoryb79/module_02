// DOM - Document Object Model
var numberOutput = document.querySelector("#numOutput");
var numInput = document.querySelector("#numInput");
var updateNumButton = document.querySelector("#updateNumButton");
function app() {
    if (!updateNumButton) {
        console.error("Could not find the update num button");
        return;
    }
    if (!numberOutput) {
        console.error("could not find the num output element");
        return;
    }
    updateNumButton.addEventListener("click", function (e) {
        e.preventDefault();
        var inputNumber = Number(numInput === null || numInput === void 0 ? void 0 : numInput.value);
        console.log(inputNumber);
        if (!isNaN(inputNumber)) {
            numberOutput.innerText = (inputNumber * 2).toString();
        }
        else {
            console.error("no number provided");
        }
    });
}
app();
console.log("hello");
