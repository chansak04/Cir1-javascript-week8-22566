const users = [
    { name:"Alexx",address: "Thai.", age: 30 }, //Array 0
    { name:"Bob",address: "Canada.", age: 35 }, //Array 1
    { name:"Alisa",address: "USA.", age: 40}, //Array 2
];
//Destrucring in Object and Array
// const[name, address, age] = users;
// console.log(`Name:${users[0].name, users[0].address, users[0].age}`);
// console.log(`Name:${users[1].name, users[1].address, users[1].age}`);
// console.log(`Name:${users[2].name, users[2].address, users[2].age}`);

for (const {name,address,age} of users){
    console.log(`Name:${name}, Address${address}, Age${age}`);
} 