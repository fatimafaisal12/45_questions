"use strict";
// Equality and Inequality Test 1
console.log("Equality test with string: ", "Pineapple" === "Pineapple");
//Equality and Inequality Test 2
console.log("Inequality test with strings: ", "Pineapple" != "Banana");
//Test with using lower Case function
console.log("lower case function test: ", "HOLA".toLowerCase() === "hola");
//Numerical test with Equality 
console.log("number test with equality: ", 19 === 19);
//Numerical test with  Inequality
console.log("number test with Inequality: ", 19 != 90);
//greater than test
console.log("Greater than test: ", 19 > 18);
//greater than or equal test
console.log("Greater than or equal test: ", 19 >= 19);
//less than or equal test
console.log("less than test: ", 17 <= 18);
//And operator test
console.log("And operator test: ", 5 === 5 && 10 > 7);
//Or operator test
console.log("Or operator test: ", 5 === 5 || false);
// Test whether an item is in an array
const fruits = ["Strawberry", "Guava", "Kiwi"];
console.log("Test 'Kiwi' in the array:", fruits.includes("Kiwi")); //true
console.log("Test 'Mango' in the array:", fruits.includes("Orange")); //false
// Test whether an item is not in an array
console.log("Testing 'Orange' is not in array:", !fruits.includes("Orange")); //true
console.log("Testing 'kiwi' is not in array:", !fruits.includes("Kiwi")); //false
