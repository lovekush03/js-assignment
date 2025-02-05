//Given an array of employees, perform the following: Calculate the total salary of all employees. 
// Get the names of all employees in the "IT" department. 
// Find the employee with the highest salary. 
const employees = [
    { name: "Alice", department: "IT", salary: 60000 },
    { name: "Bob", department: "HR", salary: 50000 }, 
    { name: "Charlie", department: "IT", salary: 75000 },
    { name: "David", department: "Finance", salary: 80000 }
];

//Get anmes of all employees with It department 
const it_department = employees.map((employee) => {
    if(employee.department==="IT") return employee;
})

console.log(it_department)

//Find emplyee with highest salary
function highest_salary(employees){
    let max_salary = 0;
    for(let i = 0; i < employees.length ; i++){
        max_salary = Math.max(max_salary,employees[i].salary);
    }   
    return max_salary
}
let max_salary = highest_salary(employees);
let highest_salary_employee = employees.filter((emp) => {
    return emp.salary === max_salary;
})

console.log(highest_salary_employee);