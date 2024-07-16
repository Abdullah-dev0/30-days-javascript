// -------------------Activity 1 Arithemetic  operators

// Task 1 : Write a program to add two numbers and console the result.

let a: number = 10;
let b: number = 20;

let sum: number = a + b;
console.log("Sum of two numbers = " + sum);

// Task 2 : Write a program to subtract two numbers and console the result.
let sub: number = a - b;
console.log("subtraction of two numbers = " + sub);

// Task 3 : Write a program to multiply two numbers and console the result.
let mul: number = a * b;
console.log("multiplycation of two numbers = " + mul);

// Task 4 : Write a program to divide two numbers and console the result.
let div: number = a / b;
console.log("divition of two numbers = " + div);

// Task 5 : Write a program to find the remainder when two numbers are divided and console the result.
let mod: number = a % b;
console.log("Reminder of two numbers = " + mod);

// --------------------------Activity 2 : Assigment Operators

// Task 6 : Write a program to add two numbers using += operator and console the result.

let addTwoNum: number = 10;
let subtractTwoNum: number = 20;
addTwoNum += 5;

console.log("Sum of two numbers using += operator = " + addTwoNum);

// Task 7 : Write a program to subtract two numbers using -= operator and console the result.

subtractTwoNum -= 5;

console.log("Subtraction of two numbers using -= operator = " + subtractTwoNum);

// ---------------------Activity 3 : Comparison Operators

// Task 8 : Write a program to compare two numbers with <  and this  >  and console the result.

let e: number = 10;
let f: number = 10;

let compare1 = e < f;
let compare2 = e > f;

console.log("Comparison of two numbers with < operator = " + compare1);
console.log("Comparison of two numbers with > operator = " + compare2);

// Task 9 : Write a program to compare two numbers with <=  and this  >=  and console the result.

let compare3: boolean = e <= f;
let compare4: boolean = e >= f;

console.log("Comparison of two numbers with <= operator = " + compare3);
console.log("Comparison of two numbers with >= operator = " + compare4);

// Task 10 : Write a program to compare two numbers with ==  and this  ===  and console the result.

let g: number = 10;
let h: string = "10";

let compare5: boolean = g == h;
let compare6: boolean = g === h;

// typescript error : This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.

console.log("Comparison of two numbers with == operator = " + compare5);
console.log("Comparison of two numbers with === operator = " + compare6);

// ---------------------Activity 4 : Logical Operators

// Task 11 : Write a program to compare two numbers with &&   and console the result.

let i: number = 10;
let j: number = 20;

let compare7: boolean = i > 5 && j < 30;

console.log("Comparison of two numbers with && operator = " + compare7);

// Task 12 : Write a program to compare two numbers with ||   and console the result.

let compare8: boolean = i > 5 || j < 30;

console.log("Comparison of two numbers with || operator = " + compare8);

// Task 13 : Write a program to compare two numbers with !   and console the result.

let compare9: boolean = !(i > 5);

console.log("Comparison of two numbers with ! operator = " + compare9);

// ---------------------Activity 5 : Ternary Operators

// Task 14 : Write a program to compare two numbers using ternary operator and console the result.

let k: number = 10;
let l: number = 20;

let compare10: string = k > l ? "k is greater" : "l is greater";

console.log("Comparison of two numbers using ternary operator = " + compare10);
