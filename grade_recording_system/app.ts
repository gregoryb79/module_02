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

function getMedian(numbers : number[]) : number {
    
    numbers = bubbleSort(numbers);
    const arraySize = numbers.length;
    let median = 0;

    if ((arraySize % 2) === 0) {
        median = (numbers[arraySize/2-1] + numbers[arraySize/2]) / 2;
    } else {
        median = numbers[(arraySize-1)/2];
    }

    return median; 
}


function gradesToArray(gradesRecord : [string, number][]) : [string, number][] {
    

    let studentName = prompt("Enter student name.");
    if (studentName === null) {
        return [];
    }
    let studentGrade = prompt("Enter student grade.");

    while ((studentGrade !== null) && (studentName !== null)) {
        
        gradesRecord [gradesRecord.length] = [studentName,Number(studentGrade)];      

        studentName = prompt("Enter student name.");
        if (studentName === null) {
            break;
        }
        studentGrade = prompt("Enter student grade.");   
    }

    return gradesRecord;
}

function printGradeRecords (gradesRecord : [string, number][]) {

    let output = "";
    for (let i = 0; i < gradesRecord.length; i++){
        output = output + gradesRecord [i][0] + " " + gradesRecord[i][1] + "\n";
    }

    return "Grades Record:\n"+output;

}

function removeGrades (gradesRecord : [string, number][]) : [string, number][] {

    let indexToRemove = -1;

    while (indexToRemove === -1) {

        const nameToRemove = prompt(printGradeRecords(gradesRecord) + `\nwhich name do you want to remove?`);
        if (nameToRemove === null){
            return gradesRecord;
        }

        indexToRemove = gradesRecord.findIndex(([name,grade]) => name === nameToRemove);

        if (indexToRemove !== -1) {
            gradesRecord.splice(indexToRemove,1);
        } else {
            alert(`${nameToRemove} not in the grades record.`)
        }

    }

    return gradesRecord;
}

function getMinGrade (gradesRecord : [string, number][]) : number {
    
    const gradesList = gradesRecord.map(([name,grades]) => grades);
    
    return Math.min(...gradesList);//"..." is inserting array values as  individual arguments
}

function getMaxGrade (gradesRecord : [string, number][]) : number {
    
    const gradesList = gradesRecord.map(([name,grades]) => grades);
    
    return Math.max(...gradesList);//"..." is inserting array values as  individual arguments
}

function getAvgGrade (gradesRecord : [string, number][]) : number {
    
    const gradesList = gradesRecord.map(([name,grades]) => grades);
    const summ = gradesList.reduce((acc,grade) => acc + grade,0);
    return (summ/gradesList.length);
}

function getMedGrade (gradesRecord : [string, number][]) : number {
    
    const gradesList = gradesRecord.map(([name,grades]) => grades);
    return getMedian(gradesList);

}

function getStatistics (gradesRecord : [string, number][]) {
    
    alert("Welcome to the statistics section of GRS");
    
    let userInput = prompt(`What would you like to do\n
        1. See the worst grade\n
        2. See the best grade\n
        3. See the grades average\n
        4. See the grades median\n
        "Cancel" to return to main menu.`);
    
    while (userInput !== null){

        switch (userInput) {
            case "1" : 
                let minGrade = getMinGrade(gradesRecord);
                alert(`The worst grade is: ${minGrade}`);
                break;
            case "2" : 
                let maxGrade = getMaxGrade(gradesRecord);
                alert(`The best grade is: ${maxGrade}`);
                break;
            case "3" : 
                let avgGrade = getAvgGrade(gradesRecord);
                alert(`The grades average is: ${avgGrade}`);
                break;
            case "4" : 
                let medGrade = getMedGrade(gradesRecord);
                alert(`The grades median is: ${medGrade}`);
                break;
            default: alert(`I don't know what ${userInput} is.`);
        }

        userInput = prompt(`What would you like to do\n
                        1. See the worst grade\n
                        2. See the best grade\n
                        3. See the grades average\n
                        4. See the grades median\n
                        "Cancel" to return to main menu.`);                

    }

}


function gradesRecordsystem(){

    alert("Welcome to the Grades record system");
    
    let userInput = prompt(`What would you like to do\n
        1. Enter grades to the record\n
        2. See the current grades record\n
        3. Remove grades from the record\n
        4. Get statistics\n
        "Cancel" to exit the system.`);

    let gradesRecord : [string, number][] = [];
    while (userInput !== null){

        switch (userInput) {
            case "1" : 
                gradesRecord = gradesToArray(gradesRecord);
                break;
            case "2" : 
                alert(printGradeRecords(gradesRecord));
                break;
            case "3" : 
                gradesRecord = removeGrades(gradesRecord);
                break;
            case "4" : 
                getStatistics(gradesRecord);
                break;
            default: 
                alert(`I don't know what ${userInput} is.`);
        }

        userInput = prompt(`What would you like to do\n
                        1. Enter grades to the record\n
                        2. See the current grades record\n
                        3. Remove grades from the record\n
                        4. Get statistics\n
                        "Cancel" to exit the system.`);                 


    }

    alert("Have a nice day!");
}

gradesRecordsystem();
