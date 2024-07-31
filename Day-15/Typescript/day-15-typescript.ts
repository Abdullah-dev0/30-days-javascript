// ------------------------------  Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function parentFunction(): () => void {
	const intro = "Hey I'm Abdullah A Full stack developer";

	function childFunction(): void {
		console.log(intro);
	}

	return childFunction;
}

const child = parentFunction();
child();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
	let count = 0;

	function increment(): void {
		count++;
	}

	function getCount(): void {
		console.log(count);
	}

	return { increment, getCount };
}

const myCounter = counter();

myCounter.increment();
myCounter.increment();
myCounter.getCount();

// ------------------------------  Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator(): () => number {
	let currentId = Math.floor(Math.random() * 1000);

	return function (): number {
		return currentId++;
	};
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId()); // 1
console.log(generateUniqueId()); // 2
console.log(generateUniqueId()); // 3

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function getUserName(username: string): () => void {
	return function greet(): void {
		console.log(`Hello ${username}, Welcome!`);
	};
}

const greetAbdullah = getUserName("Abdullah");
greetAbdullah();

// ------------------------------  Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const createFunctionArray = (): (() => void)[] => {
	const functions: (() => void)[] = [];

	for (let i = 0; i < 5; i++) {
		functions.push(
			((index: number) => {
				return function (): void {
					console.log("Function called at index", index);
				};
			})(i),
		);
	}

	return functions;
};

const functions = createFunctionArray();

for (let i = 0; i < functions.length; i++) {
	functions[i]();
}

// ------------------------------  Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

type ItemManager = {
	addItem: (item: string) => void;
	removeItem: (item: string) => void;
	listItems: () => void;
};

const createItemManager = (): ItemManager => {
	const items: string[] = [];

	return {
		addItem: (item: string) => {
			items.push(item);
			console.log(`${item} added.`);
		},
		removeItem: (item: string) => {
			const index = items.indexOf(item);
			if (index !== -1) {
				items.splice(index, 1);
				console.log(`${item} removed.`);
			} else {
				console.log(`${item} not found.`);
			}
		},
		listItems: () => {
			if (items.length > 0) {
				console.log("Items:", items.join(", "));
			} else {
				console.log("No items in the list.");
			}
		},
	};
};

const itemManager = createItemManager();

itemManager.addItem("Item1");
itemManager.addItem("Item2");
itemManager.listItems();
itemManager.removeItem("Item1");
itemManager.listItems();
itemManager.removeItem("Item3");
itemManager.listItems();

// ------------------------------  Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoizeFunction<T extends (...args: any[]) => any>(fn: T): T {
	const cache: { [key: string]: ReturnType<T> } = {};

	return function (...args: Parameters<T>): ReturnType<T> {
		const key = JSON.stringify(args);
		if (key in cache) {
			console.log("Fetching from cache");
			return cache[key];
		} else {
			const result = fn(...args);
			cache[key] = result;
			return result;
		}
	} as T;
}

function square(n: number): number {
	console.log("Calculating square");
	return n * n;
}

const memoizedSquare = memoizeFunction(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize<T extends (...args: any[]) => any>(fn: T): T {
	const cache: { [key: string]: ReturnType<T> } = {};

	return function (...args: Parameters<T>): ReturnType<T> {
		const key = JSON.stringify(args);
		if (key in cache) {
			console.log("Fetching from cache");
			return cache[key];
		} else {
			const result = fn(...args);
			cache[key] = result;
			return result;
		}
	} as T;
}

function factorial(n: number): number {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
