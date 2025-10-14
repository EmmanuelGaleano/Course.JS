console.log('--- Strings Exercises ---');

// 1. Create a variable to store your first name and another variable to store your last name. Then, create a third variable that combines both to display your full name.    

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);  

// 2. Create a variable that contains a sentence. Then, use string methods to convert the sentence to uppercase, lowercase, and find the position of a specific word within the sentence.

let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.indexOf("fox")); // 16

// 3. Create a variable that contains a sentence with leading and trailing spaces. Use string methods to remove the spaces and display the trimmed sentence.
let sentenceWithSpaces = "   Hello, World!   ";
let trimmedSentence = sentenceWithSpaces.trim();
console.log(trimmedSentence); // "Hello, World!"

// 4. Create a variable that contains a sentence. Use string methods to replace a specific word in the sentence with another word and display the modified sentence.
let originalSentence = "I love programming in JavaScript.";
let modifiedSentence = originalSentence.replace("JavaScript", "Python");
console.log(modifiedSentence); // "I love programming in Python."

// 5. Create a variable that contains a sentence. Use string methods to extract a portion of the sentence and display it.
let longSentence = "Learning JavaScript is fun and exciting.";
let extractedPortion = longSentence.slice(9, 19);
console.log(extractedPortion); // "JavaScript"

  