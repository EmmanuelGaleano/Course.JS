// loops or bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(`hola numero: ${numbers[i]}`);
}

// while

let i = 0;

while (i > 5) {
console.log(`hola ${i}`);
i++;
}

// infinite loop
// while (true) {

// }

// do...while


 i = 6;
do {
    console.log(`hola ${i}`);
    i++;
}while (i < 5);

// for of

myArray = [1, 2, 3, 4];

mySet = new Set(['Emmanuel', 'Gale', 'Galeano', 18, true, 'emmanuelgaleano013@hgmail.com']);

myMap = new Map([
    ['name', 'Emmanuel'],
    ['lastname', 'Galeano'],
    ['age', 18],
    ['email', 'emmanuelgaleano013@gmail.com'],
]);


for (let valoe of myArray) {
    console.log(valoe)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

myString = "Hello";

for (let char of myString) {
    console.log(char);
}

// good practice

// break and continue

for (let i = 0; i < 10; i++){
    if (i == 5){
        continue
    } else if (i == 9) {
        break
    }
    console.log(`Hola ${i}`)
}