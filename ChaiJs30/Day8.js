//Act 1
// Template literals
let name = "asdf";
let age = 12;
console.log(`${name} and age is ${age}`); // name is reserved keyword

// print multiline template literals
console.log(`Title: ${name}
  age: ${age}`);

//Act 2
let arr = new Array(5).fill(0).map((val, i) => i + 1); //fill(0) is necessary because only Array(5) will create an array of length 5 [ <5 empty items> ]
console.log(arr);

let [first, second] = arr; // array destructuring
console.log(`destructing of first ${first} and ${second} array values`);

let book = {
  title: "first book",
  Author: "boor",
};
let { title, Author } = book;
console.log(title, "Author", Author);

// NOTE: Function arguments behave like local variables that can be reassigned, similar to let, but they are not explicitly declared with let or const.
// They have their own unique characteristics as part of JavaScript's function parameter handling.
function add(a) {
  // console.log("");
  // let a = "something";// syntax error cannot assign
  a = "something"; // can modify just like let but
}
add(3);

//Imp:
// The variable declared with var inside a function is not accessible outside of it. The keyword var has function-scope.
function f1() {
  let f_name = "Alex";
  const ZIP = 560089;
  var age = 25;
}

f1();

// console.log(f_name); // Uncaught ReferenceError: f_name is not defined
// console.log(ZIP); // Uncaught ReferenceError: ZIP is not defined
// console.log(age); // Uncaught ReferenceError: age is not defined

//Act3
//spread
let a = [1, 2, 3];
let newArray = [...a, 12, 232];

//rest
function addFn(a, b, ...args) {
  console.log("args", args);
  console.log("typeof args", typeof args); //args is object type

  let addedRes = a + b + args.reduce((acc, num) => acc + num, 0);
  return addedRes;
}

let ans = addFn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("ans", ans);

//Act4
// Parameters are declared in the function definition.
// Arguments are provided during the function call.
let defaultValue = 1;
function multiFunc(parameter1, parameter2 = defaultValue) {
  console.log("parama", parameter1, parameter2);
  return parameter1 * parameter2;
}

console.log("====================================");
console.log(multiFunc(10));
console.log("====================================");

// Below is the example of Enhanced Object Literals

// variable declaration
var Name = "Tike";
var Color = "Black";
var Age = 7;

// function declaration
var bark = function () {
  console.log("Woof Woof!!");
};

// Using Object Literal Enhancement
// combines all variables into an anotherDog object
var anotherDog = { Name, Color, Age, bark };
anotherDog.bark();

