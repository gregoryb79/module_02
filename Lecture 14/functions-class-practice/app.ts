
function divide (num1 : number, num2: number){
    if (num2 !== 0){
        alert("Result of division is: " + (num1/num2));
    } else{
        alert("ERROR! Can't divide by zero.");
    }
}

function capitalize (inputString: string): string {

    const outputString = inputString.slice(0, 1).toUpperCase() + inputString.slice(1);
    return outputString;

}

function superGreet (firstName : string, lastName : string) {

    alert ("Hello, " + capitalize(firstName) + " " + capitalize(lastName)+"!");

}

function greetFullname (fullName : string){

    const firstName = fullName.slice(0,fullName.indexOf(" "));
    const lastName = fullName.slice(fullName.indexOf(" ")+1);

    alert ("Hello, " + capitalize(firstName) + " " + capitalize(lastName) + "!");

}

//Calling Functions

divide(21,3);

alert(capitalize("hello"));

superGreet("inigo","montoya");

greetFullname("montoya inigo");
