// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

// const person = require('./Person');

// const person1 = new person('John Doe', 30);
// console.log(person1.greeting());



module.exports = Person;