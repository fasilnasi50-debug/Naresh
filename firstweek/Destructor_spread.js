// DESTRUCTOR AND SPREAD OPERATORS

// Array destructing

/* let js = ["JavaScript", "Python", "Java"];

let[a,b,c]=js;
console.log(a);
console.log(b);
console.log(c); */

// Object destructing

// let obj = {
//     name: "Arun",
//     age: 22,
//     course: "JavaScript"
// }

// Object destructing

// let{name,age,course} = obj;
// console.log(name);
// console.log(age);
// console.log(course);

// Spread operators
// let fruits = ["Apple", "Banana", "Orange"];
// let  new_fruits = [ ...fruits,"mango","grapes"];
// console.log(new_fruits);

/* let[a,b,c,d,e] = new_fruits;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 */

// // Creating new object
/* let employee = {
    name: "Arun",
    age: 28,
    salary: 30000
};

let newObject = {...employee,department : "IT"};
console.log(newObject); */


// Overwrite the existing value

let data = { name : "viswa", age : 24, course : "bba"};
let newData = {...data,course : "IT", work : "software"};

console.log(data);
console.log(newData);  
