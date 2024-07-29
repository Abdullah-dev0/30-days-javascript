// - --------------------------  Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

interface Person {
	name: string;
	age: number;
	lastName?: string;
}

class Person implements Person {
	constructor(name: string, lastName: string = "", age: number) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
	}

	set changeName(name: string) {
		const [firstName, lastName] = name.split(" ");
		this.name = firstName;
		this.lastName = lastName;
	}

	get fullName() {
		return `${this.name} ${this.lastName}`;
	}

	greeting() {
		return `Hello, my name is ${this.name} and my age ` + `is ${this.age}.`;
	}

	updateAge(newAge: number) {
		this.age = newAge;
		console.log(`Age updated to ${this.age}.`);
	}

	static greetingMessage(Name: string) {
		return `Hello, I am a ${Name}.`;
	}
}

const person = new Person("Alice", "bob", 30);

console.log(person.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

person.updateAge(31);
console.log("updated Age ", person.greeting());

// ------------------------------------ Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

//======================================= I chnaged the class name to Person2 because I already have a class Person.

class Person2 {
	studentId: number;
	constructor(studentId: number) {
		this.studentId = studentId;
	}

	logStudentId() {
		return this.studentId;
	}
}

class Student extends Person2 {
	static studentCount: number = 0;

	constructor(studentId: number) {
		super(studentId);
		Student.studentCount++;
	}
}

const student = new Student(12);
console.log("studentId = ", student.logStudentId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

//I chnaged the class name to Person3 because I already have a class Person.

class Person3 {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		return `Hello, my name is ${this.name} and my age ` + `is ${this.age}.`;
	}

	updateAge(newAge: number) {
		this.age = newAge;
		console.log(`Age updated to ${this.age}.`);
	}
}

class Student2 extends Person3 {
	studentId: number;

	constructor(name: string, age: number, studentId: number) {
		super(name, age);
		this.studentId = studentId;
	}

	greeting() {
		return `${super.greeting()} My student ID is ${this.studentId}.`;
	}
}

const student2 = new Student2("Bob", 25, 123);

console.log(student2.greeting());

// ------------------------------- Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

//----------------------  i have already created a static method in the Person class. I will call it here you can check function in the person class ---------------------.

console.log(Person.greetingMessage("Abdullah"));

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

// --------------------------- I added a static variable in the student class. I will call it here you can check varibale in the person class ----------------------.

const student3 = new Student(12);
const student4 = new Student(13);
const student5 = new Student(14);
console.log("Total number of students: ", Student.studentCount);

// ----------------------------------------- Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume firstName and lastName properties). Create an instance and log the full name using the getter.

const person2 = new Person("Zain", "Abdullah", 30);

console.log("Name we get from getter : ", person2.fullName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

person2.changeName = "Zain Ali";

console.log("Name we get from settting the name  : ", person2.name, person2.lastName);

// ---------------------------------- Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
	#balance: number = 0;

	deposit(amount: number) {
		this.#balance += amount;
		return `Deposited ${amount}. Balance is now ${this.#balance}.`;
	}

	withdraw(amount: number) {
		if (this.#balance < amount) {
			console.log("Insufficient funds.");
			return;
		}
		this.#balance -= amount;
		return `Withdrew ${amount}. Balance is now ${this.#balance}.`;
	}
}

const account = new Account();
console.log(account.deposit(100));
console.log(account.withdraw(50));

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

console.log("Account 2 Testing");

const account2 = new Account();
console.log(account2.deposit(100));
console.log(account2.withdraw(50));
console.log(account2.withdraw(100));
console.log(account2.deposit(100));
console.log(account2.withdraw(100));
console.log(account2.withdraw(50));
