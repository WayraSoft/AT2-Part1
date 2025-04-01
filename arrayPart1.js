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


// Q1.5 Implement the function "sequentialSearch" to find an element within
// the array.
// The function accepts Two parameter, the array and the value to be searched
// and it will return a value of the index if the element is found, or -1 if the 
// element is not found.
function sequentialSearch(numbArray, targetNumb) {
  let index = -1;      // local variable, init as 'not found' value.
  for(let i = 0; i < numbArray.length; i++) {
    // it loops through every element of the array and compares values.
    if(numbArray[i] == targetNumb) {
      index = i;
      break;
    }
  }
  return index;
}

// Example when the target is found:
// let indexTarget = sequentialSearch(numbers, 25);
// if(indexTarget >= 0) {
//   console.log(`The target was found in the position ${indexTarget}`);
// }
// else {
//   console.log(`The target was not found: ${indexTarget}`);
// }

// Example when the target is not found:
// let indexTarget = sequentialSearch(numbers, 15);
// if(indexTarget >= 0) {
//   console.log(`The target was found in the position ${indexTarget}`);
// }
// else {
//   console.log(`The target was not found: ${indexTarget}`);
// }


// Q1.6 Implement the function "binarySearch" to find an element within the
// array.
// The function accepts Two parameter, the array and the value to be searched
// and it will return a value of the index if the element is found, or -1 if the 
// element is not found.
function binarySearch(intArray, targetNum) {
  let index2 = -1;      // local variable, init as 'not found' value.
  // local variables pointing the first and the last array position.
  let start = 0;        
  let end = intArray.length - 1; 
                                  
  while(start <= end) {           // iterate while start not meets end.
    // local variable pointing the middle of the array
    let mid = Math.floor((start + end) / 2);
    // if the element is located at the middle of the array, return the position
    if(intArray[mid] == targetNum) {
      index2 = mid;
      break;
    }
    // it looks if the target could be in the first or second half of the array.
    else if( intArray[mid] < targetNum) {
      start = mid + 1;                   // set to look into the second half.
    }
    else {
      end = mid - 1;                     // set to look into the first half.
    }
  }
  return index2;                       // returns the position or -1 "not found"
}

// Example when the target is found:
// let indexTarget2 = binarySearch(numbers, 23);
// if(indexTarget2 >= 0) {
//   console.log(`The target was found in the position ${indexTarget2}: 
//     numbers[${indexTarget2}]`);
// }
// else {
//   console.log(`The target was not found: ${indexTarget2}`);
// }

// Example when the target is found:
// let indexTarget2 = binarySearch(numbers, 50);
// if(indexTarget2 >= 0) {
//   console.log(`The target was found in the position ${indexTarget2}: 
//     numbers[${indexTarget2}]`);
// }
// else {
//   console.log(`The target was not found: ${indexTarget2}`);
// }
