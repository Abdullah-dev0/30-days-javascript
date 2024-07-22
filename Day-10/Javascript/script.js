//  --------------------------------- Activity 1: Basic Event Handling

//  Task 1 :  Add a click event listener to a button that changes the text content of a paragraph.

const getButton = document.getElementById("btn-task-1");
const content = document.getElementById("content");

getButton.addEventListener("click", () => {
	content.innerHTML = "Helo My name is Abdullah";
});

//  Task 2 : Add a double-click event listener to an image that toggles its visibility.

const getButton2 = document.getElementById("btn-task-2");
const getImage = document.getElementById("task-2");

getButton2.addEventListener("dblclick", () => {
	getImage.style.display = getImage.style.display === "none" ? "block" : "none";
});

// --------------------- Activity 2: Mouse Events

// Task 3 :  Add a mouseover event listener to an element that changes its background color.

const Element = document.getElementById("task-3");

Element.addEventListener("mouseover", () => {
	Element.style.backgroundColor = "red";
});

// Task 4 :  Add a mouseout event listener to an element that resets its background color.

const Element2 = document.getElementById("task-4");
Element2.addEventListener("mouseout", () => {
	Element2.style.backgroundColor = "white";
});

// --- ------------------ Activity 3 : keyboard Events

// Task 5 :   Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.getElementById("task-5");

input.addEventListener("keydown", (e) => {
	console.log(e.key);
});

// Task 6 :  Add a keyup event listener to an input field that displays the current value in a paragraph.

const input2 = document.getElementById("task-6");

input2.addEventListener("keyup", (e) => {
	const currentValue = document.getElementById("task-6-value");
	const getContent = currentValue.innerHTML;
	console.log(getContent);
});

// ----------------------- Activity 4 : Form Events

// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById("task-7");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(e.target); // Get the form data
	const formEntries = Object.fromEntries(formData.entries()); // Convert to an object

	console.log(formEntries); // Log the form data to the console
});

// Task 8 :  Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select = document.getElementById("task-8");
const paragraph = document.getElementById("selected-value");

select.addEventListener("change", (e) => {
	currentValue = e.target.value;
	paragraph.innerHTML = currentValue;
});

// ------------------- Activity 5 : Event Delegation

// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("task-9");

list.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		console.log(e.target.textContent);
	}
});

// Task 10 :  Add an event listener to a parent element that listens for events from dynamically added child elements.



const parent = document.getElementById("parent");
const addChild = document.getElementById("addChild");

// Event listener for parent element
parent.addEventListener("click", function(event) {
	if (event.target.classList.contains("child-button")) {
		alert(`Child button clicked: ${event.target.textContent}`);
	}
});

// Adding a new child button
addChild.addEventListener("click", function() {
	const newButton = document.createElement("button");
	newButton.textContent = `Child Button ${parent.children.length}`;
	newButton.className = "child-button";
	parent.appendChild(newButton);
});
