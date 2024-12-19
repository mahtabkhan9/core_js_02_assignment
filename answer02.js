
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);
console.log(`Sorted Ages: ${ages}`);

// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Min Age: ${minAge}, Max Age: ${maxAge}`);

// Find the median age
const medianAge = (ages.length % 2 === 0) 
    ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2 
    : ages[Math.floor(ages.length / 2)];
console.log(`Median Age: ${medianAge}`);

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(`Average Age: ${averageAge}`);

// Find the range of ages
const rangeAge = maxAge - minAge;
console.log(`Range of Ages: ${rangeAge}`);

// Compare (min - average) and (max - average)
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log(`Min - Avg: ${diffMinAvg}, Max - Avg: ${diffMaxAvg}`);

// Output :
// Sorted Ages: 19,19,20,22,24,24,24,25,25,26
// Min Age: 19, Max Age: 26
// Median Age: 24
// Average Age: 22.8
// Range of Ages: 7
// Min - Avg: 3.8000000000000007, Max - Avg: 3.1999999999999993