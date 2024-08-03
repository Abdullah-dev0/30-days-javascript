// ------------------------------------------- Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.



localStorage.setItem("stringKey", "Hello, LocalStorage!");
console.log(localStorage.getItem("stringKey"));



// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.



const userObject = { name: "John Doe", email: "john@example.com" };
localStorage.setItem("user", JSON.stringify(userObject));
console.log(JSON.parse(localStorage.getItem("user")));

// ------------------------------------------- Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.



document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#localStorageForm");
	const nameInput = document.querySelector("#name");
	const emailInput = document.querySelector("#email");
	const display = document.querySelector("#display");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		localStorage.setItem("name", nameInput.value);
		localStorage.setItem("email", emailInput.value);
		displayData();
	});

	function displayData() {
		const name = localStorage.getItem("name");
		const email = localStorage.getItem("email");
		if (name && email) {
			display.textContent = `Name: ${name}, Email: ${email}`;
		}
	}

	displayData();
});



// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.



console.log("Before removal:", localStorage);
localStorage.removeItem("stringKey");
console.log("After removal:", localStorage);

// ------------------------------------------- Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.


sessionStorage.setItem("sessionStringKey", "Hello, SessionStorage!");
console.log(sessionStorage.getItem("sessionStringKey"));



// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.



const sessionUserObject = { name: "Jane Doe", email: "jane@example.com" };
sessionStorage.setItem("sessionUser", JSON.stringify(sessionUserObject));
console.log(JSON.parse(sessionStorage.getItem("sessionUser")));




// ------------------------------------------- Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.



document.addEventListener("DOMContentLoaded", () => {
	const sessionForm = document.querySelector("#sessionForm");
	const sessionNameInput = document.querySelector("#sessionName");
	const sessionEmailInput = document.querySelector("#sessionEmail");
	const sessionDisplay = document.querySelector("#sessionDisplay");

	sessionForm.addEventListener("submit", (e) => {
		e.preventDefault();
		sessionStorage.setItem("sessionName", sessionNameInput.value);
		sessionStorage.setItem("sessionEmail", sessionEmailInput.value);
		displaySessionData();
	});

	function displaySessionData() {
		const sessionName = sessionStorage.getItem("sessionName");
		const sessionEmail = sessionStorage.getItem("sessionEmail");
		if (sessionName && sessionEmail) {
			sessionDisplay.textContent = `Name: ${sessionName}, Email: ${sessionEmail}`;
		}
	}

	displaySessionData();
});



// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.



console.log("Before removal:", sessionStorage);
sessionStorage.removeItem("sessionStringKey");
console.log("After removal:", sessionStorage);

// ------------------------------------------- Activity 5: Comparing LocalStorage and SessionStorage


// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.




function saveToBothStorages(key, value) {
	localStorage.setItem(key, value);
	sessionStorage.setItem(key, value);
	console.log("LocalStorage:", localStorage.getItem(key));
	console.log("SessionStorage:", sessionStorage.getItem(key));
}
saveToBothStorages("sharedKey", "Hello, Storage!");




// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.



function clearBothStorages() {
	localStorage.clear();
	sessionStorage.clear();
	console.log("LocalStorage:", localStorage);
	console.log("SessionStorage:", sessionStorage);
}
clearBothStorages();
