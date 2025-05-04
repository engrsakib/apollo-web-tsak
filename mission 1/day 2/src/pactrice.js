//Task 1
var prac1 = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log("task 1", prac1);
// task 2
var task2 = function (name, age, role) {
    return "Hello ".concat(name, ", you are ").concat(age, " years old and your role is ").concat(role, ".");
};
console.log("task 2", task2("Md. Nazmus Sakib", 25, "admin"));
var student1 = {
    name: "Md. Nazmus Sakib",
    age: 25,
    marks: {
        bangla: 80,
        english: 90
    },
    id: 12345,
    isActive: true
};
console.log("task 3", student1);
// task 4
var value = 100;
console.log("task 4.1", typeof value);
value = "100";
console.log("task 4.2", typeof value);
value = false;
console.log("task 4.3", typeof value);
