// array

// declare

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2); 

// initialize

myArray = ['Emmmanuel', 'Galeano', 18, true];
myArray2 = new Array('Emmmanuel', 'Galeano', 18, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = 'Emmmanuel';
myArray2[1] = 'Galeano';
myArray2[2] = 18;

console.log(myArray2);

myArray = [];
myArray[2] = 'Emmmanuel';
myArray[0] = 'Galeano';
myArray[1] = 18;

console.log(myArray);

// common methods

myArray = [];

// push and pop
myArray.push('Emmmanuel');
myArray.push('Galeano');
myArray.push(18);
myArray.push(true);

console.log(myArray);
console.log(myArray.pop());

myArray.pop();
console.log(myArray);

// unshift and shift

console.log(myArray.shift());
console.log(myArray);

myArray.unshift('Emmmanuel', 'Gale');
console.log(myArray);

// length
console.log(myArray.length);

// clear
myArray.length = 0;
console.log(myArray);

// slice

myArray.push('Emmmanuel', 'Gale', 'Galeano', 18, true);

let myNewArray = myArray.slice(1, 3);

console.log(myArray);
console.log(myNewArray);    

// splice

myArray.splice(1, 4);
console.log(myArray);

myArray = ['Emmmanuel', 'Gale', 'Galeano', 18, true];

myArray.splice(1, 2, 'New element');    
console.log(myArray);