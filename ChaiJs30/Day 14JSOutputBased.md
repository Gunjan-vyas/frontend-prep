# 20 Tricky JavaScript Output Questions (With Detailed Reasoning)

This document contains **20 commonly asked JavaScript output-based questions** along with **clear, interview-ready explanations**. These are extremely popular in **SDE-1 / SDE-2 frontend interviews**.

---

## 1. `var` Hoisting

```js
console.log(a);
var a = 10;
```

### Output

```js
undefined
```

### Reasoning

* `var` declarations are **hoisted** to the top of their scope
* Initialization is **not hoisted**

Internally:

```js
var a;
console.log(a);
a = 10;
```

---

## 2. Temporal Dead Zone (`let`)

```js
console.log(b);
let b = 20;
```

### Output

```js
ReferenceError
```

### Reasoning

* `let` is hoisted but placed in **Temporal Dead Zone (TDZ)**
* Accessing before initialization throws error

---

## 3. `typeof null`

```js
console.log(typeof null);
```

### Output

```js
"object"
```

### Reasoning

* Legacy JavaScript bug
* `null` is a primitive, but `typeof` incorrectly reports it as `object`

---

## 4. Loose vs Strict Equality

```js
console.log(0 == false);
console.log(0 === false);
```

### Output

```js
true
false
```

### Reasoning

* `==` performs **type coercion**
* `===` checks both **type and value**

---

## 5. Array + Array

```js
console.log([1,2] + [3,4]);
```

### Output

```js
"1,23,4"
```

### Reasoning

* Arrays convert to strings using `.toString()`
* String concatenation occurs

---

## 6. Object Comparison

```js
console.log({} == {});
```

### Output

```js
false
```

### Reasoning

* Objects are compared by **reference**, not value
* Two literals create different memory locations

---

## 7. `this` in Regular Function

```js
function test() {
  console.log(this);
}
test();
```

### Output

```js
window / global object
```

### Reasoning

* In non-strict mode, `this` defaults to global object

---

## 8. `this` in Arrow Function

```js
const obj = {
  a: 10,
  fn: () => console.log(this.a)
};
obj.fn();
```

### Output

```js
undefined
```

### Reasoning

* Arrow functions **do not have their own `this`**
* `this` is taken from surrounding scope

---

## 9. Function Declaration Hoisting

```js
foo();
function foo() {
  console.log("Hello");
}
```

### Output

```js
Hello
```

### Reasoning

* Function declarations are fully hoisted

---

## 10. Function Expression Hoisting

```js
bar();
var bar = function() {
  console.log("Hi");
};
```

### Output

```js
TypeError: bar is not a function
```

### Reasoning

* `bar` is hoisted as `undefined`
* Calling `undefined()` throws error

---

## 11. `setTimeout` with `var`

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

### Output

```js
3
3
3
```

### Reasoning

* `var` has **function scope**
* All callbacks reference the same `i`

---

## 12. `setTimeout` with `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

### Output

```js
0
1
2
```

### Reasoning

* `let` has **block scope**
* Each iteration creates a new binding

---

## 13. Event Loop Order

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

### Output

```js
A
D
C
B
```

### Reasoning

* Sync code runs first
* Promise callbacks (microtasks) run before `setTimeout` (macrotasks)

---

## 14. Promise Chaining

```js
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => Promise.resolve(x + 1))
  .then(console.log);
```

### Output

```js
3
```

### Reasoning

* Each `.then()` returns a resolved promise

---

## 15. `parseInt` Gotcha

```js
console.log(parseInt("10+2"));
console.log(parseInt("7.5"));
```

### Output

```js
10
7
```

### Reasoning

* Parsing stops at invalid character

---

## 16. `map` + `parseInt`

```js
console.log(["1","2","3"].map(parseInt));
```

### Output

```js
[1, NaN, NaN]
```

### Reasoning

* `map` passes `(value, index)`
* `parseInt(value, radix)` → radix becomes index

---

## 17. `NaN` Comparison

```js
console.log(NaN === NaN);
console.log(isNaN(NaN));
```

### Output

```js
false
true
```

### Reasoning

* `NaN` is not equal to itself

---

## 18. `delete` on Array

```js
let arr = [1,2,3];
delete arr[1];
console.log(arr.length);
```

### Output

```js
3
```

### Reasoning

* `delete` removes element, not index
* Creates empty slot

---

## 19. Closure

```js
function outer() {
  let x = 10;
  return function() {
    x++;
    console.log(x);
  }
}

const fn = outer();
fn();
fn();
```

### Output

```js
11
12
```

### Reasoning

* Inner function remembers lexical scope

---

## 20. `arguments` Object

```js
function test(a, b) {
  arguments[0] = 100;
  console.log(a);
}
test(1, 2);
```

### Output

```js
100
```

### Reasoning

* In non-strict mode, `arguments` and parameters are linked

---

# Deep Explanation of Tricky JavaScript Output Questions

This document explains **how and why JavaScript behaves the way it does** for some of the most confusing interview questions. Each section includes **step‑by‑step execution**, **internal rules**, and **interview follow‑up questions with answers**.

---

## 16. `map + parseInt`

### Code

```js
console.log(["1", "2", "3"].map(parseInt));
```

### Output

```js
[1, NaN, NaN]
```

---

### Step 1: How `map` works internally

`Array.prototype.map` invokes the callback with **three arguments**:

```js
(value, index, array)
```

So internally, JavaScript executes:

```js
parseInt("1", 0)
parseInt("2", 1)
parseInt("3", 2)
```

---

### Step 2: How `parseInt` works

```js
parseInt(string, radix)
```

* `string` → value to parse
* `radix` → base (allowed range: **2 to 36**)

---

### Step 3: Evaluate each call

#### ✅ First iteration

```js
parseInt("1", 0)
```

* Radix `0` → defaults to **base 10**
* Result → `1`

---

#### ❌ Second iteration

```js
parseInt("2", 1)
```

* Base **1 is invalid**
* Radix must be ≥ 2

Result:

```js
NaN
```

---

#### ❌ Third iteration

```js
parseInt("3", 2)
```

* Base 2 allows only `0` and `1`
* `3` is invalid in binary

Result:

```js
NaN
```

---

### Final Output

```js
[1, NaN, NaN]

console.log(parseInt("321", 1));//NAN
console.log(parseInt(100, 3));//9
console.log(parseInt(" 0xF", 16));//15
console.log(parseInt(100, 2));//4
console.log(parseInt("100", 2));//4
```

---





### Interview Follow‑ups

#### Q1: How do you fix this?

```js
["1", "2", "3"].map(Number)
```

or

```js
["1", "2", "3"].map(x => parseInt(x, 10))
```

---

#### Q2: Why does `Number()` work?

* `Number()` accepts **only one argument**
* No radix confusion

---

## 17. Why `NaN === NaN` is `false`

### Code

```js
console.log(NaN === NaN);
console.log(isNaN(NaN));
```

### Output

```js
false
true
```

---

### What is `NaN`?

`NaN` means **Not a Number** and represents an **invalid numeric result**.

Examples:

```js
0 / 0
Number("abc")
Math.sqrt(-1)
```

---

### Core Rule (Very Important)

> **`NaN` is the only JavaScript value that is NOT equal to itself**

```js
NaN !== NaN
```

---

### Why was it designed this way?

* `NaN` represents an undefined or invalid computation
* Comparing invalid results is meaningless
* JavaScript follows **IEEE‑754 floating‑point standard**

---

### Correct way to check `NaN`

❌ Wrong:

```js
value === NaN
```

✅ Correct:

```js
Number.isNaN(value)
```

or

```js
isNaN(value)
```

---

### Interview Follow‑ups

#### Q1: Difference between `isNaN` and `Number.isNaN`

```js
isNaN("abc")        // true  (type coercion)
Number.isNaN("abc") // false (no coercion)
```

👉 Prefer **`Number.isNaN`**

---

#### Q2: Is `NaN` a number?

```js
typeof NaN // "number"
```

---

## 6. Why `{}` == `{}` is `false`

### Code

```js
console.log({} == {});
```

### Output

```js
false
```

---

### Step 1: How objects are stored in memory

Objects are stored as **references**:

```js
let a = {};
let b = {};
```

Memory representation:

```
a → 0x001
b → 0x002
```

Different memory addresses.

---

### Step 2: Object comparison rule

> **Objects are compared by reference, not by value**

So:

```js
0x001 === 0x002 // false
```

---

### When does object comparison return true?

```js
let a = {};
let b = a;

console.log(a === b); // true
```

Both variables point to the **same memory location**.

---

### Why JavaScript does NOT compare object values automatically?

* Objects can be large and nested
* Deep comparison is expensive
* JS leaves value comparison to developers

---

### Interview Follow‑ups

#### Q1: How to compare object values?

```js
JSON.stringify(obj1) === JSON.stringify(obj2)
```

⚠️ Order dependent

or

```js
_.isEqual(obj1, obj2) // lodash
```

---

#### Q2: Why does `[] === []` return false?

Arrays are also **objects**, so reference comparison applies.

---

## Final Interview Summary 🧠

* `map + parseInt` fails because **index becomes radix**
* `NaN !== NaN` because it represents **invalid computation**
* Objects compare **memory references, not content**


