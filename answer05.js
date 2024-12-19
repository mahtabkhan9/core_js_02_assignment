// Using Set and Map to store unique numbers and their squares
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
const numberSquareMap = new Map();

uniqueNumbers.forEach((num) => numberSquareMap.set(num, num * num));

// Print unique numbers and their squares
console.log("Unique Numbers:", [...uniqueNumbers]);
console.log("Squares:", [...numberSquareMap]);

// Output:
// Unique Numbers: [ 1, 2, 3, 4, 5 ]
// Squares: [ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ], [ 4, 16 ], [ 5, 25 ] ]