//name age department salary
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

// type employee = {
//     name : string,
//     age : number,
//     department : string,
//     salary : number
// }

// const numberOfEmployees = 5;
// let employeesList : employee [] = [];

// for (let i = 0; i < numberOfEmployees; i++){
//     employeesList.push(getEmployeeData());
// }

// salaryStatistics(employeesList,"all");

type Pet = { 
    name: string, 
    species: string, 
    age: number,     
};

const myPet: Pet = { name: "Rocky", species: "Pitbull", age: 3 };
//const myPetStr = myPet.toString();
const myPetStr = `name:${myPet.name}, species:${myPet.species}, age:${myPet.age}`;

alert(myPetStr);






