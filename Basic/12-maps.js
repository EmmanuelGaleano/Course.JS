// Map


// declare a map

let myMap = new Map();

console.log(myMap);

// initialize a map

myMap = new Map([
    ['name', 'Emmanuel'],
    ['lastname', 'Galeano'],
    ['age', 18],
    ['email', 'emmanuelgaleano013@gmail.com'],
]);

console.log(myMap);

// properties and methods

// set

myMap.set('phone', '123456789');
console.log(myMap);     

myMap.set('email', 'otherEmail@gmail.com')
console.log(myMap);

// get 

console.log(myMap.get('name'));
console.log(myMap.get('lastname'));
console.log(myMap.get('age'));
console.log(myMap.get('email'));
console.log(myMap.get('phone'));

// has 

console.log(myMap.has('name')); 

// delete

myMap.delete('email');
console.log(myMap);

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// size

console.log(myMap.size);

// clear

myMap.clear();
console.log(myMap);


