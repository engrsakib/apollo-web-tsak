//Task 1
let prac1 : string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"
console.log("task 1", prac1)

// task 2
const task2 = (name: string, age: number, role: "admin" | "user" | "guest") => {
    return `Hello ${name}, you are ${age} years old and your role is ${role}.`;
}
console.log("task 2", task2("Md. Nazmus Sakib", 25, "admin"));

// task 3
type student = {
    name: string;
    age: number;
    marks:{
        bangla: number | null;
        english: number | null;
    }
    id: number | string;
    isActive: boolean;
}

const student1: student = {
    name: "Md. Nazmus Sakib",
    age: 25,
    marks:{
        bangla: 80,
        english: 90
    },
    id: 12345,
    isActive: true
}
console.log("task 3", student1);

// task 4