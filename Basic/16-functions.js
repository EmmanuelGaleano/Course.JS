// functions

// simple function declaration

function myFunc() {
  console.log("Hello from my function!");
}

myFunc(); // Llamada a la función

for (let i = 0; i < 5; i++) {
  myFunc(); // Llamadas repetidas a la función
}

// with parameters

function myFuncWithParams(name) {
  console.log(`Hello, " ${name} !`);
}

myFuncWithParams("Emmanuel");
myFuncWithParams("Galeano");

// anonimous function

const myFunc2 = function (name) {
  console.log(`Hello, " ${name} !`);
}

myFunc2("Emmanuel Galeano");

// arrow function

const myFunc3 = (name) => {
  console.log(`Hello, " ${name} !`);
}

myFunc3("Emmanuel Galeano Quiroz");

// parameters 

function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);
sum(5)
sum(); // NaN  

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

// default

defaultSum(); // 0 
defaultSum(5); 
defaultSum(5, 10);

// return

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10)); // 50

let result = multiply(7, 10);
console.log(result); // 70

// Nested functions

function extern() {
    console.log("Hello from extern function!");
    function intern() {
        console.log("Hello from intern function!");
    }
    intern();
}

extern();
// intern(); // Error: intern is not defined

// High-order functions

function applyFunc(func, param) {
    func(param);    
}

applyFunc(myFunc3, "High-order function");

// for each

myArray = [1, 2, 3, 4, 5];

mySet = new Set(['Emmanuel', 'Galeano', 18, true, 'emmanuelgaleano013@hgmail.com']);

myMap = new Map([
    ['name', 'Emmanuel'],
    ['lastname', 'Galeano'],
    ['age', 18],
    ['email', 'emmanuelgaleano013@gmail.com'],
]);

myArray.forEach(function(value) {
   console.log(value);
});

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));