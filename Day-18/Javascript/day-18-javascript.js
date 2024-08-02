// ------------------------------------------- Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

const array1 = [5, 3, 8, 4, 2];
console.log("Bubble Sort:", bubbleSort(array1));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
}

const array2 = [5, 3, 8, 4, 2];
console.log("Selection Sort:", selectionSort(array2));

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr) {
	if (arr.length <= 1) return arr;

	const pivot = arr[Math.floor(arr.length / 2)];
	const left = [];
	const right = [];
	const equal = [];

	for (let num of arr) {
		if (num < pivot) left.push(num);
		else if (num > pivot) right.push(num);
		else equal.push(num);
	}

	return [...quickSort(left), ...equal, ...quickSort(right)];
}

const array3 = [5, 3, 8, 4, 2];
console.log("Quicksort:", quickSort(array3));

// ------------------------------------------- Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}

const array4 = [5, 3, 8, 4, 2];
console.log("Linear Search:", linearSearch(array4, 4));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
}

const array5 = [2, 3, 4, 5, 8];
console.log("Binary Search:", binarySearch(array5, 4));

// ------------------------------------------- Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
	const counts = {};
	for (let char of str) {
		counts[char] = counts[char] ? counts[char] + 1 : 1;
	}
	return counts;
}

const string1 = "hello";
console.log("Character Counts:", countCharacterOccurrences(string1));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeatingCharacters(str) {
	let longest = 0;
	let current = "";
	for (let char of str) {
		if (current.includes(char)) {
			current = current.slice(current.indexOf(char) + 1);
		}
		current += char;
		longest = Math.max(longest, current.length);
	}
	return longest;
}

const string2 = "abcabcbb";
console.log("Longest Substring Length:", longestSubstringWithoutRepeatingCharacters(string2));

// ------------------------------------------- Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by `k` positions. Log the rotated array.

function rotateArray(arr, k) {
	k = k % arr.length;
	return arr.slice(-k).concat(arr.slice(0, -k));
}

const array6 = [1, 2, 3, 4, 5];
console.log("Rotated Array:", rotateArray(array6, 2));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
	let i = 0;
	let j = 0;
	const merged = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}
	return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

const array7 = [1, 3, 5];
const array8 = [2, 4, 6];
console.log("Merged Array:", mergeSortedArrays(array7, array8));

// ------------------------------------------- Activity 5: Dynamic Programming (Optional)

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
	const dp = [0, 1];
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp.slice(0, n + 1);
}

console.log("Fibonacci Sequence:", fibonacci(10));

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(weights, values, capacity) {
	const n = weights.length;
	const dp = Array(n + 1)
		.fill()
		.map(() => Array(capacity + 1).fill(0));

	for (let i = 1; i <= n; i++) {
		for (let w = 0; w <= capacity; w++) {
			if (weights[i - 1] <= w) {
				dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
			} else {
				dp[i][w] = dp[i - 1][w];
			}
		}
	}

	return dp[n][capacity];
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;
console.log("Knapsack Maximum Value:", knapsack(weights, values, capacity));
