// desestruturation and spreading

myArray = [1, 2, 3, 4];

let person = {
    name: 'Emmanuel',
    age: 18,
    alias: 'manu'
}

let myValue = myArray[1];
console.log(myValue);

let myName = person.name
console.log(myName);

// desestructuration

// sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;
console.log(myValue0);   
console.log(myValue1);   
console.log(myValue2);   
console.log(myValue3);   
console.log(myValue4);

// sintaxis arrays with predefault values

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray;
console.log(myValue5);   
console.log(myValue6);   
console.log(myValue7);   
console.log(myValue8);   
console.log(myValue9);

// ignoring array elements

let [myValue10, , myValue13] = myArray;
console.log(myValue10);
console.log(myValue13);

// sintaxis objects

let {name, age, alias} = person;
console.log(name);
console.log(age);
console.log(alias);

// sintaxis objects with predefault values

let { name2, age2, alias2, email = 'emmanuelgaleano013@gmail.com'} = person;    
console.log(name2);// not defined
console.log(age2);// not defined
console.log(alias2);// not defined
console.log(email);

// sintaxis objects with different variable names

let {name: name3, age: age3, alias: alias3, } = person;
console.log(name3);
console.log(age3);
console.log(alias3);

// anidedd objects

let person3 = {
    name: 'Emmanuel',
    age: 18,
    alias: 'Manolo',
    walk: function() {
        console.log('the person is walking')
    },
    job: {
        name: 'Developer',
        exp: 15,
        work: function() {
            console.log(`the person ${this.name} is working`)    
        }
    }
}

let {name: name4, job: {name: jobname} } = person3;
console.log(name4);
console.log(jobname);

// propagation (...)

let myArray2 = [...myArray, 5, 6] //copy array 

let myArray3 = [...myArray,] // add elements to array

console.log(myArray2);
console.log(myArray3);

// array combination

let array4 = [...myArray, ...myArray2, ...myArray3]
console.log(array4);

// sintaxis objects

let person4 = {...person, email: 'emmanuelgaleano013@gmail.com'}

console.log(person4);

// copy object

let person5 = {...person}
console.log(person5);