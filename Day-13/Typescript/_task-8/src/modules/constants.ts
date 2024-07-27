const Name: string = "John Doe";

let power = (b: number, e: number): number => {
	if (e === 0) {
		return 1;
	}
	return b * power(b, e - 1);
};

let fibonacci = (n: number): number => {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

let factorial = (n: number): number => {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
};

const constant = {
	Name,
	power,
	fibonacci,
	factorial,
};

export default constant;
