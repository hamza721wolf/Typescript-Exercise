"use strict";
let car = 'subaru';
let age = 25;
let isSunny = true;
let fruits = ['apple', 'banana', 'cherry'];
// Test 1: Is the car variable equal to 'subaru'?
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2: Is the age variable greater than or equal to 18?
console.log("Is age >= 18? I predict True.");
console.log(age >= 18);
// Test 3: Is it a sunny day?
console.log("Is it a sunny day? I predict True.");
console.log(isSunny);
// Test 4: Is 'apple' in the fruits array?
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));
// Test 5: Is the car variable not equal to 'ford'?
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');
// Test 6: Is the age variable less than 21?
console.log("Is age < 21? I predict True.");
console.log(age < 21);
// Test 7: Is it a rainy day?
console.log("Is it a rainy day? I predict False.");
console.log(!isSunny);
// Test 8: Is 'grape' in the fruits array?
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test 9: Is the car variable equal to 'honda'?
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');
// Test 10: Is the age variable greater than or equal to 30?
console.log("Is age >= 30? I predict False.");
console.log(age >= 30);
