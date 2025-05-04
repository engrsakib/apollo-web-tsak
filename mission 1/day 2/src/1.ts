let a: undefined = undefined;
let b: null = null;

// object
let user :{
    name: string,
    age?: number,
    date: Date,
    isActive: boolean,
}

user ={
    name: 'John',
    date: new Date(),
    isActive: true,
}

let man : [string, number, boolean] = ['John', 25, true];
man.push(74) // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(man)