// objects Exercises

// 1. Create a object witch 3 properties

let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}
console.log(car)

// 2. acces and show the values of each property

console.log(car.brand)
console.log(car.model)
console.log(car.year)

// 3. add a new property

car.color = 'red'
console.log(car)

// 4. eliminate a property

delete car.year
console.log(car)    

// 5. add a funciont and call it

carStart = function() {
    console.log('the car has started')
}
carStart() 

// 6. iterate the object properties

for (let key in car) {
    console.log(key + ': ' + car[key])
}

// 7. create a nested object

let person = {
    name: 'Alice',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Wonderland',
        zip: '12345'
    }
}

console.log(person) 

// 8. access and show the values of the nested object properties

console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.zip)
console.log(person)

// 9. check if two created objects are equal

let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    a: 1,
    b: 2
}   
console.log(obj1 === obj2) // false
console.log(obj1 == obj2)  // false
// because they are different objects in memory

let obj3 = obj1
console.log(obj1 === obj3) // true
console.log(obj1 == obj3)  // true
// because they reference the same object in memory

// 10. check if two properties of an object are equal

let obj4 = {
    x: 5,
    y: 5
}
console.log(obj4.x === obj4.y) // true
console.log(obj4.x == obj4.y)  // true  
// because they have the same value

// end of exercises






