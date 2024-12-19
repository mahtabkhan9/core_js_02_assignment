// Create a Map to store contact information

const contacts = new Map();
contacts.set("Alice", { age: 25, email: "alice@example.com", location: "New York" });
contacts.set("Bob", { age: 30, email: "bob@example.com", location: "Los Angeles" });

// Function to retrieve contact details by name
function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    }
    return "Contact not found";
}

// Example usage
console.log(getContactDetails("Alice"));
console.log(getContactDetails("Charlie"));

// Output:
// { age: 25, email: 'alice@example.com', location: 'New York' }
// Contact not found