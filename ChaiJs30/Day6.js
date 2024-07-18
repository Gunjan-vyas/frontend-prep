//Creat array having num from 1 to 5
const array = new Array(5).fill(0).map((value, i) => i + 1);
console.log(array);

const arr = Array.of(1, 2, 3, 4, 5);
const arr1 = Array.apply(null, { length: 5 }).map((_, i) => i + 1);
const arr2 = [...Array(5).keys()].map((i) => i + 1);
// any many ways to create arrays in js
console.log(arr, arr1, arr2);

//Task2
console.log("first and last element of the array", arr[0], arr[arr.length - 1]);

// Task 3 array pop, push, shift, unshift and remove from array
console.log(arr.pop());
console.log({ arr });

console.log(arr.push(5));
console.log("here", arr.shift(3)); //give any value in shift won't matter it will pop out only first elemnt from the array
console.log({ arr });

arr.unshift(1);
console.log({ arr });
arr.unshift(3);
console.log({ arr });

// arr = [1, 2, 3, 4, 5];
const removedElements = arr.splice(2, 1); // removedElements is [3], arr is now [1, 2, 4, 5]
console.log(removedElements);

// Task 4
arr5 = [1, 2, 3, 4, 5];
const newArr = arr5.filter((num) => num !== 3);
arr5 = [12, 21];
// without let, const, var declaration you can do only in non strict mode and if you do so,
// it would be considered as global object- in browser check by window.arr, and in node env check by global.arr
console.log(newArr, global.arr5); // [ 1, 2, 4, 5 ]
// ES6/JavaScript - declaring variables without let/const
// Stack Overflow - https://stackoverflow.com/questions/36444783/es6-javascript-declaring-variables-without-let-const#:~:text=By%20omitting%20let%20%2C%20const%20%2C%20or,property%20on%20the%20global%20object.

let arr6 = [1, 2, 3, 4, 5];
const index = arr6.indexOf(3);
if (index > -1) {
  arr.splice(index, 1); // arr is now [1, 2, 4, 5]
}
console.log(arr); // [1, 2, 4, 5]

// Activity 3

arr6 = [1, 2, 3, 4, 5];
console.log(
  "array return multipled",
  arr6.map((i, index) => i * i)
);

console.log(
  "filtered 3 ",
  arr6.filter((i, index) => i != 3)
);

// Reduce
arr6 = [1, 2, 3, 4, 5];
let ReducedValue = arr6.reduce((prev, curr) => (prev += curr));
console.log("====================================");
console.log(ReducedValue);
console.log("====================================");

//for looop and forEach loop
console.log(
  arr6.forEach((i, index) => {
    console.log("i", i);
  })
); //would log undefined because doesn't return anything

//Activity 5
//  create 2d array in js and print all the values
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Logging values from the array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

// Log each row as a single line
console.log("Matrix 1:");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}

//middle element
console.log(matrix[1][1]);
