"use strict";
let name1 = 'John';
let name2 = 'Alice';
let age1 = 30;
let age2 = 25;
let fruits = ['apple', 'banana', 'cherry'];
let vehicles = ['car', 'motorcycle', 'bicycle'];
// Tests for equality and inequality with strings
console.log("Test 1: Is name1 equal to 'John'? I predict True.");
console.log(name1 == 'John');
console.log("Test 2: Is name1 not equal to name2? I predict True.");
console.log(name1 != name2);
// Tests using the lowercase function
console.log("Test 3: Is name1 in lowercase equal to 'john'? I predict True.");
console.log(name1.toLowerCase() == 'john');
console.log("Test 4: Is name2 in lowercase not equal to 'alice'? I predict True.");
console.log(name2.toLowerCase() != 'alice');
// Numerical tests
console.log("Test 5: Is age1 greater than age2? I predict True.");
console.log(age1 > age2);
// Tests using "and" and "or" operators
console.log("Test 7: Is age1 greater than 20 and age2 less than 30? I predict True.");
console.log(age1 > 20 && age2 < 30);
console.log("Test 8: Is age1 less than 25 or age2 greater than 35? I predict False.");
console.log(age1 < 25 || age2 > 35);
// Test whether an item is in an array
console.log("Test 9: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
console.log("Test 10: Is 'truck' in the vehicles array? I predict False.");
console.log(vehicles.includes('truck'));
// Test whether an item is not in an array
console.log("Test 11: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
console.log("Test 12: Is 'car' not in the vehicles array? I predict False.");
console.log(!vehicles.includes('car'));
