// set

// declaration

let mySet = new Set();

console.log(mySet);

// initialize

mySet = new Set(['Emmanuel', 'Gale', 'Galeano', 18, true, 'emmanuelgaleano013@hgmail.com']);
console.log(mySet);

// common methods

// add and delete

mySet.add('New item');
console.log(mySet);

mySet.delete('Emmanuel');
console.log(mySet);

console.log(mySet.delete('Gale'));
console.log(mySet);

// has

console.log(mySet.has('Galeano'));
console.log(mySet.has('Gale'));

// size
console.log(mySet.size);

// convert set to array

let myArray = Array.from(mySet);
console.log(myArray);

mySet = new Set(myArray);
console.log(mySet);

// no duplicate items

mySet.add('New item');
console.log(mySet);

mySet.add('NEW ITEM');
console.log(mySet);
