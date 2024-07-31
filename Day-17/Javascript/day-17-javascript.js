// ------------------------------  Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const node1 = new Node(1);
const node2 = new Node(2, node1);
const node3 = new Node(3, node2);

console.log("Node 3 value:", node3.value);
console.log("Node 3 next value:", node3.next.value);

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
	constructor() {
		this.head = null;
	}

	add(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	remove() {
		if (this.head === null) {
			console.log("List is empty");
			return;
		}

		if (this.head.next === null) {
			this.head = null;
			return;
		}

		let current = this.head;
		while (current.next.next !== null) {
			current = current.next;
		}
		current.next = null;
	}

	display() {
		let current = this.head;
		const values = [];
		if (current === null) {
			console.log("Linked List is (empty)");
			return;
		}
		while (current !== null) {
			values.push(current.value);
			current = current.next;
		}
		console.log("Linked List:", values.join(" -> "));
	}
}

const list = new LinkedList();

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

class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		return this.items.pop();
	}

	peek() {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	display() {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		console.log("Stack:", this.items.join(" <- "));
	}
}

const stack = new Stack();

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

class MyStack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		return this.items.pop();
	}

	peek() {
		if (this.isEmpty()) {
			console.log("Stack is empty");
			return;
		}
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	display() {
		console.log("Stack:", this.items.join(" <- "));
	}
}

function reverseString(str) {
	const stack = new MyStack();

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

class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		return this.items.shift();
	}

	front() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		return this.items[0];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	display() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		console.log("Queue:", this.items.join(" <- "));
	}
}

const queue = new Queue();

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
	constructor() {
		this.queue = new Queue();
	}

	addPrintJob(job) {
		this.queue.enqueue(job);
		console.log(`Added print job: ${job}`);
	}

	processPrintJob() {
		if (this.queue.isEmpty()) {
			console.log("No print jobs to process");
			return;
		}
		const job = this.queue.dequeue();
		console.log(`Processed print job: ${job}`);
	}

	showQueue() {
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

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const nodeA = new TreeNode("A");

const nodeB = new TreeNode("B");

const nodeC = new TreeNode("C");

nodeA.left = nodeB;

nodeA.right = nodeC;

console.log("Node A value:", nodeA.value);
console.log("Node A left value:", nodeA.left.value);
console.log("Node A right value:", nodeA.right.value);

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
			return;
		}
		this.insertRecursively(this.root, newNode);
	}

	insertRecursively(node, newNode) {
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

	inOrderTraversal(node = this.root) {
		if (node !== null) {
			this.inOrderTraversal(node.left);
			console.log(node.value);
			this.inOrderTraversal(node.right);
		}
	}
}

const binaryTree = new BinaryTree();

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
	constructor() {
		this.adjacencyList = new Map();
	}

	addVertex(vertex) {
		if (!this.adjacencyList.has(vertex)) {
			this.adjacencyList.set(vertex, []);
		}
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList.has(vertex1)) {
			this.addVertex(vertex1);
		}
		if (!this.adjacencyList.has(vertex2)) {
			this.addVertex(vertex2);
		}
		this.adjacencyList.get(vertex1).push(vertex2);
		this.adjacencyList.get(vertex2).push(vertex1);
	}

	bfs(start) {
		const queue = [start];
		const visited = new Set();
		const result = [];

		visited.add(start);

		while (queue.length > 0) {
			const vertex = queue.shift();
			result.push(vertex);

			for (const neighbor of this.adjacencyList.get(vertex)) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}

		return result;
	}

	// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

	shortestPath(start, end) {
		if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
			return null;
		}

		const queue = [start];
		const visited = new Set();
		const predecessors = new Map();

		visited.add(start);
		predecessors.set(start, null);

		while (queue.length > 0) {
			const vertex = queue.shift();

			if (vertex === end) {
				break;
			}

			for (const neighbor of this.adjacencyList.get(vertex)) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
					predecessors.set(neighbor, vertex);
				}
			}
		}

		const path = [];
		let step = end;

		while (step !== null) {
			path.unshift(step);
			step = predecessors.get(step);
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