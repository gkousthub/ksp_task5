// Operators
//Arithmetic operators
let num2 = 10;
let num1 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let modulus = num1 % num2;
let exponentiation = num1 ** num2;
let increment = ++num1;
let decrement = --num2;
//Comparision operators
let equal = num1 == num2;
let tripleEqual=num1===num2;
let notEqual = num1 != num2;
let strictEqual = num1 === num2;
let strictNotEqual = num1 !== num2;
let greaterThan = num1 > num2;
let lessThan = num1 < num2;
let greaterThanOrEqual = num1 >= num2;
let lessThanOrEqual = num1 <= num2;
//Assignment operators
let plusEqualto=num1 += num2; 
let minusEqualto=num2 -= num1; 
let multiplyEqualto=num1 *= num2; 
let divEqualto=num2 /= num1; 
let modulusEqualto=num1 %= num2; 
//logical operators
let isAdult = true;
let isStudent = false;



console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Modulus: " + modulus);
console.log("Exponentiation: " + exponentiation);
console.log("Increment: " + increment);
console.log("Decrement: " + decrement);
console.log("Equal: " + equal);
console.log("tripleEqual "+tripleEqual);
console.log("Not equal: " + notEqual);
console.log("Strict equal: " + strictEqual);
console.log("Strict not equal: " + strictNotEqual);
console.log("Greater than: " + greaterThan);
console.log("Less than: " + lessThan);
console.log("Greater than or equal: " + greaterThanOrEqual);
console.log("Less than or equal: " + lessThanOrEqual);
console.log("plusEqualto: "+plusEqualto);
console.log("minusEqualto: "+minusEqualto);
console.log("multiplyEqualto: "+multiplyEqualto);
console.log("divEqualto: "+divEqualto);
console.log("Is adult: " + isAdult);
console.log("Is student: " + isStudent);
console.log("And: " + (isAdult && isStudent));
console.log("Or: " + (isAdult || isStudent));
console.log("Not: " + (!isAdult));


// Functions
function addNumbers(num1, num2) {
  return num1 + num2;
}
const result1 = addNumbers(5, 10)
console.log("The sum of 5 and 10 is: " + result1)

function subtractNumbers(num1, num2) {
    return num1 - num2;
  }
const result2 = subtractNumbers(10, 5);
console.log("The difference between 10 and 5 is: " + result2);


// Conditional statements
const age = 18;

if (age >= 18) {
    console.log("You are an adult.");
  } else if (age >= 13) {
    console.log("You are a teenager.");
  } else {
    console.log("You are not an adult.");
  }

// Loops
//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//while loop
let j = 0;
while (j < 5) {
  console.log("Iteration: " + j);
  j++;
}

// String methods
const name = "Gade Kousthub";

console.log("Length: " + name.length);
console.log("Uppercase: " + name.toUpperCase());
console.log("Lowercase: " + name.toLowerCase());
console.log("Slice: " + name.slice(0, 5));
console.log("Replace: " + name.replace("Kousthub", "Venkata Kousthub"));
console.log("Concat: " + name.concat(" is a great person."));
console.log("Trim: " + "   Kousthub   ".trim());
console.log("Split: " + name.split(" "));
console.log("Index of: " + name.indexOf("G"));
console.log("Includes: " + name.includes("thub"));
console.log("Starts with: " + name.startsWith("G"));
console.log("Ends with: " + name.endsWith("e"));