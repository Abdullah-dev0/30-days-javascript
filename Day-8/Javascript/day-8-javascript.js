// Es6 features

// --------------------- Activity 1: Template literals

// Task 1 : Use template literals to Create a String that includes variables for a person's name, age. Then log the string to the console.

let Name = "Abdullah";
let age = 23;

const intro = `Helo my name is ${Name} and my age is ${age} and i Am a full Stack Developer`;

console.log(intro);

// Task 2 : Create a multi line string using template literals. Then log the string to the console.

console.log("------------Printing MultiLineSting-----------");

const multiLineSting = `Helo Guyz 
my name is Abdullah
and my age is 23 
and i am a full stack developer
`;

console.log(multiLineSting);

// ---------------- Activity 2: Destructuring

// Task 3 : Use Array destructing to extract the first and second value from the array of numbers  and log to the console.
const array = [1, 23, 3, 4, 5, 5];
const [first, second] = array;

console.log("first number of array = " + first + " Second number if array = " + second);

// Task 4 : Use Object destructing to extract the title and author from the object and log them to the console.

const book = {
	title: "The Art of being alone",
	author: "Abdullah",
};

const { title, author } = book;

console.log("The title of book : " + title + "    " + "The author of book : " + author);

// ---------------------------- Activity 3: Spread Operator and Rest operators

// Task 5 : Use the spread operator to create new array that includes all element of an existing array and add an additional element to the new array. Then log the new array to the console.

const array2 = [1, 2, 3];

const newArray = [...array2, 4, 5, 6, 7];

console.log(newArray);

// Task 6 : Use the rest operator to create a function that accpect an arbitrary number of arguments , sum them and return the result.

const sum = (...args) => {
	return args.reduce((a, b) => a + b, 0);
};

console.log("Sum of numbers = " + sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// --------------------- Activity 4: Default parameters

// Task 7 : Create a function that accepts two parameters, and return there product , with the second parameter default to 1. Log the result if calling this function with and without the second parameter.

function product(num1, num2 = 1) {
	return num1 * num2;
}

console.log("Product with both parameters = ", product(2, 22));

function product2(num1, num2 = 1) {
	return num1 * num2;
}

console.log("Product wihtout 2 parameter = ", product2(19));

// ---------------------------- Activity 5: Enhanced Object Literals

// Task 8 : Use the enhanced object literals to create an object with method and properties , and log them to the console.

const obj = {
	name: "Abdullah",
	age: 23,
	profession: "Full Stack Developer",
	getInfo() {
		return `My name is ${this.name} and my age is ${this.age} and i am a ${this.profession}`;
	},
};

console.log(obj);

// Task 9:Create an onject with computed property names based on variable and log the object to the console.

const key = "name";
const key2 = "age";
const key3 = "profession";

const obj2 = {
	[key]: "Abdullah",
	[key2]: 23,
	[key3]: "Full Stack Developer",
};

console.log(obj2);

console.log("Keys of Objects = ", Object.keys(obj2));
