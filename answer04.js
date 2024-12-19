const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Bob", age: 30 };

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Using call method
introduce.call(person1); 
// Hello, I'm Alice, and I'm 25 years old.

introduce.call(person2); 
// Hello, I'm Bob, and I'm 30 years old.
