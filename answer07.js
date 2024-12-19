const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    calculate: function (operation, a, b) {
        return this[operation](a, b);
    },
};

// Using call for addition
console.log(calculator.calculate.call(calculator, "add", 10, 5)); // Output: 15

// Using apply for multiplication
console.log(calculator.calculate.apply(calculator, ["multiply", 10, 5])); // Output: 50

// Discount calculator with bind
const discountCalculator = {
    discount: 10,
    applyDiscount: function (price) {
        return price - (price * this.discount) / 100;
    },
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log(`Discounted Price: ${calculateDiscount(100)}`); // Output: 90


// Output
// 15
// 50
// Discounted Price: 90