"use strict";
// ------------------ Activity 1 : for loops
// Task 1 : write a program to print numbers from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Task 2 : write a program to print multiplication table of 5 using for loop
console.log("print multiplication table of 5");
for (let i = 1; i <= 10; i++) {
    console.log("5 * " + i + " = " + 5 * i);
}
//  ----------------------- Activity 2 : while loops
// Task 1 : write a program to sum of numbers from 1 to 10 using while loop
console.log("sum of numbers from 1 to 10");
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("sum of numbers = " + sum);
// Task 2 : write a program to print numbers from 10 to 1 using while loop
console.log("print numbers from 10 to 1 using while loop");
let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}
// ------------------------ Activity 3 : do while loops
// Task 5 : write a program to print numbers from 1 to 5 using do while loop
console.log("print numbers from 1 to 5 using do while loop");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
// Task 6 : write a program to print numbers from 10 to 1 using do while loop
console.log("print numbers from 10 to 1 using do while loop");
let a = 10;
do {
    console.log(a);
    a--;
} while (a >= 1);
// -------------------- Activity 4 : nested loops
// task 7 : write a program to print the following pattern using nested loops
console.log("print the following pattern using nested loops");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
// Activity 5 : break and continue
// Task 8 : write a program to print numbers from 1 to 10 using for loop but skip the number 5 using continue statement
console.log("print numbers from 1 to 10 using for loop but skip the number 5 using continue statement");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Task 9 : write a program to print numbers from 1 to 10 using for loop but break the loop when the number is 7 using break statement
console.log("print numbers from 1 to 10 using for loop but break the loop when the number is 7 using break statement");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
