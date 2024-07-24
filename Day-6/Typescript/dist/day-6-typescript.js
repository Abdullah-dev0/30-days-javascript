"use strict";
//  Activity 1 : Array creation and accessing elements
// Task 1 : create an array of numbers from 1 to 5 and conole.log the array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Task 2 : assess the first and last element of the array and console.log the result
console.log("First element of the array is " + numbers[0]);
console.log("Last element of the array is " + numbers[numbers.length - 1]);
// -- ----------------------- Acticity 2 : array methods Basic
// Task 3 : use the push method to add an element to the end of the array and console.log the array
numbers.push(23);
console.log("Array After using Push Method ", numbers);
// Task 4 : use the pop method to remove an element from the end of the array and console.log the array
numbers.pop();
console.log("Array After using pop Method ", numbers);
// Task 5 : use the shift method to remove  an element to the beginning of the array and console.log the array
numbers.shift();
console.log("Array After using Shift Method ", numbers);
// Task: 6 : use the unshift method to add an element to the beginning of the array and console.log the array
numbers.unshift(34);
console.log("Array After using unShift Method", numbers);
// -------------------------------- Activity 3 : Array methods intermediate
// Task 7 : use the map method to print new array where element is double of the original array and console.log the result
const doubleArray = numbers.map((number) => {
    return number + number;
});
console.log("doubled numbers Array", doubleArray);
// Task 8 : use the filter method to print new array where only even numbers are present and console.log the result
const evenNumberArray = numbers.filter((number) => {
    return number % 2 == 0;
});
console.log("Even numbers Array", evenNumberArray);
// Task 9 : use the reduce method to print the sum of all elements of the array and console.log the result
const newArray = [2, 3, 4, 5, 5];
const sum = newArray.reduce((num1, num2) => {
    return num1 + num2;
}, 0);
console.log("Sum of numbers =", sum);
// -------------------------- Activity 4 : Array iteration methods
// Task 10 : use the for loop method to print all elements of the array and console.log the result
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Task 11 : use the forEach method to print all elements of the array and console.log the result
console.log("using For each loop");
numbers.forEach((element, index) => {
    console.log("At index " + index + " " + "value = ", element);
});
