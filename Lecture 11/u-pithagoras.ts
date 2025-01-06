let side1: number;
do{
    side1 = Number(prompt("Enter side 1 length of a right angle triangle."));
    if (isNaN(side1)){
        alert("ERROR - This is not a valid number.");
    }
    if (side1 === 0){
        alert("ERROR - Length can't be ZERO.");
    }
} while (isNaN(side1) || (side1 === 0));

let side2: number;
do{
    side2 = Number(prompt("Enter side 2 length of a right angle triangle."));
    if (isNaN(side2)){
        alert("ERROR - This is not a valid number.");
    }
    if (side2 === 0){
        alert("ERROR - Length can't be ZERO.");
    }
} while (isNaN(side2) || (side2 === 0));

let hyp: number;
hyp = (side1**2 + side2**2)**0.5;


let result: number;
result = 0;

if (side1 > side2){
    result = (side1**2 - side2**2)**0.5;
}else if (side2 > side1){
    result = (side2**2 - side1**2)**0.5;
}

alert("The hypotenuse length is: " + hyp + " .");
if (side1 !== side2){
    alert("The second leg length is " + result + " .");
}
