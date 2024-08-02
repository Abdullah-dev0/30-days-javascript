// ------------------------------------------- Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

function matchJavaScript(str: string): RegExpMatchArray | null {
	const regex = /JavaScript/g;
	return str.match(regex);
}

const string1: string =
	"JavaScript is a versatile language. JavaScript can be used for front-end and back-end development.";
console.log("Matches for 'JavaScript':", matchJavaScript(string1));

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

function matchDigits(str: string): RegExpMatchArray | null {
	const regex = /\d+/g;
	return str.match(regex);
}

const string2: string = "The year is 2024, and the month is 08.";
console.log("Matches for digits:", matchDigits(string2));

// ------------------------------------------- Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

function matchCapitalizedWords(str: string): RegExpMatchArray | null {
	const regex = /\b[A-Z][a-z]*\b/g;
	return str.match(regex);
}

const string3: string = "Alice and Bob went to the Wonderland.";
console.log("Matches for capitalized words:", matchCapitalizedWords(string3));

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

function matchDigitSequences(str: string): RegExpMatchArray | null {
	const regex = /\d+/g;
	return str.match(regex);
}

const string4: string = "The address is 123 Main Street, Apt 4B.";
console.log("Matches for digit sequences:", matchDigitSequences(string4));

// ------------------------------------------- Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

function capturePhoneNumberComponents(phone: string): RegExpExecArray | null {
	const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
	return regex.exec(phone);
}

const phoneNumber: string = "(123) 456-7890";
console.log("Phone number components:", capturePhoneNumberComponents(phoneNumber));

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

function captureEmailComponents(email: string): RegExpExecArray | null {
	const regex = /([^@]+)@([^@]+)/;
	return regex.exec(email);
}

const emailAddress: string = "user@example.com";
console.log("Email components:", captureEmailComponents(emailAddress));

// ------------------------------------------- Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

function matchWordAtBeginning(str: string, word: string): RegExpMatchArray | null {
	const regex = new RegExp(`^${word}`);
	return str.match(regex);
}

const string5: string = "Hello world!";
console.log("Match at beginning:", matchWordAtBeginning(string5, "Hello"));

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

function matchWordAtEnd(str: string, word: string): RegExpMatchArray | null {
	const regex = new RegExp(`${word}$`);
	return str.match(regex);
}

const string6: string = "Welcome to the new world";
console.log("Match at end:", matchWordAtEnd(string6, "world"));

// ------------------------------------------- Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

function validatePassword(password: string): boolean {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return regex.test(password);
}

const password: string = "Password1!";
console.log("Is password valid?:", validatePassword(password));

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

function validateURL(url: string): boolean {
	const regex = /^(https?:\/\/)?(www\.)?([^\s.]+\.[^\s]{2,}|localhost)$/i;
	return regex.test(url);
}

const url: string = "https://www.example.com";
console.log("Is URL valid?:", validateURL(url));
