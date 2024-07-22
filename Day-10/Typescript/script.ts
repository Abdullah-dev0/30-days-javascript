//  --------------------------------- Activity 1: Basic Event Handling

//  Task 1 :  Add a click event listener to a button that changes the text content of a paragraph.

const getButton: HTMLElement = document.getElementById("btn-task-1")!;
const content: HTMLElement = document.getElementById("content")!;

getButton.addEventListener("click", () => {
	content.textContent = "Hello, my name is Abdullah";
});

//  Task 2 : Add a double-click event listener to an image that toggles its visibility.

const getButton2: HTMLElement = document.getElementById("btn-task-2")!;
const getImage: HTMLElement = document.getElementById("task-2")!;

getButton2.addEventListener("dblclick", () => {
	getImage.style.display = getImage.style.display === "none" ? "block" : "none";
});

// --------------------- Activity 2: Mouse Events

// Task 3 :  Add a mouseover event listener to an element that changes its background color.

const element3: HTMLElement = document.getElementById("task-3")!;

element3.addEventListener("mouseover", () => {
	element3.style.backgroundColor = "red";
});

// Task 4 :  Add a mouseout event listener to an element that resets its background color.

const element4: HTMLElement = document.getElementById("task-4")!;
element4.addEventListener("mouseout", () => {
	element4.style.backgroundColor = "white";
});

// --- ------------------ Activity 3 : Keyboard Events

// Task 5 :   Add a keydown event listener to an input field that logs the key pressed to the console.

const input: HTMLInputElement = document.getElementById("task-5") as HTMLInputElement;

input.addEventListener("keydown", (e: KeyboardEvent) => {
	console.log(e.key);
});

// Task 6 :  Add a keyup event listener to an input field that displays the current value in a paragraph.

const input2: HTMLInputElement = document.getElementById("task-6") as HTMLInputElement;

input2.addEventListener("keyup", (e: KeyboardEvent) => {
	const currentValue: HTMLElement = document.getElementById("task-6-value")!;
	currentValue.textContent = input2.value;
});

// ----------------------- Activity 4 : Form Events

// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById("task-7") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	const formData = new FormData(e.target as HTMLFormElement); // Get the form data
	const formEntries = Object.fromEntries(formData.entries()); // Convert to an object

	console.log(formEntries); // Log the form data to the console
});

// Task 8 :  Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select: HTMLSelectElement = document.getElementById("task-8") as HTMLSelectElement;
const paragraph: HTMLElement = document.getElementById("selected-value")!;

select.addEventListener("change", (e: Event) => {
	const target = e.target as HTMLSelectElement;
	const currentValue = target.value;
	paragraph.textContent = currentValue;
});

// ------------------- Activity 5 : Event Delegation

// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list: HTMLElement = document.getElementById("task-9")!;

list.addEventListener("click", (e: Event) => {
	const target = e.target as HTMLElement;
	if (target.tagName === "LI") {
		console.log(target.textContent);
	}
});

// Task 10 :  Add an event listener to a parent element that listens for events from dynamically added child elements.

// Proper type assertions for elements
const parent2: HTMLElement = document.getElementById("parent") as HTMLElement;
const addChild: HTMLElement = document.getElementById("addChild") as HTMLElement;

// Event listener for parent element
parent2.addEventListener("click", function (event: Event) {
	const target = event.target as HTMLElement;
	if (target.classList.contains("child-button")) {
		alert(`Child button clicked: ${target.textContent}`);
	}
});

// Adding a new child button
addChild.addEventListener("click", function (): void {
	const newButton: HTMLButtonElement = document.createElement("button");
	newButton.textContent = `Child Button ${parent2.children.length}`;
	newButton.className = "child-button";
	parent2.appendChild(newButton);
});
