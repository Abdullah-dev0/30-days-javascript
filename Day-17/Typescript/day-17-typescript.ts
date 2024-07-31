// ------------------------------  Activity 1: Linked List

// Task 1: Implement a ListNode class to represent an element in a linked list with properties value and next.

class ListNode<T> {
	value: T;
	next: ListNode<T> | null;

	constructor(value: T, next: ListNode<T> | null = null) {
		this.value = value;
		this.next = next;
	}
}

// Test ListNode class
const node1 = new ListNode(1);
const node2 = new ListNode(2, node1);
const node3 = new ListNode(3, node2);

console.log("Node 3 value:", node3.value);
console.log("Node 3 next value:", node3.next?.value);

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList<T> {
	head: ListNode<T> | null = null;

	add(value: T): void {
		const newNode = new ListNode(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current: ListNode<T> = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	remove(): void {
		if (this.head === null) {
			console.log("List is empty");
			return;
		}

		if (this.head.next === null) {
			this.head = null;
			return;
		}

		let current = this.head;
		while (current.next?.next !== null) {
			// @ts-ignore
			current = current.next;
		}
		current.next = null;
	}

	display(): void {
		let current = this.head;
		const values: T[] = [];
		while (current !== null) {
			values.push(current.value);
			current = current.next;
		}
		console.log("Linked List:", values.join(" -> "));
	}
}

// Create a LinkedList of numbers and perform operations
const list = new LinkedList<number>();

list.add(1);
list.add(2);
list.add(3);
list.display();

list.remove();
list.display();

list.remove();
list.display();

list.remove();
list.display();

// ------------------------------  Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack<T> {
	private items: T[] = [];

	push(element: T): void {
		this.items.push(element);
	}

	pop(): T | undefined {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		return this.items.pop();
	}

	peek(): T | undefined {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		return this.items[this.items.length - 1];
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	display(): void {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		console.log("Stack:", this.items.join(" <- "));
	}
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.display();

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
console.log("Pop:", stack.pop());
stack.display();

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str: string): string {
	const stack = new Stack<string>();

	for (const char of str) {
		stack.push(char);
	}

	let reversed = "";
	while (!stack.isEmpty()) {
		reversed += stack.pop();
	}

	return reversed;
}

const originalString = "hello";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

// ------------------------------  Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue<T> {
	private items: T[] = [];

	enqueue(element: T): void {
		this.items.push(element);
	}

	dequeue(): T | undefined {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		return this.items.shift();
	}

	front(): T | undefined {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		return this.items[0];
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	display(): void {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		console.log("Queue:", this.items.join(" <- "));
	}
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();

console.log("Front:", queue.front());

console.log("Dequeue:", queue.dequeue());
queue.display();

console.log("Dequeue:", queue.dequeue());
console.log("Dequeue:", queue.dequeue());

queue.display();

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue {
	private queue = new Queue<string>();

	addPrintJob(job: string): void {
		this.queue.enqueue(job);
		console.log(`Added print job: ${job}`);
	}

	processPrintJob(): void {
		if (this.queue.isEmpty()) {
			console.log("No print jobs to process");
			return;
		}
		const job = this.queue.dequeue();
		console.log(`Processed print job: ${job}`);
	}

	showQueue(): void {
		this.queue.display();
	}
}

const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Document2.docx");
printerQueue.addPrintJob("Photo.jpg");

printerQueue.showQueue();
printerQueue.processPrintJob();
printerQueue.processPrintJob();

printerQueue.showQueue();

printerQueue.processPrintJob();
printerQueue.processPrintJob();

printerQueue.showQueue();

// ------------------------------  Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode<T> {
	value: T;
	left: TreeNode<T> | null = null;
	right: TreeNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
	}
}

const nodeA = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");

nodeA.left = nodeB;
nodeA.right = nodeC;

console.log("Node A value:", nodeA.value);
console.log("Node A left value:", nodeA.left?.value);
console.log("Node A right value:", nodeA.right?.value);

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree<T> {
	private root: TreeNode<T> | null = null;

	insert(value: T): void {
		const newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertRecursively(this.root, newNode);
		}
	}

	private insertRecursively(node: TreeNode<T>, newNode: TreeNode<T>): void {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertRecursively(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertRecursively(node.right, newNode);
			}
		}
	}

	inOrderTraversal(node: TreeNode<T> | null = this.root): void {
		if (node !== null) {
			this.inOrderTraversal(node.left);
			console.log(node.value);
			this.inOrderTraversal(node.right);
		}
	}
}

const binaryTree = new BinaryTree<number>();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order traversal of the binary tree:");
binaryTree.inOrderTraversal();

// ------------------------------  Activity 5: Graph (Optional)

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
	private adjacencyList: Map<string, string[]> = new Map();

	addVertex(vertex: string): void {
		if (!this.adjacencyList.has(vertex)) {
			this.adjacencyList.set(vertex, []);
		}
	}

	addEdge(vertex1: string, vertex2: string): void {
		if (!this.adjacencyList.has(vertex1)) {
			this.addVertex(vertex1);
		}
		if (!this.adjacencyList.has(vertex2)) {
			this.addVertex(vertex2);
		}
		this.adjacencyList.get(vertex1)?.push(vertex2);
		this.adjacencyList.get(vertex2)?.push(vertex1);
	}

	bfs(start: string): string[] {
		const queue: string[] = [start];
		const visited = new Set<string>();
		const result: string[] = [];

		visited.add(start);

		while (queue.length > 0) {
			const vertex = queue.shift()!;
			result.push(vertex);

			for (const neighbor of this.adjacencyList.get(vertex) || []) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}

		return result;
	}

	// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

	shortestPath(start: string, end: string): string[] | null {
		if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
			return null;
		}

		const queue: string[] = [start];
		const visited = new Set<string>();
		const predecessors = new Map<string, string | null>();

		visited.add(start);
		predecessors.set(start, null);

		while (queue.length > 0) {
			const vertex = queue.shift()!;

			if (vertex === end) {
				break;
			}

			for (const neighbor of this.adjacencyList.get(vertex) || []) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
					predecessors.set(neighbor, vertex);
				}
			}
		}

		const path: string[] = [];
		let step: string | null = end;

		while (step !== null) {
			path.unshift(step);
			step = predecessors.get(step) || null;
		}

		return path[0] === start ? path : null;
	}
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

const shortestPath = graph.shortestPath("A", "E");

console.log("BFS traversal starting from A:", graph.bfs("A"));
console.log("Shortest path from A to E:", shortestPath);
