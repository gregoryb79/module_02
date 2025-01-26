function bubbleSort(inputArray: number[]): number[] {
    let array = inputArray;
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

function getMedian(inputNumbers : number[]) : number {
    
    let numbers = inputNumbers;
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

function getEmployeeData() : employee {

    const userInput = prompt("Enter employee data: Name,age,department,salary");
    const employeeData = userInput?.split(",") ?? [];

    const currEmployee : employee = {
    name : employeeData[0],
    age : Number(employeeData[1]),
    department : employeeData[2],
    salary : Number(employeeData[3])
    }

    return currEmployee;

}

function addWorker (employeesList : employee []) : employee [] {

    employeesList.push(getEmployeeData());

    return employeesList;
}

function getSalary (employeesList : employee [], wantedDepartment : string) : number []{

    let salary : number [] = [];

    for (let i = 0; i < employeesList.length; i++){

        if ((employeesList[i].department === wantedDepartment) || (wantedDepartment === "all")) {
            salary.push(employeesList[i].salary);
        }

    } 

    return salary;
}

function salaryStatistics (employeesList : employee [], wantedDepartment : string) {

    const salary = getSalary(employeesList,wantedDepartment);

    const maxSalary = Math.max(...salary);
    const minSalary = Math.min(...salary);
    const avgSalary = (salary.reduce((acc,pay) => acc + pay,0))/salary.length;
    const medSalary = getMedian(salary);

    alert(`The salary statistics in ${wantedDepartment} is:\n
            Maximal Salary: ${maxSalary}\n
            Minimal Salary: ${minSalary}\n
            Average Salary: ${avgSalary}\n
            Median Salary: ${medSalary}`);

}

function getStatistics (employeesList : employee []) {

    let listOfDepartments = "";
    const uniqueDepartments = Array.from( new Set(employeesList.map(employee => employee.department)));

    for (let i = 0; i < uniqueDepartments.length; i++){
        listOfDepartments = listOfDepartments + `${i+1}. ${uniqueDepartments[i]}\n`;
    }

    let userInput = prompt(listOfDepartments + `Statistics for which department do you want?\n
                                                use "all" for all departments combined.\n
                                                Cancel to return to main menu.`);
    while (userInput !== null){

        salaryStatistics(employeesList,userInput);

        userInput = prompt(listOfDepartments + `Statistics for which department do you want?\n
            use "all" for all departments combined.\n
            Cancel to return to main menu.`);

    }


}

function printWorkers(employeesList : employee []) : string {

    let listOfWorkers = "";
    let counter = 1;
    for(const worker of employeesList){
        listOfWorkers = listOfWorkers +  `${counter}.  ${worker.name}\n`;
        counter++;
    }

    return listOfWorkers;
}

function removeWorker (employeesList : employee []) : employee [] {

    let userInput = prompt(`${printWorkers(employeesList)} Who do you want to remove?\n
                            Cancel to return to Menu.`);
    while (userInput !== null) {
        const removeLocation = Number(userInput);
        if ((!isNaN(removeLocation)) && (removeLocation > 0) && (removeLocation < employeesList.length)){
            employeesList.splice(removeLocation-1,1);
        } else {
            alert("ERROR. Plese enter number of the worker you want to remove from the list.")
        }

        userInput = prompt(`${printWorkers(employeesList)} Who do you want to remove?\n
                            Cancel to return to Menu.`);
    }

    return employeesList;
}

type employee = {
    name : string,
    age : number,
    department : string,
    salary : number
}


function workersRecordsystem(){

    alert("Welcome to the Workers Record System");
    
    let userInput = prompt(`What would you like to do\n
        1. Add worker record\n
        2. See the current workers record\n
        3. Remove worker from the records\n
        4. Get statistics\n
        "Cancel" to exit the system.`);

    let employeesList : employee [] = [
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
        // { name: "Uma", age: 37, department: "Finance", salary: 68000 },
        // { name: "Victor", age: 35, department: "IT", salary: 70000 },
        // { name: "Wendy", age: 44, department: "Operations", salary: 89000 },
        // { name: "Xander", age: 30, department: "Marketing", salary: 52000 },
        // { name: "Yara", age: 29, department: "HR", salary: 49000 },
        // { name: "Zane", age: 40, department: "IT", salary: 78000 },
        // { name: "Liam", age: 43, department: "Finance", salary: 84000 },
        // { name: "Olivia", age: 24, department: "Operations", salary: 47000 },
        // { name: "Emma", age: 32, department: "Marketing", salary: 61000 },
        // { name: "Noah", age: 27, department: "IT", salary: 58000 },
      ];

    while (userInput !== null){

        switch (userInput) {
            case "1" : 
                employeesList = addWorker(employeesList);
                break;
            case "2" : 
                alert(printWorkers(employeesList));
                break;
            case "3" : 
                employeesList = removeWorker(employeesList);
                break;
            case "4" : 
                getStatistics(employeesList);
                break;
            default: 
                alert(`I don't know what ${userInput} is.`);
        }

        userInput = prompt(`What would you like to do\n
            1. Add worker record\n
            2. See the current workers record\n
            3. Remove worker from the records\n
            4. Get statistics\n
            "Cancel" to exit the system.`);                


    }

    alert("Have a nice day!");
}

workersRecordsystem();








