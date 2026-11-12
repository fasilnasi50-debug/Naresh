// 1. Variables, operators, conditions and loops
// Write a program to find all numbers between 1 and 100 that are divisible by both 3 and 5.
// - Print those numbers.
// - Calculate their total sum.
// - Count how many such numbers exist.

/* let count = 0;
let num = 1;
let total = 0;
while(num<101){
    if(num%3==0 && num%5==0){
        console.log(num)
        count += 1
        total+=num;
    }
    num++
}
console.log(`count : ${count}`);
console.log(`total : ${total}`); */

   /*  let total;
let calculateSalary = (x)=>{

    let hra = x *(20/100);
    let da = x *(10/100);
    let tax = x*(5/100);
    return total = x + hra + da - tax;
}

let salary = calculateSalary(30000);
console.log(salary); */

let employees = [
    { name: "Arun", age: 22, salary: 20000, department: "IT" },
    { name: "Rahul", age: 25, salary: 30000, department: "HR" },
    { name: "Vijay", age: 28, salary: 40000, department: "IT" },
    { name: "Kumar", age: 30, salary: 35000, department: "Finance" },
    { name: "Ravi", age: 32, salary: 50000, department: "IT" }
];

let IT = employees.filter(x=>{
    return x.department == "IT";
})
console.log(IT);

employees[1].salary = employees[1].salary + 35000
console.log(employees);

employees = [...employees,{
    name: "suresh",
    age: 26,
    salary: 28000,
    department: "IT"}
]
console.log(employees);

employees.splice(3,1);
console.log(employees);