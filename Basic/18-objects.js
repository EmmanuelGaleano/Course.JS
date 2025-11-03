// objects

// sintax

let person = {
    name: 'Emmanuel',
    age: 18,
    city: 'Medellin'
}

// acces to properties

console.log(person.name)
console.log(person.age)
console.log(person.city)

// corchetes notation

console.log(person['name'])
console.log(person['age'])
console.log(person['city'])

// modify properties

person.name = 'Juan'
console.log(person.name)

console.log(typeof person.age)
person.age = 19
console.log(person.age)
console.log(typeof person.age)

// eliminate properties

delete person.age 

console.log(person)

// add properties   

person.email = 'emmanuelgaleano013@gmail.com'
person['age'] = 18
console.log(person)

// methods

let person2 = {
    walk: function() {
    console.log('the person is walking')
    }
}
person2.walk()

// anidaded objects

let person3 = {
    name: 'Emmanuel',
    age: 18,
    alias: 'Manolo',
    walk: function() {
        console.log('the person is walking')
    },
    job: {
        title: 'Developer',
        exp: 15,
        work: function() {
            console.log(`the person ${this.name} is working`)    
        }
    }
}
console.log(person3)

console.log(person3.name)
console.log(person3.job.title)
person3.walk()
person3.job.work()

person.name = 'Emmanuel'

let person4 = {
    name: 'Emmanuel',
    alias: 'Manolo',
    age: 18,
    city: 'Medellin'
}

console.log(person)
console.log(person4)

console.log(person == person4) // false because they are different objects in memory
console.log(person === person4) // false because they are different objects in memory

console.log(person.name == person4.name) // true because they have the same value 

// iterate

for (let key in person4) {  
    console.log(key + ': ' + person4[key])// keys
}

// function to create objects

function Person(name, age) { // should be a class
    this.name = name
    this.age = age  
}

let person5 = new Person('Emmanuel', 18)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)