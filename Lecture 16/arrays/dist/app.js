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
function getArray(maxLength) {
    var numbers = [];
    for (var i = 0; i < maxLength; i++) {
        var userInput = prompt("enter number");
        if (userInput === null) {
            break;
        }
        numbers[i] = Number(userInput);
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
    numbers = getArray(10);
    numbers = bubbleSort(numbers);
    alert(numbers);
}
function getMedian() {
    var numbers = [];
    var arraySize = Number(prompt("Enter the number of numbers"));
    numbers = getArray(arraySize);
    numbers = bubbleSort(numbers);
    if ((arraySize % 2) === 0) {
        var median = (numbers[arraySize / 2 - 1] + numbers[arraySize / 2]) / 2;
    }
    else {
        var median = numbers[(arraySize - 1) / 2];
    }
    alert("The median of " + numbers + " is:\n" + median + ".");
}
function getTwoSamllest(array) {
    array = bubbleSort(array);
    var twoSmallest = [];
    twoSmallest[0] = array[0];
    twoSmallest[1] = array[1];
    return twoSmallest;
}
function testGetTwoSmallest() {
    alert(getTwoSamllest([55, 32, 98, 5, 33, 696, 22, 1])); //1 and 5 expected
}
//stringsReader();
//sortedArray();
//getMedian();
// function testGetTwoSmallest() {
//     alert(getTwoSamllest([55 32 98 5 33 696 22 1]));//1 and 5 expected
// }
// testGetTwoSmallest();
