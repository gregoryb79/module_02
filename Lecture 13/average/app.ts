alert("Enter numbers, I'll show you the average");

let SummOfNumbers = 0;
let CurrNumber = 0;
let NumberOfNumbers = 0;
let CurrNumberResponce = " ";

while (CurrNumberResponce !== null) {
    CurrNumberResponce = prompt("Enter number #"+ (NumberOfNumbers+1) + ". Press 'Cancel' to stop.");
    if (CurrNumberResponce !== null) {
        CurrNumber = Number(CurrNumberResponce);
        if (isNaN(CurrNumber)){
            alert("ERROR - this is not a number!");            
        } else {
            SummOfNumbers = SummOfNumbers + CurrNumber;
            NumberOfNumbers++;
        }
    }   
}

alert("The average is: " + (SummOfNumbers/NumberOfNumbers));
