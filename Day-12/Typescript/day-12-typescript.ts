// ------------------------------ Activity 1: Basic Error Handling with Try-Catch

// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function logErrorMessage(): void {
	try {
		throw new Error(`This is an intentional error`);
	} catch (error: any) {
		console.log(error.message);
	}
}

logErrorMessage();

// Task : 2  Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(num1: number, num2: number): void {
	try {
		if (num2 === 0) {
			throw new Error("Denominator cannot be zero");
		}
		console.log(num1 / num2);
	} catch (error: any) {
		console.log(error.message);
	}
}

console.log("Dividing Numbers");
divideNumbers(10, 4);
console.log("Dividing Numbers with Denominator as 0");
divideNumbers(10, 0);

// ----------------------------------- Activity 2: Finally Block

// Task 3 : Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
	console.log("This is Try block");
	throw new Error("error");
} catch (error: any) {
	console.log("this is Error block", error.message);
} finally {
	console.log("This is Finally block");
}

// -------------------------------------- Activity 3: Custom Error Objects

// Task 4 :  Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "customError";
	}
}

function throwError(): void {
	throw new CustomError("This is a custom error");
}

try {
	throwError();
} catch (error: any) {
	console.log(error.message);
}

// Task : 5  Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validateInput(input: String): void {
	if (input === "") {
		throw new CustomError("Input cannot be empty");
	}
	console.log(input);
}

try {
	validateInput("helo My name is Abdullah");
} catch (error: any) {
	console.log(error.message);
}

// -------------------------------------- Activity 4: Error Handling in Promises

// Task 6 :  Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

// Task 7 :  Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// --------------------------------------- Activity 5: Graceful Error Handling in Fetch

// Task 8 :  Use the fetch  API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.

// Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
