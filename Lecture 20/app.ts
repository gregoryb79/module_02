// DOM - Document Object Model

const numberOutput: HTMLSpanElement | null = document.querySelector("#numOutput");
const numInput: HTMLInputElement | null = document.querySelector("#numInput");
const updateNumButton: HTMLButtonElement | null = document.querySelector("#updateNumButton");

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

        const inputNumber = Number (numInput?.value);
        console.log(inputNumber);
        

        if (!isNaN(inputNumber)){
            numberOutput.innerText = (inputNumber * 2).toString();
        } else {
            console.error("no number provided");
        }
    });
}

app();

console.log("hello");
