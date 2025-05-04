var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var magazine1 = {
    title: "The Great Gatsby",
    pageCount: 180,
    price: 15.99,
    isBangla: "yes"
};
console.log("task 4.4", magazine1);
// task 5
var revarseSrting = function (str) {
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
};
console.log("task 5", revarseSrting("Hello World"));
// task 6
var arr = ["sakib", "arif", "sumaiya", "arman"];
var arr2 = __spreadArray(__spreadArray([], arr, true), ["kamran"], false);
arr2.map(function (ar) { return console.log(ar); });
var num = [2, 4, 9, 1, 6, 4, 6];
var num2 = __spreadArray(__spreadArray([], num, true), [num.reduce(function (acc, crr) { return acc + crr; })], false);
console.log("task 6", num, num2);
// Task 7: Type Assertion and Narrowing
var conFn = function (num) {
    if (typeof num == 'string') {
        return num.length;
    }
    return num * num;
};
console.log("task 7 as string", conFn("1500"));
console.log("task 7 as number", conFn(1500));
var fatema = {
    name: "Fatema",
    phone: 1234567890,
    role: "editor",
    power: {
        approvePost: true,
        deletePost: true,
        approveUser: true,
        deleteEditor: true,
        deleteAdmin: true
    }
};
console.log("task 8", fatema);
// task 9 optioanl chaining
function getEmployeeCity(employee) {
    var _a;
    return (_a = employee === null || employee === void 0 ? void 0 : employee.address) === null || _a === void 0 ? void 0 : _a.city;
}
console.log("task 9", getEmployeeCity({
    id: 1,
    name: "Nazmus Sakib",
    address: {
        street: "123 Main Street",
        city: "Gulshan Dhaka",
        country: "Bangladesh"
    }
}));
//   Task 10: Nullish Coalescing
var getDisplayName = function (name) {
    if (typeof name == 'string') {
        return name;
    }
    return 'Anonumus';
};
var mana;
console.log("task 10", getDisplayName(mana));
// Task 11: Unknown Type
// Task 12: Never Type
var getDisplayNamea = function (name) {
    if (typeof name == 'string') {
        console.log(name);
    }
    else {
        console.log('Anonumus');
    }
    throw new Error("This function should never return");
};
getDisplayNamea("sakib");
