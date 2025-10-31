// functions excercises

// 1. Create a function that receives two numbers as parameters and returns the sum of them.

function sumNumbers(a, b) {
    return a + b;
}   

console.log("Sum of 5 and 10 is:", sumNumbers(5, 10));

// 2. Create a function that receives a string as a parameter and returns the string reversed.      

function reverseString(str) {
    let reversed = "";      
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Reversed string of 'JavaScript' is:", reverseString("JavaScript"));

// 3. Create a function that receives an array of numbers and returns the largest number in the array.

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log("Largest number in [5, 12, 8, 20, 3, 15] is:", findLargestNumber([5, 12, 8, 20, 3, 15]));

// 4. Create a function that receives a number as a parameter and returns true if the number is prime, false otherwise.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));

// 5. Create a function that receives an array of strings and returns a new array with the strings sorted in alphabetical order.

function sortStringsAlphabetically(arr) {
    return arr.slice().sort();
}

console.log("Sorted strings:", sortStringsAlphabetically(["banana", "apple", "orange", "grape"]));

// 6. Create a function that receives a number as a parameter and returns the factorial of that number.

function factorial(n) {
    if (n < 0) return null; 
    if (n === 0) return 1;
    let result = 1; 
    for (let i = 1; i <= n; i++) {
        result *= i;
    }   
    return result;
}

console.log("Factorial of 5 is:", factorial(5));    

// 7. Create a function that receives a string as a parameter and returns the number of vowels in the string.

function countVowels(str) { 
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels in 'Hello World' is:", countVowels("Hello World"));

// 8. Create a function that receives an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr) {
    let evenNumbers = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

console.log("Even numbers in [1, 2, 3, 4, 5, 6] are:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// 9. Create a function that receives a string as a parameter and returns true if the string is a palindrome, false otherwise.

function isPalindrome(str) {    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}   

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); 

// 10. Create a function that receives an array of numbers and returns the average of those numbers.

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;    
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log("Average of [10, 20, 30, 40, 50] is:", calculateAverage([10, 20, 30, 40, 50]));