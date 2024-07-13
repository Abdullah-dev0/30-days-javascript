// welcome to 30DaysOfJavaScript for Day 1

// follow this git repository for more updates:

//  ----------------------- Activity 1 variable declaration

var number = 5;
var string = "Hello World";

console.log(number);
console.log(string);

// * output:
// * 5
// * Hello World

//  ----------------------- Activity 2 Constant declaration

const isLoggedIn = true;

console.log(boolean);

// * output:
// * true

//  ----------------------- Activity 3 Data types

let number2 = 5;
let string2 = "Hello World";
let isAdmin = true;
let array = [1, 2, 3, 4, 5];
let object = { name: "John", age: 25 };

console.log(number2);
console.log(string2);
console.log(boolean2);
console.log(array);
console.log(object);

// * output:
// 5
// * Hello World
// * true
// * [ 1, 2, 3, 4, 5 ]
// * { name: 'John', age: 25 }

//  ----------------------- Activity 4 Reassignging variables

let num1 = 25;
console.log("number: " + num1);

num1 = 45;
console.log("number: " + num1);

/**
 * Output:
 * number:  25
 * number:  45
 */

//  ----------------------- Activity 5 understanding const

const user = "John";

console.log(user);

// output:
// * John

user = "Doe";

//  * TypeError: Assignment to constant variable.
