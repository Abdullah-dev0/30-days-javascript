"use strict";
// -------------------Activity 1 Arithemetic  operators
// Task 1 : Write a program to add two numbers and console the result.
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum of two numbers = " + sum);
// Task 2 : Write a program to subtract two numbers and console the result.
let sub = a - b;
console.log("subtraction of two numbers = " + sub);
// Task 3 : Write a program to multiply two numbers and console the result.
let mul = a * b;
console.log("multiplycation of two numbers = " + mul);
// Task 4 : Write a program to divide two numbers and console the result.
let div = a / b;
console.log("divition of two numbers = " + div);
// Task 5 : Write a program to find the remainder when two numbers are divided and console the result.
let mod = a % b;
console.log("Reminder of two numbers = " + mod);
// --------------------------Activity 2 : Assigment Operators
// Task 6 : Write a program to add two numbers using += operator and console the result.
let addTwoNum = 10;
let subtractTwoNum = 20;
addTwoNum += 5;
console.log("Sum of two numbers using += operator = " + addTwoNum);
// Task 7 : Write a program to subtract two numbers using -= operator and console the result.
subtractTwoNum -= 5;
console.log("Subtraction of two numbers using -= operator = " + subtractTwoNum);
// ---------------------Activity 3 : Comparison Operators
// Task 8 : Write a program to compare two numbers with <  and this  >  and console the result.
let e = 10;
let f = 10;
let compare1 = e < f;
let compare2 = e > f;
console.log("Comparison of two numbers with < operator = " + compare1);
console.log("Comparison of two numbers with > operator = " + compare2);
// Task 9 : Write a program to compare two numbers with <=  and this  >=  and console the result.
let compare3 = e <= f;
let compare4 = e >= f;
console.log("Comparison of two numbers with <= operator = " + compare3);
console.log("Comparison of two numbers with >= operator = " + compare4);
// Task 10 : Write a program to compare two numbers with ==  and this  ===  and console the result.
let g = 10;
let h = "10";
// let compare5: boolean = g == h;
// let compare6: boolean = g === h;
// // typescript error : This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
// console.log("Comparison of two numbers with == operator = " + compare5);
// console.log("Comparison of two numbers with === operator = " + compare6);
// ---------------------Activity 4 : Logical Operators
// Task 11 : Write a program to compare two numbers with &&   and console the result.
let i = 10;
let j = 20;
let compare7 = i > 5 && j < 30;
console.log("Comparison of two numbers with && operator = " + compare7);
// Task 12 : Write a program to compare two numbers with ||   and console the result.
let compare8 = i > 5 || j < 30;
console.log("Comparison of two numbers with || operator = " + compare8);
// Task 13 : Write a program to compare two numbers with !   and console the result.
let compare9 = !(i > 5);
console.log("Comparison of two numbers with ! operator = " + compare9);
// ---------------------Activity 5 : Ternary Operators
// Task 14 : Write a program to compare two numbers using ternary operator and console the result.
let k = 10;
let l = 20;
let compare10 = k > l ? "k is greater" : "l is greater";
console.log("Comparison of two numbers using ternary operator = " + compare10);
