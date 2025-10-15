// Create an array of strings representing different animals.

let myArray = ['lion', 'tiger', 'bear', 'monkey', 'giraffe'];
console.log(myArray);

// Add an animal to the end of the array.

myArray.push('elephant');
console.log(myArray);

// Add an animal to the beggining of the array.

myArray.unshift('zebra');
console.log(myArray);

// Eliminate the third animal from the array.

myArray.splice(2, 1);
console.log(myArray);

// Add five books to the set.

let mySet = new Set(['The Hobbit', 'War and Peace', 'Hamlet', 'The Odyssey', 'Don Quixote']);
console.log(mySet);

mySet.add('The lord of the Rings');
mySet.add('The Hobbit');

console.log(mySet);

// Remove one book from the set.

mySet.delete('Hamlet');
console.log(mySet);

// create a map that associates the number of the month with its name.

let myMap = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10,'October'],
    [11,'November'],
    [12,'December'],
]);

console.log(myMap);

console.log(myMap.has(5));
