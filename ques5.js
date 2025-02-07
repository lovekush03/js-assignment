//Q5)Create a list of objects of Employee with info as follows: Name, Age, Salary, DoB 
// 1. Filter all employees with salary greater than 5000 
// 2. Group employee based on their age 
// 3. Fetch employees with salary less than 1000 and age greater than 20. Then give them an increment of 5 times their salary.


const employees = [
    { name: "John Doe", age: 30, salary: 500, dob: "1994-05-15" },
    { name: "Alice Smith", age: 25, salary: 6000, dob: "1999-08-20" },
    { name: "Bob Johnson", age: 30, salary: 7000, dob: "1989-12-10" },
    { name: "Emma Brown", age: 28, salary: 550, dob: "1996-07-05" },
    { name: "Michael Davis", age: 25, salary: 8000, dob: "1984-03-25" },
    { name: "Sophia Wilson", age: 50, salary: 6200, dob: "1992-11-30" },
    { name: "Liam Miller", age: 29, salary: 580, dob: "1995-06-12" },
    { name: "Olivia Anderson", age: 45, salary: 5400, dob: "1997-09-18" },
    { name: "William Clark", age: 45, salary: 9000, dob: "1979-02-22" },
    { name: "James White", age: 50, salary: 10000, dob: "1974-04-10" }
  ];

//1.
console.log("Output for question 1" );
let employee_salary_more_than_5000 = employees.filter((emp) => {
    return emp.salary > 5000;
})
console.log(employee_salary_more_than_5000);

//2.
let ageGroup = {};
employees.forEach(emp => {
    if(!ageGroup[emp.age]){
        ageGroup[emp.age] = [];
    }
    ageGroup[emp.age].push(emp);
});
console.log("Output for question 2");
console.log(ageGroup)


//3.
let result = employees.filter((emp) => {
    if(emp.salary < 1000 && emp.age > 20){
        emp.salary = emp.salary + emp.salary*5;
        return emp;
    }
})
console.log("Output for question 3 ");
console.log(result);