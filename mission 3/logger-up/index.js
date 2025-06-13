console.log(process.argv)
let a = 10;

let b = 20;
let c = (a, b) => a + b;
console.log(`The sum of ${a} and ${b} is ${c}`);
console.log(`The sum of ${a} and ${b} is ${c(a, b)}`);