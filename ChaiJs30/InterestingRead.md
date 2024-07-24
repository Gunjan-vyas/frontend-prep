_Function Arguments in JavaScript_

When you declare a function and define its parameters, JavaScript creates local variables for each of these parameters. These local variables are initialized with the values provided when the function is called. Here are the key aspects of how JavaScript handles function arguments:

1. Local Scope Function parameters are scoped to the function in which they are declared. This means they can only be accessed within the function itself.

Example:

function greet(name) { console.log("Hello, " + name); // 'name' is accessible here }

greet("Alice"); console.log(name); // ReferenceError: name is not defined

2. Initialization If no value is provided for a parameter, it is initialized with undefined.

function greet(name) { console.log("Hello, " + name); }

greet(); // "Hello, undefined"

3. Arguments Object JavaScript functions have an arguments object that contains all the arguments passed to the function. This object is array-like but not an actual array. It is available within all non-arrow functions.

function sum() { let total = 0; for (let i = 0; i < arguments.length; i++) { total += arguments[i]; } return total; }

console.log(sum(1, 2, 3)); // 6

Note:

Parameters are declared in the function definition.

Arguments are provided during the function call.
