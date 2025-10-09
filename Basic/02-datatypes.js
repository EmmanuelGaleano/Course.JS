// String
let name = "John Snow";
let alias = 'The White Wolf';
let email = `johnsnow@gmail.com`;

// Number
let age = 25; // integer
let height = 5.9; // float or double

// boolean
let isAlive = true;
let hasSword = false;

// Undefined
let undefinedValue
console.log(undefinedValue); // Output: undefined

// Null
let nullValue = null;
console.log(nullValue); // Output: null

// Symbol
let mySymbol = Symbol("mySymbol");

// BigInt
let bigIntValue = BigInt(1234567890123456789012345678901234567890);
let bigIntValue2 = 1234567890123456789012345678901234567890n; // using 'n' at the end

console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isAlive)
console.log(typeof hasSword)
console.log(typeof undefinedValue)
console.log(typeof nullValue) // Output: object (this is a known quirk in JavaScript)  
console.log(typeof mySymbol)
console.log(typeof bigIntValue)
console.log(typeof bigIntValue2) 