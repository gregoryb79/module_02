// function getNumber (numCount : number):number{
//     let UserInput = NaN;
//     while (isNaN(UserInput)) {
//         UserInput = Number(prompt(`Please enter ${numCount} Number`);
//         if (isNaN(UserInput)){
//         alert("ERROR - this is not a number!");
//         }
//     }
//     return UserInput;
// }
function numbersToArray() {
    var numbers = [];
    var userInput = prompt("enter number");
    while (userInput !== null) {
        numbers.push(Number(userInput));
        userInput = prompt("enter number");
    }
    for (var i = 0; i < numbers.length; i++) {
        alert(numbers[i]);
    }
}
function stringsReader() {
    var strings = [];
    var userInput = prompt("enter string");
    while (userInput !== null) {
        strings.push(userInput);
        userInput = prompt("enter string");
    }
    var index = Number(prompt("enter number"));
    alert("String number " + index + " is " + strings[index - 1] + ".");
}
function getArray() {
    var numbers = [];
    var userInput = prompt("enter number");
    while (userInput !== null) {
        userInput = prompt("enter number");
        numbers[numbers.length] = Number(userInput);
    }
    return numbers;
}
function bubbleSort(array) {
    var _a;
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1]; // Swap
            }
        }
    }
    return array;
}
function sortedArray() {
    var numbers = [];
    var userInput = prompt("enter number");
    numbers = getArray();
    numbers = bubbleSort(numbers);
    alert(numbers);
}
//stringsReader();
sortedArray();
