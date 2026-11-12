// let students = ["Arun", "Rahul", "Vijay", "Kumar", "Ravi", "Ajay"];

/* let s_student = students.slice(1,4);
console.log(s_student);

let lastThree = students.slice(-3);
console.log(lastThree);

let copystd = students.slice(0);
console.log(copystd);

let sstd = students.splice(2,2);
console.log(students); */

/* let rstd = students.splice(2,2,"suresh","praveen");
students.push("manoj");
console.log(students);
 */

let employees = [
    { name: "Arun", age: 22, salary: 20000, department: "IT" },
    { name: "Rahul", age: 25, salary: 35000, department: "HR" },
    { name: "Vijay", age: 28, salary: 45000, department: "IT" },
    { name: "Kumar", age: 24, salary: 25000, department: "Finance" },
    { name: "Ravi", age: 30, salary: 50000, department: "IT" },
    { name: "Ajay", age: 26, salary: 40000, department: "HR" },
    { name: "Suresh", age: 32, salary: 60000, department: "Finance" }
];


let calculateBonus = employees.filter(x=>{
    if(x.age>25){
        x.map(x=>{
            let bonus = (x.salary * 10)/100
            let update_bonus = x.salary + bonus;
            return x ;
        })
    }

})