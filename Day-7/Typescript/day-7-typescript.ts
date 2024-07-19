//--------------------- Activity 1 : object creation and Accessing

// Task 1 : Create an object representing a book with properties for the title, author, and year and log the object to the console.

type Book = {
	title: string;
	author: string;
	year: number;
	printDetails: () => string;
	updateYear?: (year: number) => number;
	printDetailsByUsingThis?: () => string;
};

const book: Book = {
	title: "The Art of being alone",
	author: "Renuka",
	year: 2021,
	printDetails: function () {
		return `Title: ${this.title}, Author: ${this.author}`;
	},
};

console.log("Book :  ", book);

// Task 2 : Access and log the tiltle and author of the book object.

console.log("Title of the Book : ", book.title);
console.log("Author of the Book : ", book.author);

//  ------------------------------  Activity 2 : Object Methods

// Task 3 : add a method to the book object that returns a string with the books title and author and log the result of calling this method to the console.

console.log("Printing Title and Author", book.printDetails());

// Task 4 : add a method to the book object that takes parameter year and update the year property of the book object and log the book object to the console.

book.updateYear = function (newYear) {
	return (this.year = newYear);
};

book.updateYear(2019);

console.log("Updated year = ", book);

// ----------------------- Activity 3 : Nested Objects

// Task 5 : Create an nested object representing a library with properties like name and books (an array of books of objects) and log the library object to the console.

const library = {
	name: "Renuka's Library",
	books: [
		{
			title: "The Art of being alone",
		},
		{
			title: "How to be happy",
		},
		{
			title: "The Power of Now",
		},
	],
};

console.log("Library : ", library);

// Task 6 : Access and log the name of the library and the title of all books in the library.

console.log("Library Name : ", library.name);
console.log(
	"Books in the Library : ",
	library.books.map((book) => book.title),
);

//  ---------------------- Activity 4 : the this keyword

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the books title and  year and log the result of calling this method to the console.

book.printDetailsByUsingThis = function () {
	return `Title: ${this.title}, Year: ${this.year}`;
};

console.log("Print Using This Key word : ", book.printDetailsByUsingThis());

// ---------------------- Acticity 5 : Object Iteration

// Task 8 : Use for...in loop to iterate over the properties of the books object and log each property and its value.
console.log("Using for...in loop");

for (let key in book) {
	console.log(`${key} : ${book[key as keyof Book]}`);
}
// Task 9 : Use object.keys and object.values methods to log all the keys and values of thw books object.

console.log("Keys : ", Object.keys(book));
console.log("Values : ", Object.values(book));
