
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
    let numbers: number[] = [];
    let userInput = prompt("enter number");

    while (userInput !== null){
        numbers.push(Number(userInput));
        userInput = prompt("enter number");    
    }

    for(let i = 0; i < numbers.length; i++){
        alert(numbers[i]);
    }
}

function stringsReader() {

    let strings : string [] = [];
    let userInput = prompt("enter string");

    while (userInput !== null){
        strings.push(userInput);
        userInput = prompt("enter string");    
    }

    const index = Number(prompt("enter number"));

    alert(`String number ${index} is ${strings[index-1]}.`);

}

function getArray(maxLength : number): number[] {
    let numbers: number[] = [];

    for (let i = 0; i < maxLength; i++){
        let userInput = prompt("enter number");
        if (userInput === null) {
            break;
        }
        numbers[i] = Number(userInput);
    }

    return numbers;

}

function bubbleSort(array: number[]): number[] {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
        }
      }
    }
    return array;
  }

function sortedArray(){

    let numbers: number[] = [];
        
    numbers = getArray(10);

    numbers = bubbleSort(numbers);

    alert(numbers);

}

function getMedian() {
    let numbers: number[] = [];
    const arraySize = Number(prompt("Enter the number of numbers"));
    numbers = getArray(arraySize);
    numbers = bubbleSort(numbers);

    if ((arraySize % 2) === 0) {
        const median = (numbers[arraySize/2-1] + numbers[arraySize/2]) / 2;
    } else {
        const median = numbers[(arraySize-1)/2];
    }

    alert(`The median of ${numbers} is:\n${median}.`);

}

function getTwoSamllest(array: number[]): number[] {

    array = bubbleSort(array);
    let twoSmallest: number[] = [];
    twoSmallest[0] = array[0];
    twoSmallest[1] = array[1];

    return twoSmallest;

}

function testGetTwoSmallest() {

    alert(getTwoSamllest([55 32 98 5 33 696 22 1]));//1 and 5 expected
}
//stringsReader();

//sortedArray();

//getMedian();

// function testGetTwoSmallest() {

//     alert(getTwoSamllest([55 32 98 5 33 696 22 1]));//1 and 5 expected
// }

// testGetTwoSmallest();


