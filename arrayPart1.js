// File: arrayPart1.js
// This file shows an array and its functions
// Author: Carlos
// Date: 31/03/2025


// Q1.1 Array definition (array of unsorted numbers).
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Print the array in console.
console.log(numbers);


// Q1.2 Sort the array in ascending order.
// "a" represents the first number being compared in each pair
// "b" represents the second number being compared in each pair
numbers.sort(function(a, b) {return a - b});

// Print the sorted array in console.
console.log(numbers);


// Q1.3 Insert three numbers (19, 23, 30) and keep the array in ascending
// order. 
numbers.push(19);
numbers.unshift(23);
numbers.splice(8, 0, 30);

// Sort again the array in ascending order.
numbers.sort(function(a, b) {return a - b});
// Print the sorted array in console.
console.log(numbers);


// Q1.4 Remove two numbers (8, 31) from the array and keep it in ascending
// order.
// it removes the number 8 in the position 2.
numbers.splice(2, 1);
// it removes the number 31 in the position 10.
numbers.splice(10, 1);
// Print the sorted array in console.
console.log(numbers);
