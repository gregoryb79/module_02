
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

function getArray(){
    let numbers: number[] = [];
    let userInput = prompt("enter number");
    
    while (userInput !== null) {
        userInput = prompt("enter number"); 
        numbers[numbers.length] = Number(userInput);
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
    let userInput = prompt("enter number");
    
    numbers = getArray();

    numbers = bubbleSort(numbers);


    alert(numbers);

}

//stringsReader();

sortedArray();

