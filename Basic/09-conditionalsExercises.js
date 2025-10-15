let n1 = -5;
let message1;
if (n1 > 0) {
    message1 = ' is a positive number';
}   else if (n1 < 0) {
    message1 = ' is a negative number';
} else {
    message1 = n1 + ' is zero';
}

console.log(n1 + message1);

let lenguage = 3;
let message2;

switch (lenguage) {
    case 1:
        message2 = 'Hello World';    
        break;
    case 2:
        message2 = 'Hola Mundo';    
        break;  
    case 3:
        message2 = 'Bonjour le monde';    
        break;
    default:
        message2 = 'incorrect option';    
        break;  
}
console.log(message2);

let mouth = 4;
let season;
switch (mouth) {
    case 12:
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5: 
        season = 'Spring';
        break;
    case 6:
    case 7:
    case 8: 
        season = 'Summer';
        break;
    case 9:
    case 10:
    case 11: 
        season = 'Autumn';
        break;    
    default:
        season = 'incorrect option';    
        break;  
}
console.log(season);