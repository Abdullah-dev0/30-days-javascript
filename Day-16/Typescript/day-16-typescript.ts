// ------------------------------  Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n: number): number {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120
console.log("Factorial of 0:", factorial(0)); // 1

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n: number): number {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 5:", fibonacci(5)); // 5
console.log("Fibonacci of 10:", fibonacci(10)); // 55

// ------------------------------  Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr: number[]): number {
	if (arr.length === 0) {
		return 0;
	}
	return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5])); // 15
console.log("Sum of [10, 20, 30]:", sumArray([10, 20, 30])); // 60

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr: number[]): number {
	if (arr.length === 1) {
		return arr[0];
	}
	const restMax = maxArray(arr.slice(1));
	return arr[0] > restMax ? arr[0] : restMax;
}

console.log("Max of [1, 2, 3, 4, 5]:", maxArray([1, 2, 3, 4, 5])); // 5
console.log("Max of [10, 20, 30, 5]:", maxArray([10, 20, 30, 5])); // 30

// ------------------------------  Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str: string): string {
	if (str === "") {
		return "";
	}
	return reverseString(str.slice(1)) + str[0];
}

console.log("Reverse of 'hello':", reverseString("hello")); // "olleh"
console.log("Reverse of 'abcd':", reverseString("abcd")); // "dcba"

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str: string): boolean {
	if (str.length <= 1) {
		return true;
	}
	if (str[0] !== str[str.length - 1]) {
		return false;
	}
	return isPalindrome(str.slice(1, -1));
}

console.log("'racecar' is palindrome:", isPalindrome("racecar")); // true
console.log("'hello' is palindrome:", isPalindrome("hello")); // false

// ------------------------------  Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr: number[], target: number, start: number = 0, end: number = arr.length - 1): number {
	if (start > end) {
		return -1;
	}
	const mid = Math.floor((start + end) / 2);
	if (arr[mid] === target) {
		return mid;
	}
	if (arr[mid] > target) {
		return binarySearch(arr, target, start, mid - 1);
	} else {
		return binarySearch(arr, target, mid + 1, end);
	}
}

console.log("Index of 3 in [1, 2, 3, 4, 5]:", binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log("Index of 6 in [1, 2, 3, 4, 5]:", binarySearch([1, 2, 3, 4, 5], 6)); // -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr: number[], target: number): number {
	if (arr.length === 0) {
		return 0;
	}
	return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log("Occurrences of 2 in [1, 2, 3, 2, 2, 4, 2]:", countOccurrences([1, 2, 3, 2, 2, 4, 2], 2)); // 4
console.log("Occurrences of 6 in [1, 2, 3, 4, 5]:", countOccurrences([1, 2, 3, 4, 5], 6)); // 0

// ------------------------------  Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
	value: number;
	left: TreeNode | null = null;
	right: TreeNode | null = null;

	constructor(value: number) {
		this.value = value;
	}
}

function inOrderTraversal(node: TreeNode | null): void {
	if (node !== null) {
		inOrderTraversal(node.left);
		console.log(node.value);
		inOrderTraversal(node.right);
	}
}

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function treeDepth(node: TreeNode | null): number {
	if (node === null) {
		return 0;
	}
	const leftDepth = treeDepth(node.left);
	const rightDepth = treeDepth(node.right);
	return Math.max(leftDepth, rightDepth) + 1;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("In-order traversal of the tree:");
inOrderTraversal(root); // 4, 2, 5, 1, 3
console.log("Depth of the tree:", treeDepth(root)); // 3
