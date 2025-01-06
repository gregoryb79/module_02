let leg1 = undefined;
do{
    leg1 = Number(prompt("Enter Leg 1 length of a right angle triangle."));
    if (isNaN(leg1)){
        alert("ERROR - This is not a valid number.");
    }
    if (leg1 === 0){
        alert("ERROR - Length can't be ZERO.");
    }
} while (isNaN(leg1) || (leg1 === 0));

let leg2 = undefined;
do{
    leg2 = Number(prompt("Enter Leg 2 length of a right angle triangle."));
    if (isNaN(leg2)){
        alert("ERROR - This is not a valid number.");
    }
    if (leg2 === 0){
        alert("ERROR - Length can't be ZERO.");
    }
} while (isNaN(leg2) || (leg2 === 0));

const hypotenuse = (leg1**2 + leg2**2)**0.5;

alert("The hypotenuse length is: " + hypotenuse + " .");