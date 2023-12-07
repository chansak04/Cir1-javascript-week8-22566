//1.Define Array type
const arr = ["Mark", "Elon", "Jeff"];
const weeks = ["Monday", "Tuesday", "Wednesday"]
const colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "red"]

//4.Destructuring and Rest operator
console.log("=====4.Dispaly Destructuring and Rest operator=====");
const[a, b, ... g] = colors
console.log(a)
console.log(b);
console.log(g);


//3.Destructuring assigment
console.log("=====3.Display Week with Destructuring Array=====")
const[day1, day2, day3] = weeks;
console.log(day1, day2, day3)

//2.Destructuring assigment
console.log("=====2.Display Destructuring assigment=====")
const[first, second, third] = arr
console.log(first);
console.log(second);
console.log(third);