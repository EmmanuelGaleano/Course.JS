// loops Exercises


//#1

for (let i = 1; i <= 20; i++) {
  console.log(`Numero ${i}`);
}

//#2

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log("La suma es:", suma);

//#3

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

//#4

let nombres = ["Ana", "Luis", "Carlos", "Sofía"];
let j = 0;

while (j < nombres.length) {
  console.log(nombres[j]);
  j++;
}

//#5

let texto = "Hola Mundo";
let vocales = "aeiouAEIOU";
let contador = 0;
let k = 0;

while (k < texto.length) {
  if (vocales.includes(texto[k])) {
    contador++;
  }
  k++;
}

console.log("Número de vocales:", contador);

//#6

let numbers = [2, 3, 4, 5];
let producto = 1;
let x = 0;

while (x < numbers.length) {
  producto *= numbers[x];
  x++;
}

console.log("Producto total:", producto);

let a = 1;

//#7


do {
  console.log(`5 x ${a} = ${5 * a}`);
  a++;
} while (a <= 10);

let cadena = "JavaScript";
let invertida = "";
let b = cadena.length - 1;

//#8


do {
  invertida += cadena[b];
  b--;
} while (b >= 0);

console.log("Cadena invertida:", invertida);

//#9

let n1 = 0, n2 = 1, siguiente;
let c = 3;

console.log(n1);
console.log(n2);

do {
  siguiente = n1 + n2;
  console.log(siguiente);
  n1 = n2;
  n2 = siguiente;
  c++;
} while (c <= 10);

//#10 

const numbers1 = [5, 12, 8, 20, 3, 15];
const mayoresA10 = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 10) {
    mayoresA10.push(numbers1[i]);
  }
}

console.log("Números mayores a 10:", mayoresA10);

