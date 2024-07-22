// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); // result in boolean value of true/false

// console.log("2" > 1);
// console.log("02" > 1);
 
// ********* Note ********* // Avoid comparison given below:

// 1 console.log(null > 0); // false
// 2 console.log(null == 0); // false
// 3 console.log(null >= 0); // true

//  console.log(undefined == 0); // false
//  console.log(undefined > 0); // false
//  console.log(undefined < 0); // false

// The reason is that an equality check == and comparisons >,<,>=,<= work differently
// Comparisons convert null to a number, treating it as 0. thats why 3 is true and 1 is false


// === (triple equal) performs strict check for the value and datatype

console.log("2" === 2);