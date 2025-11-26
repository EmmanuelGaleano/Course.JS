// 1. Create a class that receives two properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 2. Add a method to the class that uses the properties
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    // 4. Add a static method to the first class
    static genericGreeting() {
        return "Hello, this is a generic greeting from a static method.";
    }
}

// 3. Show the property values and call the method
const p1 = new Person("Emmanuel", 21);
console.log(p1.name);
console.log(p1.age);
console.log(p1.introduce());

// 5. Use the static method
console.log(Person.genericGreeting());


// 6. Create a class that uses inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    study() {
        return `${this.name} is studying ${this.major}.`;
    }

    // 10. Override a parent method
    introduce() {
        return `Hi, I'm ${this.name}, I'm ${this.age} years old, and I study ${this.major}.`;
    }
}

const s1 = new Student("Laura", 20, "Engineering");
console.log(s1.introduce());
console.log(s1.study());


// 7. Create a class that uses getters and setters
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get info() {
        return `Product: ${this.name}, Price: $${this.price}`;
    }

    set changePrice(newPrice) {
        this.price = newPrice;
    }
}

const prod1 = new Product("Laptop", 3000);
console.log(prod1.info);
prod1.changePrice = 2500;
console.log(prod1.info);


// 8. Modify the getter/setter class to use private properties
class BankAccount {
    #balance; // private property

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        if (newBalance < 0) {
            console.log("You cannot assign a negative balance.");
        } else {
            this.#balance = newBalance;
        }
    }
}

// 9. Use the getters and setters and show their values
const account = new BankAccount("Emmanuel", 5000);
console.log(account.balance); // getter

account.balance = 7000;       // setter
console.log(account.balance);

account.balance = -100;       // invalid
console.log(account.balance);