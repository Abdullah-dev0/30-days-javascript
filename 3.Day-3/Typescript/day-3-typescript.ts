// ------------------Activity 1 : if else

// task 1 :  write a program to check if the number is positive or negative or zero and console the output.

let number: number = 10;

if (number > 0) {
	console.log("The number is positive");
} else if (number < 0) {
	console.log("The number is negative");
} else {
	console.log("The number is zero");
}

// task 2 : write a program to check if the person id eligible to vote or not and console the output.

let age: number = 18;

if (age >= 18) {
	console.log("You are eligible to vote");
} else {
	console.log("You are not eligible to vote");
}

// --------------------- Activity 2 : nested if else

// task 3 : write a program to check the largest of three numbers using nested if else and console the output.

let num1: number = 150;
let num2: number = 250;
let num3: number = 30;

if (num1 > num2) {
	if (num1 > num3) {
		console.log("largest numner is " + num1);
	} else {
		console.log("largest numner is " + num3);
	}
} else {
	if (num2 > num1) {
		console.log("largest numner is " + num2);
	}
}

// --------------------------- Activity 3 : switch case

// task 4 : write a program to check the day of the weeks based on numbers (1-7) and log the day name.

let day: number = 5;

switch (day) {
	case 1:
		console.log("Sunday");
		break;
	case 2:
		console.log("Monday");
		break;
	case 3:
		console.log("Tuesday");
		break;
	case 4:
		console.log("Wednesday");
		break;
	case 5:
		console.log("Thursday");
		break;
	case 6:
		console.log("Friday");
		break;
	case 7:
		console.log("Saturday");
		break;
	default:
		console.log("Invalid day");
}

// task 5 : write a program to assign A grade to students based on the score  and log the grade.

let marks: number = 85;

switch (true) {
	case marks >= 90:
		console.log("A grade");
		break;
	case marks >= 80:
		console.log("B grade");
		break;
	case marks >= 70:
		console.log("C grade");
		break;
	case marks >= 60:
		console.log("D grade");
		break;
	case marks >= 50:
		console.log("E grade");
		break;
	default:
		console.log("F grade");
}

// ------------------------Activity 4 : Ternary operator

// task 6 : write a program to check if the number is even or odd using ternary operator and log the output.

let num: number = 10;

num % 2 == 0 ? console.log("Number is  Even") : console.log("Number is Odd");

// -------------------- Activity 5 : Combining conditions

// task 7 : write a program to check if the year is leap year or not using multiple conditions and log the output.

let year: number = 2025;

if (year % 4 == 0) {
	if (year % 100 == 0) {
		if (year % 400 == 0) {
			console.log("Leap year");
		} else {
			console.log("Not a leap year");
		}
	} else {
		console.log("Leap year");
	}
} else {
	console.log("Not a leap year");
}
