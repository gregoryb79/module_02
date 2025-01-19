const numOfnums = 5;
alert("Enter 5 numbers, I'll show you the second largest");

function getNumber (numCount : number):number{

    let UserInput = NaN;

    while (isNaN(UserInput)) {

        UserInput = Number(prompt(`Please enter ${numCount} Number`);
        if (isNaN(UserInput)){
        alert("ERROR - this is not a number!");
        }
    }

    return UserInput;
        
}

let MaxNum = -Infinity;
let secondMax = MaxNum;

for (i=0; i<numOfnums; i++){

    const UserInput = getNumber(i+1);

    if (UserInput > MaxNum) {
        secondMax = MaxNum;
        MaxNum = UserInput;
    } else if (UserInput > secondMax) {
        secondMax = UserInput;
    }
}

alert("The largest number is: " + MaxNum);
alert("The second largest number is: " + secondMax);
