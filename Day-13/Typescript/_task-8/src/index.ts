import { add } from "./modules/add";
import { person } from "./modules/person";
import { subtract, multiply, divide } from "./modules/namedExports";
import { fabonachi } from "./modules/singleFunction";
import constants from "./modules/constants";


console.log("Sum of ", add(2, 3)); 

console.log("Name of person: " + person.name); 
person.greet(); 

console.log("Subtraction = ", subtract(5, 3));
console.log("Multiplication = ", multiply(5, 3)); 
console.log("Division = ", divide(6, 3)); 

console.log("Fabonachi = ", fabonachi(7));


console.log("Name = ", constants.Name);
console.log("Power = ", constants.power(2, 3));
console.log("Fibonacci = ", constants.fibonacci(7));
console.log("Factorial = ", constants.factorial(5));


