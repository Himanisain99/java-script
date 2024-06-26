

let singleQoutestring='Himani';
let doubleqoutestring="Sain";
console.log(doubleqoutestring);
console.log(singleQoutestring);

let numbernotfoat= 45;
let floatnotnumber= 2.3;
console.log(numbernotfoat);
console.log(floatnotnumber);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let product = num1 * num2;
console.log("Sum:", sum); // Output: Sum: 15
console.log("Product:", product); // Output: Product: 50

let isRaining = true;
let isSunny = false;
let canGoOutside = isRaining || isSunny;
console.log(canGoOutside); // Output: true

let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]


let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName); // Output: Jane
console.log(person["age"]); // Output: 30

let notAssigned;
let emptyValue = null;
console.log(notAssigned); // Output: undefined
console.log(emptyValue); // Output: null

function greet(name) {
    return "Hello, " + name;
}
let greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice


let x = "5";
let y = 3;
let result = x - y; // Subtraction forces type coercion
console.log(result); // Output: 2

let currentDate = new Date();
console.log(currentDate); // Output: Current date and time

let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym1 === sym2); // Output: false

let a = 5;
let b = 10;
let resulthere = `The sum of ${a} and ${b} is ${a + b}.`;
console.log( resulthere); // Output: The sum of 5 and 10 is 15.

let e = 10;
let g = 40;
let output = `the addition of ${e} and ${g} is ${e + g}.`;
console.log(output);

let c= 20;
let d= 50;
let resulthere1= c+d;
console.log(resulthere1);


let string1 = "Riya";
let string2 = "Sharma";
let outcome = `join two strings ${string1} and ${string2} is ${string1 + string2}.`;
console.log(outcome);


let MAX_VALUE = 90;
let PT = 3.14;
console.log(MAX_VALUE);
let product1 = number1*number2;
console.log{"product1:" ,product1};


let score=20
console.log(typeof(score));