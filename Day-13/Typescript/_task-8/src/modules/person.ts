export const person = {
	name: "John Doe",
	age: 30,
	greet: function () {
		console.log("Hello, I am " + this.name + "!" + " I am " + this.age + " years old.");
	},
};
