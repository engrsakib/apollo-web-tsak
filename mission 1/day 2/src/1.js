var a = undefined;
var b = null;
// object
var user;
user = {
    name: 'John',
    date: new Date(),
    isActive: true,
};
var man = ['John', 25, true];
man.push(74); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(man);
