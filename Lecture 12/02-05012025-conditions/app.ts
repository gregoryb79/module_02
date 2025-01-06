alert("let's check if your triangle is a valid right triangle");

let side1 = Number(prompt("Please enter first side length"));
let side2 = Number(prompt("Please enter second side length"));
let hypotenous = Number(prompt("Please enter hypotenous length"));

if ((side1**2 + side2**2) === (hypotenous**2)){
    alert("This is a right angle triangle.");
} else{
    alert("This is NOT a right angle triangle.");
}


