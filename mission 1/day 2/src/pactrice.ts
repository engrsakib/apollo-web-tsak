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
let value: number | string | boolean = 100;
console.log("task 4.1", typeof value);
value = "100";
console.log("task 4.2", typeof value);
value = false;
console.log("task 4.3", typeof value);

interface magazine{
    title: string;
    pageCount: number;
    price: number;
    isBangla?: boolean | string;
}

const magazine1: magazine = {
    title: "The Great Gatsby",
    pageCount: 180,
    price: 15.99,
    isBangla: "yes"
}
console.log("task 4.4", magazine1);

// task 5
const revarseSrting = (str : string): string =>{
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
console.log("task 5", revarseSrting("Hello World"));

// task 6
let arr : string[] = ["sakib", "arif", "sumaiya", "arman"];
let arr2 : string[] = [...arr, "kamran"];
arr2.map((ar : string) => console.log(ar));

let num : number[] = [2, 4, 9, 1, 6, 4, 6];

let num2 : number[] = [...num, num.reduce((acc : number, crr : number): number => acc + crr)];
console.log("task 6", num, num2);

// Task 7: Type Assertion and Narrowing

const conFn = (num: (string | number)): any =>{
    if(typeof num == 'string'){
        return num.length;
    }
    return num * num;
}

console.log("task 7 as string", conFn("1500"));
console.log("task 7 as number", conFn(1500));

// task 8 Intersection Types

type editor = {
    name: string;
    phone: number;
    mail?: string;
    role: "editor";
    power:{
        approvePost: boolean;
        deletePost: boolean;
    }
}

type admin = {
    name: string;
    phone: number;
    mail?: string;
    role: "editor";
    power:{
        approveUser: boolean;
        deleteEditor: boolean;
        deleteAdmin: boolean;
    }
}

type superAdmin = admin & editor;

const fatema : superAdmin = {
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
}

console.log("task 8", fatema);

// task 9 optioanl chaining
function getEmployeeCity(employee: any): string | undefined {
    return employee?.address?.city;
  }

  console.log("task 9", getEmployeeCity({
    id: 1,
    name: "Nazmus Sakib",
    address: {
      street: "123 Main Street",
      city: "Gulshan Dhaka",
      country: "Bangladesh"
    }
  }))

//   Task 10: Nullish Coalescing
const getDisplayName = (name?: string | null | undefined)=>{
    if(typeof name == 'string'){
        return name;
    }
    return 'Anonumus'
}
let mana;
console.log("task 10", getDisplayName(mana));

// Task 11: Unknown Type


// Task 12: Never Type
const getDisplayNamea = (name?: string | null | undefined) : never =>{
    if(typeof name == 'string'){
        console.log(name);
    } else {
        console.log('Anonumus');
    }
    throw new Error("This function should never return");
}
getDisplayNamea("sakib");