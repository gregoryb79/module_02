alert("Enter numbers");

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


let numbers: number[] = [];
let userInput = prompt("enter number");

while (userInput !== null){
     numbers.push(Number(userInput));
     userInput = prompt("enter number");    
}

for(let i = 0; i < numbers.length; i++){
    alert(numbers[i]);
}