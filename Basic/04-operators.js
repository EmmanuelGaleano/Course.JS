// operatos

// Arithmetic operators

let a = 5;
let b = 10;

console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (b - a)); // 5    
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (b / a)); // 2
console.log("Modulus: " + (b % a)); // 0
console.log("Exponentiation: " + (a ** 2)); // 25
console.log("Increment: " + (++a)); // 6
console.log("Decrement: " + (--b)); // 9    

let myVar = 2;
console.log(myVar)
myVar += 2;
console.log(myVar)
myVar -= 2;
console.log(myVar)  
myVar *= 2;
console.log(myVar)  
myVar /= 2; 
console.log(myVar) 
myVar %= 2; 
console.log(myVar)  
myVar **= 2; 
console.log(myVar)

// Comparison operators
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); // igualdad por valor
console.log(a == "6"); // igualdad por valor
console.log(a == a);
console.log(a === a); // igualdad por identidad (por valor y tipo)
console.log(a === 6);
console.log(a === "6"); // igualdad por identidad (por valor y tipo)
console.log(a != 6); // desigualdad por valor
console.log(a !== 6); // desigualdad por identidad (por valor y tipo)
console.log(a != b); // desigualdad por valor
console.log(a !== b); // desigualdad por identidad (por valor y tipo)
console.log(0 == false); 
console.log(1 == false); 
console.log(2 == false); 
console.log(0 == ""); 
console.log(0 == " "); 
console.log(0 == '');
console.log(0 == 'hola' );
console.log(0 === '');
console.log(null == undefined);
console.log(null === undefined);

// truthy values (valores verdaderos)

// todas los numeros positivos y negativos excepto el 0
// todos las cadenas de texto menos las vacias
// el boolean true

// falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// el boolean false
// "" (cadena de texto vacia)
// '' (cadena de texto vacia)
// `` (cadena de texto vacia)

// operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false

// or (||)
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true

console.log((5 < 10 || 15 > 20) && (10 > 5)); // true
console.log((5 < 10 || 15 > 20) && (10 < 5)); // false

// not (!)
console.log(!true); // false
console.log(!false); // true   
console.log(!(5 > 10)); // true
console.log(!(5 < 10)); // false

// ternary operator

const israining = true;
israining ? console.log("esta lloviendo") : console.log("no esta lloviendo");

