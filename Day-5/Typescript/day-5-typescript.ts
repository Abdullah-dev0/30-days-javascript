// ------------------ Activity 1 : function declaration

// Task 1 : write a program to check whether a number is even or odd using function amd console.log the result

function checkEvenOdd(num: number): void {
	if (num % 2 == 0) {
		console.log("The number is Even");
	} else {
		console.log("The number is Odd");
	}
}

checkEvenOdd(233);

// Task 2 : write a program to find the square of a number using function and console.log the result

function square(num: number): number {
	return num * num;
}

console.log("Square of number  is " + square(5));

//   ----------------------- Activity 2 : function expression

// Task 3 : write a program to find the Maximum of two numbers using function expression and console.log the result

const max = function (num1: number, num2: number): number {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};

console.log("Maximum of two numbers is " + max(10, 20));

// Task 4 : write a program to concatenate two strings using function expression and console.log the result

const concat = function (str1: string, str2: string): string {
	return str1 + str2;
};

console.log("Concatenated string is " + concat("Hello", "World"));

// ------------------------ Activity 3 : Arrow functions

// Task 5 : write a program to find the sum of two numbers using arrow function and console.log the result

const sum = (num1: number, num2: number) => num1 + num2;

console.log("Sum of two numbers is " + sum(10, 20));

// Task 6 : write a program to check if the string contains a specific character using arrow function and return boolean value

const checkChar = (str: string, char: string) => str.includes(char);

console.log("String contains character : " + checkChar("Hello", "e"));

// ------------------------ Activity 4 : Function  parameters and Default values

// Task 7 : write a program to find the product of two numbers using function parameters and default values and console.log the result

function product(num1: number, num2: number = 5): number {
	return num1 * num2;
}

console.log("Product of two numbers is " + product(10));

// Task 8 : write a program to greet a person with his name and age using function parameters and default values and console.log the result

function greeting(Name: string, age: number = 18): void {
	console.log("Hello " + Name + " your age is " + age);
}

greeting("John", 25);

// ------------------------ Activity 5 : High order functions

// Task 9 : write a Hight order funtion that takes a function and number and calls the function that many times.

function callFunction(func: () => void, num: number): void {
	for (let i = 0; i < num; i++) {
		func();
	}
}

function greet(): void {
	console.log("Hello World");
}

callFunction(greet, 5);

// Task 10 : write a Hight order funtion that takes two functions and a value apply the first function to the value and then the second function to the result.

function applyFunctions(func1: (num: number) => number, func2: (num: number) => number, value: number) {
	return func2(func1(value));
}

function square2(num: number): number {
	return num * num;
}

function addFive(num: number): number {
	return num + 5;
}

console.log(applyFunctions(square2, addFive, 5));
