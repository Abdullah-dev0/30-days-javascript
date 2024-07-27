// ------------------------------------- Activity 1: Creating and Exporting Modules
import { add } from "./modules/add";

console.log(" Sum of ", add(2, 3)); // 5

// - Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import { person } from "./modules/person";
console.log("Name of person" + person.name); // John Doe

person.greet(); // Hello, I am John Doe!

// -------------------------------- Activity 2: Named and Default Exports

// - Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { subtract, multiply, divide } from "./modules/namedExports";

console.log("Subtraction = ", subtract(5, 3)); // 2

console.log("Multiplication = ", multiply(5, 3)); // 15

console.log("Division = ", divide(6, 3)); // 2

// - Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import { fabonachi } from "./modules/singleFunction";

console.log("Fabonachi = ", fabonachi(7));

//--------------------------------  Activity 3: Importing Entire Modules

// - Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import constants from "./modules/constants";

console.log("Name = ", constants.Name);

console.log("Power = ", constants.power(2, 3));

console.log("Fibonacci = ", constants.fibonacci(7));

console.log("Factorial = ", constants.factorial(5));

// ----------------------------------- Activity 4: Using Third-Party Modules

// - Task 6: Install a third-party module (e.g., `lodash`) using npm. Import and use a function from this module in a script.

import _ from "lodash";

const arr: number[] = [1, 2, 3, 4, 5];

console.log("Sum of array = ", _.sum(arr));

const string: string = "Hello, World!";

console.log("String Length = ", _.size(string));

const ReverseArray: number[] = [1, 2, 3];

const ReversedArray = _.reverse(ReverseArray);

console.log("Reversed Array = ", ReversedArray);

// - Task 7: Install a third-party module (e.g., `axios`) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

const response = axios.get("https://jsonplaceholder.typicode.com/posts/4");

response
	.then((res: any) => {
		console.log("Response = ", res.data);
	})
	.catch((err: any) => {
		console.log("Error = ", err);
	});

//       --------------------------------------- Activity 5: Module Bundling

// - Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// ----------------> see task-8 folder <------------------
