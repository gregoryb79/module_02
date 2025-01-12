let StatType = 0;
let Answer = "";
while (!((StatType === 1) || (StatType === 2)))  {
    Answer = prompt("Student Statistics. Do you want '1' - Best Grade or '2' - Worst Grade?");
    if (Answer === null) {
        alert("Looks like you don't want any grade. Good Day!");
        throw "Canceled by the user.";
    }
    StatType = Number(Answer);
    if (!((StatType === 1) || (StatType === 2))){
        alert("ERROR - wrong input, it must be 1 or 2!");    
    } 
}

let MinGrade = 100;
let MaxGrade = 0;
let StudentName = "";
let NameAnswer = "";
while (Answer !== null){
    Answer = prompt("Enter Student's Full Name. Cancel to stop.");
    if (Answer === null) {
        break;
    }
    
    NameAnswer = Answer;
       
    let CurrGrade = -1;
    while ((CurrGrade < 0) || (CurrGrade > 100)){
        Answer = prompt("Enter Student's grade. Cancel to stop.");
        if (Answer === null) {
            break;
        }

        CurrGrade = Number(Answer);
        if (isNaN(CurrGrade)){
            alert("ERROR! This is not a number.");
        } else if ((CurrGrade < 0) || (CurrGrade > 100)){
            alert("The grade must be between 0 and 100.");
        }            
    }

    if (StatType === 1){
        if (CurrGrade > MaxGrade) {
            MaxGrade = CurrGrade;
            StudentName = NameAnswer;           
        }
    } else {
        if (CurrGrade < MinGrade) {
            MinGrade = CurrGrade;
            StudentName = NameAnswer;            
        }
    }           
}

if (StatType === 1){
    alert("The best student is: " + StudentName);
} else {
    alert("The worst student is: " + StudentName);
}