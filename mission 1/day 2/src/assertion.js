var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var any;
any = "hello world";
any = 123;
any.length; // 11
any.toFixed(2); // 123.00
var tk;
tk = "1230" + "723";
var convertToString = function (value) {
    if (typeof value === "string") {
        return Number(value);
    }
    return value;
};
console.log(convertToString(tk)); // 123
try {
}
catch (error) {
    console.log(error.message);
}
var sakib = {
    name: "Sakib Al Hasan",
    roll: 75,
    joiningYear: 2008,
};
var sakibAlHasan = {
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
var addCourserStudent = function (student) {
    var courser = "Next Level Web Development";
    return __assign(__assign({}, student), { courser: courser });
};
var student = addCourserStudent({
    id: 1,
    name: "Md. Nazmus Sakib",
    email: "engrsakib02@gmail.com"
});
console.log(student.id);
