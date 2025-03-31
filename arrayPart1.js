// File: arrayPart1.js
// This file shows an array and its functions
// Author: Carlos
// Date: 31/03/2025

// Q1.1 Array definition (array of unsorted numbers)
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Print the array in console
console.log(numbers);

// Q1.2 Sort the array in ascending order
// "a" represents the first number being compared in each pair
// "b" represents the second number being compared in each pair
numbers.sort(function(a, b) {return a - b});

// Print the sorted array in console
console.log(numbers);
