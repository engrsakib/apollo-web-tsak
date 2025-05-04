let any: any;

any = "hello world";

any = 123;

(any as string).length; // 11
(any as number).toFixed(2); // 123.00

let tk: number | string;
tk = "1230" + "723";

const convertToString = (value: number | string): Number => {
  if (typeof value === "string") {
    return Number(value);
  }
  return value;
};

console.log(convertToString(tk)); // 123

type CustomError = {
  message: string;
  code: number;
};

try {
} catch (error) {
  console.log((error as CustomError).message);
}

// interface
interface Person {
  name: string;
  roll: number;
  university?: "Dhaka International University";
}

interface Person {
  joiningYear?: number;
}
const sakib: Person = {
  name: "Sakib Al Hasan",
  roll: 75,
  joiningYear: 2008,
};

interface Developer<T> {
  name: string;
  age: number;
  income: number;

  computer: {
    brand: string;
    model: string;
    price: number;
    release: number;
  };
  smartphone: T;
}

const sakibAlHasan: Developer<{
  brand: string;
  model: string;
  price: number;
  release: number;
}> = {
  name: "Sakib Al Hasan",
  age: 35,
  income: 1000000,
  computer: {
    brand: "Apple",
    model: "MacBook Pro",
    price: 2000,
    release: 2022,
  },
  smartphone: {
    brand: "Apple",
    model: "iPhone 14 Pro",
    price: 1000,
    release: 2022,
  },
};

console.log(sakibAlHasan);
console.log(sakibAlHasan.computer);
console.log(sakibAlHasan.smartphone);

const addCourserStudent = <T extends {name: string, email: string}>(student: T): T => {
  const courser = "Next Level Web Development";
  return {
    ...student,
    courser,
  };
};

const student = addCourserStudent<{
    id: number;
    name: string;
    email: string;
}>({
    id: 1,
    name: "Md. Nazmus Sakib",
    email: "engrsakib02@gmail.com"
})

console.log(student)

type house = {
    name: string;
    price: number;
    location: string;
    area: number;
}

type owner = keyof house;

