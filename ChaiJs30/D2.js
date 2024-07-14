// Act 1
console.log(10 + 12);
console.log(10 - 12);
console.log(10 * 12);
console.log(10 / 12);

console.log(Math.floor(10 / 12));

// This method returns the largest integer less than or equal to a given number. In other words, it always rounds down.

// This method rounds a number to the nearest integer. If the fractional part of the number is 0.5 or greater, it rounds up. Otherwise, it rounds down.
console.log(Math.round(10 / 12));
// till <0.4 would be 0 and >=0.5 it would be 1
console.log(Math.round(0.4)); // 0
console.log(Math.round(0.5)); // 1
// Math.round(-4.6); // -5 // IMP

// Ceil Method -> it always rounds up.
// Math.ceil(4.1); // 5
// Math.ceil(4.9); // 5

// Math.trunc(): Truncates the decimal part, effectively rounding towards zero.
// Math.trunc(4.9); // 4
// Math.trunc(4.1); // 4

// Summary IMP
// Math.floor(): Always rounds down to the nearest integer.
// Math.round(): Rounds to the nearest integer, rounding up at 0.5 and above.
// Math.ceil(): Always rounds up to the nearest integer.
// Math.trunc(): Truncates the decimal part, effectively rounding towards zero.

console.log("remainder", 10 % 12);

let num = 10;
num += 10;
console.log(num);
// With assignment
let newnum = (num -= 10);
console.log(newnum);

// < > <= <= == ===
console.log("4" == 4); // true // loosely
console.log("4" === 4); //
console.log("4" < 4); //false
// console.log(4>=4);

// && ||
console.log("&& checks all the conditions and moving from left to right returns first falsy value", 4 && 6 && 7);

console.log("|| checks all the conditions and moving from left to right returns first truthy value", 0 || 6 || 7); //0 is falsy value

const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
//otherthan [false, 0, -0, 0n, "", null, undefined, NaN] -> all other values are truthy values // please verify and update

// Logical negation (!)
console.log(!true); // false

// Ternary operator
"something" ? console.log("something", true) : console.log("something", false);

//Extra

// In JavaScript, arithmetic operations follow the standard order of operations known as PEMDAS/BODMAS rules:

// P/B: Parentheses/Brackets
// E/O: Exponents/Orders (including roots, etc.)
// DM: Division and Multiplication  (left-to-right)
// AS: Addition and Subtraction (left-to-right)

let result = (10 / 2) * 5; // (10 / 2) * 5 = 5 * 5 = 25
console.log(result);
// let result = 10 * 2 / 5; // 4

// result = 10 - 2 + 3; // (10 - 2) + 3 = 8 + 3 = 11

result = 10 + 2 * 5; // 10 + (2 * 5) = 10 + 10 = 20
console.log("DM over AS", result);

result = 2 ** 3; // 2^3 = 8
result = Math.pow(2, 3); // 2^3 = 8
console.log("Math.pow", result);

// only When using arithmetic operators other than the + operator, JavaScript will attempt to convert operands to numbers. For example, in "2" * 3, the string "2" is coerced to the number 2.
let gotNumber = 10 + "2" * 3; // 10 + ("2" * 3) = 10 + 6 = 16
console.log(gotNumber); // Outputs: 16

let gotString = 10 + "2" + 3; // "10" + "2" + 3 = "102" + 3 = "1023"
console.log(gotString); // Outputs: 1023
