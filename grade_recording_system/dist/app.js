function bubbleSort(array) {
    var _a;
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1]; // Swap
            }
        }
    }
    return array;
}
function getMedian(numbers) {
    numbers = bubbleSort(numbers);
    var arraySize = numbers.length;
    var median = 0;
    if ((arraySize % 2) === 0) {
        median = (numbers[arraySize / 2 - 1] + numbers[arraySize / 2]) / 2;
    }
    else {
        median = numbers[(arraySize - 1) / 2];
    }
    return median;
}
function gradesToArray(gradesRecord) {
    var studentName = prompt("Enter student name.");
    if (studentName === null) {
        return [];
    }
    var studentGrade = prompt("Enter student grade.");
    while ((studentGrade !== null) && (studentName !== null)) {
        gradesRecord[gradesRecord.length] = [studentName, Number(studentGrade)];
        studentName = prompt("Enter student name.");
        if (studentName === null) {
            break;
        }
        studentGrade = prompt("Enter student grade.");
    }
    return gradesRecord;
}
function printGradeRecords(gradesRecord) {
    var output = "";
    for (var i = 0; i < gradesRecord.length; i++) {
        output = output + gradesRecord[i][0] + " " + gradesRecord[i][1] + "\n";
    }
    return "Grades Record:\n" + output;
}
function removeGrades(gradesRecord) {
    var indexToRemove = -1;
    var _loop_1 = function () {
        var nameToRemove = prompt(printGradeRecords(gradesRecord) + "\nwhich name do you want to remove?");
        if (nameToRemove === null) {
            return { value: gradesRecord };
        }
        indexToRemove = gradesRecord.findIndex(function (_a) {
            var name = _a[0], grade = _a[1];
            return name === nameToRemove;
        });
        if (indexToRemove !== -1) {
            gradesRecord.splice(indexToRemove, 1);
        }
        else {
            alert(nameToRemove + " not in the grades record.");
        }
    };
    while (indexToRemove === -1) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return gradesRecord;
}
function getMinGrade(gradesRecord) {
    var gradesList = gradesRecord.map(function (_a) {
        var name = _a[0], grades = _a[1];
        return grades;
    });
    return Math.min.apply(Math, gradesList); //"..." is inserting array values as  individual arguments
}
function getMaxGrade(gradesRecord) {
    var gradesList = gradesRecord.map(function (_a) {
        var name = _a[0], grades = _a[1];
        return grades;
    });
    return Math.max.apply(Math, gradesList); //"..." is inserting array values as  individual arguments
}
function getAvgGrade(gradesRecord) {
    var gradesList = gradesRecord.map(function (_a) {
        var name = _a[0], grades = _a[1];
        return grades;
    });
    var summ = gradesList.reduce(function (acc, grade) { return acc + grade; }, 0);
    return (summ / gradesList.length);
}
function getMedGrade(gradesRecord) {
    var gradesList = gradesRecord.map(function (_a) {
        var name = _a[0], grades = _a[1];
        return grades;
    });
    return getMedian(gradesList);
}
function getStatistics(gradesRecord) {
    alert("Welcome to the statistics section of GRS");
    var userInput = prompt("What would you like to do\n\n        1. See the worst grade\n\n        2. See the best grade\n\n        3. See the grades average\n\n        4. See the grades median\n\n        \"Cancel\" to return to main menu.");
    while (userInput !== null) {
        switch (userInput) {
            case "1":
                var minGrade = getMinGrade(gradesRecord);
                alert("The worst grade is: " + minGrade);
                break;
            case "2":
                var maxGrade = getMaxGrade(gradesRecord);
                alert("The best grade is: " + maxGrade);
                break;
            case "3":
                var avgGrade = getAvgGrade(gradesRecord);
                alert("The grades average is: " + avgGrade);
                break;
            case "4":
                var medGrade = getMedGrade(gradesRecord);
                alert("The grades median is: " + medGrade);
                break;
            default: alert("I don't know what " + userInput + " is.");
        }
        userInput = prompt("What would you like to do\n\n                        1. See the worst grade\n\n                        2. See the best grade\n\n                        3. See the grades average\n\n                        4. See the grades median\n\n                        \"Cancel\" to return to main menu.");
    }
}
function gradesRecordsystem() {
    alert("Welcome to the Grades record system");
    var userInput = prompt("What would you like to do\n\n        1. Enter grades to the record\n\n        2. See the current grades record\n\n        3. Remove grades from the record\n\n        4. Get statistics\n\n        \"Cancel\" to exit the system.");
    var gradesRecord = [];
    while (userInput !== null) {
        switch (userInput) {
            case "1":
                gradesRecord = gradesToArray(gradesRecord);
                break;
            case "2":
                alert(printGradeRecords(gradesRecord));
                break;
            case "3":
                gradesRecord = removeGrades(gradesRecord);
                break;
            case "4":
                getStatistics(gradesRecord);
                break;
            default:
                alert("I don't know what " + userInput + " is.");
        }
        userInput = prompt("What would you like to do\n\n                        1. Enter grades to the record\n\n                        2. See the current grades record\n\n                        3. Remove grades from the record\n\n                        4. Get statistics\n\n                        \"Cancel\" to exit the system.");
    }
    alert("Have a nice day!");
}
gradesRecordsystem();
