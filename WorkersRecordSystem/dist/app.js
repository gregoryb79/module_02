function bubbleSort(inputArray) {
    var _a;
    var array = inputArray;
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
function getMedian(inputNumbers) {
    var numbers = inputNumbers;
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
function getEmployeeData() {
    var _a;
    var userInput = prompt("Enter employee data: Name,age,department,salary");
    var employeeData = (_a = userInput === null || userInput === void 0 ? void 0 : userInput.split(",")) !== null && _a !== void 0 ? _a : [];
    var currEmployee = {
        name: employeeData[0],
        age: Number(employeeData[1]),
        department: employeeData[2],
        salary: Number(employeeData[3])
    };
    return currEmployee;
}
function addWorker(employeesList) {
    employeesList.push(getEmployeeData());
    return employeesList;
}
function getSalary(employeesList, wantedDepartment) {
    var salary = [];
    for (var i = 0; i < employeesList.length; i++) {
        if ((employeesList[i].department === wantedDepartment) || (wantedDepartment === "all")) {
            salary.push(employeesList[i].salary);
        }
    }
    return salary;
}
function salaryStatistics(employeesList, wantedDepartment) {
    var salary = getSalary(employeesList, wantedDepartment);
    var maxSalary = Math.max.apply(Math, salary);
    var minSalary = Math.min.apply(Math, salary);
    var avgSalary = (salary.reduce(function (acc, pay) { return acc + pay; }, 0)) / salary.length;
    var medSalary = getMedian(salary);
    alert("The salary statistics in " + wantedDepartment + " is:\n\n            Maximal Salary: " + maxSalary + "\n\n            Minimal Salary: " + minSalary + "\n\n            Average Salary: " + avgSalary + "\n\n            Median Salary: " + medSalary);
}
function getStatistics(employeesList) {
    var listOfDepartments = "";
    var uniqueDepartments = Array.from(new Set(employeesList.map(function (employee) { return employee.department; })));
    for (var i = 0; i < uniqueDepartments.length; i++) {
        listOfDepartments = listOfDepartments + (i + 1 + ". " + uniqueDepartments[i] + "\n");
    }
    var userInput = prompt(listOfDepartments + "Statistics for which department do you want?\n\n                                                use \"all\" for all departments combined.\n\n                                                Cancel to return to main menu.");
    while (userInput !== null) {
        salaryStatistics(employeesList, userInput);
        userInput = prompt(listOfDepartments + "Statistics for which department do you want?\n\n            use \"all\" for all departments combined.\n\n            Cancel to return to main menu.");
    }
}
function printWorkers(employeesList) {
    var listOfWorkers = "";
    var counter = 1;
    for (var _i = 0, employeesList_1 = employeesList; _i < employeesList_1.length; _i++) {
        var worker = employeesList_1[_i];
        listOfWorkers = listOfWorkers + (counter + ".  " + worker.name + "\n");
        counter++;
    }
    return listOfWorkers;
}
function removeWorker(employeesList) {
    var userInput = prompt(printWorkers(employeesList) + " Who do you want to remove?\n\n                            Cancel to return to Menu.");
    while (userInput !== null) {
        var removeLocation = Number(userInput);
        if ((!isNaN(removeLocation)) && (removeLocation > 0) && (removeLocation < employeesList.length)) {
            employeesList.splice(removeLocation - 1, 1);
        }
        else {
            alert("ERROR. Plese enter number of the worker you want to remove from the list.");
        }
        userInput = prompt(printWorkers(employeesList) + " Who do you want to remove?\n\n                            Cancel to return to Menu.");
    }
    return employeesList;
}
function workersRecordsystem() {
    alert("Welcome to the Workers Record System");
    var userInput = prompt("What would you like to do\n\n        1. Add worker record\n\n        2. See the current workers record\n\n        3. Remove worker from the records\n\n        4. Get statistics\n\n        \"Cancel\" to exit the system.");
    var employeesList = [
        { name: "Alice", age: 25, department: "HR", salary: 50000 },
        { name: "Bob", age: 30, department: "IT", salary: 60000 },
        { name: "Charlie", age: 35, department: "HR", salary: 55000 },
        { name: "Daisy", age: 40, department: "Finance", salary: 70000 },
        { name: "Eve", age: 28, department: "IT", salary: 62000 },
        { name: "Frank", age: 33, department: "Marketing", salary: 48000 },
        { name: "Grace", age: 45, department: "Operations", salary: 80000 },
        { name: "Hank", age: 38, department: "Finance", salary: 67000 },
        { name: "Ivy", age: 29, department: "IT", salary: 53000 },
        { name: "Jack", age: 32, department: "HR", salary: 54000 },
        { name: "Karen", age: 41, department: "Marketing", salary: 71000 },
        { name: "Leo", age: 27, department: "Operations", salary: 45000 },
        { name: "Mona", age: 50, department: "Finance", salary: 96000 },
        { name: "Nancy", age: 26, department: "HR", salary: 52000 },
        { name: "Oscar", age: 36, department: "IT", salary: 64000 },
        { name: "Paul", age: 31, department: "Marketing", salary: 56000 },
        { name: "Quinn", age: 39, department: "Finance", salary: 75000 },
        { name: "Rachel", age: 34, department: "Operations", salary: 59000 },
        { name: "Steve", age: 42, department: "HR", salary: 86000 },
        { name: "Tina", age: 28, department: "Marketing", salary: 58000 },
    ];
    while (userInput !== null) {
        switch (userInput) {
            case "1":
                employeesList = addWorker(employeesList);
                break;
            case "2":
                alert(printWorkers(employeesList));
                break;
            case "3":
                employeesList = removeWorker(employeesList);
                break;
            case "4":
                getStatistics(employeesList);
                break;
            default:
                alert("I don't know what " + userInput + " is.");
        }
        userInput = prompt("What would you like to do\n\n            1. Add worker record\n\n            2. See the current workers record\n\n            3. Remove worker from the records\n\n            4. Get statistics\n\n            \"Cancel\" to exit the system.");
    }
    alert("Have a nice day!");
}
workersRecordsystem();
