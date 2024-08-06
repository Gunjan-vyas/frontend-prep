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

**Day 09**

Using rel="noopener" in a link tag is necessary for security and performance reasons, especially when the link opens in a new tab or window. Here’s a detailed explanation:

1. Security

Prevent Tabnabbing: Without rel="noopener", the newly opened page can potentially gain access to the original page via window.opener.

This access can be exploited by malicious pages to change the location of the original page (i.e., redirect it to a phishing site), which is known as "tabnabbing".

Example of a phishing attack: if no opener is not used

if (window.opener) { window.opener.location = "https://phishing-site.com"; }

2. Performance Improvement:

When a new tab or window is opened without rel="noopener", the original page maintains a reference to the new page, which can increase memory usage.

Using rel="noopener" breaks this reference, reducing memory overhead and improving performance.

Correct way to usage `<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`

**Day 11** Promise => eventually completion object

Async and await cannot catch errors so Therefore, we wrap Try and catch to catch error case

then -> resolve and catch -> reject handles error case automatically


if i add two string element like 

typeof("1" + "0" + 0); -> string

typeof("1" + "0" - 0); -> number

When the - operator is used, JavaScript tries to convert the string to a number. The string "10" is successfully converted to the number 