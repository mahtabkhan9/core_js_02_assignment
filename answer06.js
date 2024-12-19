function displayInfo(name, role) {
    console.log(`${name} is a ${role}`);
}

// Using call
displayInfo.call(null, "Alice", "Developer");

// Using apply
displayInfo.apply(null, ["Bob", "Designer"]);

// Greet function
function greet() {
    console.log(`Hello, this is ${this.name}`);
}

const person = { name: "Charlie" };
const boundGreet = greet.bind(person);

// Using bind
boundGreet(); 


// Output :
// Alice is a Developer
// Bob is a Designer
// Hello, this is Charlie