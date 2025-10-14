// Strings

myName = "Brais";
let greeting = 'Hello, ' + myName + '!';
console.log(greeting);
console.log(typeof greeting);

// length

console.log("Length of greeting: " + greeting.length);

// escape characters

console.log(greeting[0])
console.log(greeting[11])

// common methods

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Brais"));
console.log(greeting.indexOf("brais")); // case sensitive
console.log(greeting.slice(0, 10));
console.log(greeting.replace("Brais", "World"));

// template literals (template strings)

let message = `Hello,
my name 
is js.`;
console.log(message);

console.log('Hello, my name is my name.');
console.log(`Hello, my name is ${myName}.`);

let email = 'braismoure@gmail.com';

console.log(`Hello, my name is ${myName}. and my email is ${email}.`);