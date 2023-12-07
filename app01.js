const user = [
    {
        fname: "Mark",
        Address: '15th Park Avenue',
        age: 55,
        colors: ["Red", "Green", "Blue"],
    },
    {
        fname: "Elon",
        Address: '15th Park Avenue',
        age: 55,
        colors: ["Orange", "Pink", "Yellow"],
    },
];
//2.Displa;y Destructuring Object
console.log("=====Display Destructuring Object=====")
//const { fname, Address, age, colors } = user;
console.log(user[0].fname);
console.log(user[0].Address);
console.log(user[0].age);
console.log(user[0].colors[0], user[0].colors[1], user[0].colors[2]);

console.log(user[1].fname);
console.log(user[1].Address);
console.log(user[1].age);
console.log(user[1].colors[0], user[1].colors[1], user[1].colors[2]);

// 1.Display Genereal Object
// console.log("=====Display Genereal Object=====")
// console.log(user.fname)
// console.log(user.Address)
// console.log(user.age)
// console.log(user.colors[0])
// console.log(user.colors[1]);
// console.log(user.colors[2]);