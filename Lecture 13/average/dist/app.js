alert("Enter numbers, I'll show you the average");
var NumberOfNumbers = Number(prompt("Please enter how many numbers would you like to average."));
if (isNaN(NumberOfNumbers)) {
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}
var SummOfNumbers = 0;
var CurrNumber = 0;
for (var i = 0; i < NumberOfNumbers; i++) {
    CurrNumber = Number(prompt("Enter number #" + (i + 1)));
    if (isNaN(CurrNumber)) {
        alert("ERROR - this is not a number!");
        throw "ERROR - this is not a number!";
    }
    SummOfNumbers = SummOfNumbers + CurrNumber;
}
alert("The average is: " + (SummOfNumbers / NumberOfNumbers));
