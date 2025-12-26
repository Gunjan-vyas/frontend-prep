# Effective JavaScript Logging – Performance Deep Dive

## Why `console.log` Can Break Performance (and Cause TLE)

Logging looks harmless, but in JavaScript it can easily become the **slowest part of your program**, especially inside loops or hot paths.

This document explains **what really happens internally**, why `console.log({ x })` is slower than `console.log(x)`, and how to log **effectively and safely**.

---

## 1. `console.log(totalPenalty)` vs `console.log({ totalPenalty })`

### Case A: Logging a primitive

```js
console.log(totalPenalty);
```

**What happens internally**:

1. `totalPenalty` is a primitive (`number`)
2. JS engine converts it to a string
3. Writes it to stdout

✅ No allocation
✅ No inspection
✅ Minimal formatting

**Cost**: relatively small

---

### Case B: Logging an object

```js
console.log({ totalPenalty });
```

This line does **much more work**.

**Internal steps**:

1. A **new object is allocated**

   ```js
   { totalPenalty: 42 }
   ```
2. Console inspects the object
3. Enumerates keys
4. Formats key–value pairs
5. Prepares lazy expansion metadata (for DevTools / Node)
6. Sends formatted structure to stdout

❌ Memory allocation
❌ Property enumeration
❌ Formatting overhead
❌ Garbage Collection pressure

---

### Performance comparison

| Aspect          | Primitive | Object |
| --------------- | --------- | ------ |
| Allocation      | ❌         | ✅      |
| Property scan   | ❌         | ✅      |
| Formatting cost | Low       | High   |
| GC pressure     | ❌         | ✅      |
| DevTools hooks  | ❌         | ✅      |

📉 Object logging can be **5–20× slower** than primitive logging.

Inside loops, this difference becomes **catastrophic**.

---

## 2. Why `console.log` Is Slow in Loops

### `console.log` is:

* **Synchronous**
* **I/O bound**
* **Environment dependent**

It is *not* a cheap function call.

### Approximate cost comparison

| Operation            | Time       |
| -------------------- | ---------- |
| Arithmetic (`a + b`) | ~1 ns      |
| Array access         | ~1–5 ns    |
| `console.log()`      | ~50–200 µs |

That is **100,000× slower** than arithmetic.

---

### Why this causes TLE

If:

```txt
n = 100,000
```

Then:

```txt
100,000 × 100 µs = 10 seconds
```

Typical JS time limit on online judges:

```txt
~1–2 seconds
```

➡️ Guaranteed TLE

---

## 3. Why This Is Worse in JavaScript Than C++ / Java

### JavaScript

* No fast I/O
* Logging is synchronous
* Object inspection is expensive
* Stdout is captured by the judge

### C++ / Java

* Buffered output
* Faster streams
* Compiler optimizations

👉 JavaScript logging is designed for **debugging**, not competitive execution.

---

## 4. Why Object Logs Are Extra Dangerous

```js
console.log({ i, penalty });
```

Problems:

* Creates an object every iteration
* Forces property enumeration
* Keeps references alive in DevTools

Even this is expensive:

```js
console.log({ x });
```

Because `{ x }` still creates `{ x: x }`.

---

## 5. Safe Logging Limits (Rule of Thumb)

| Logs Count | Result         |
| ---------- | -------------- |
| ≤ 100      | Safe           |
| ~1,000     | Risky          |
| ~5,000     | Slow           |
| ≥ 10,000   | Likely TLE     |
| ≥ 100,000  | Guaranteed TLE |

Exact limits depend on environment, but **don’t rely on them**.

---

## 6. Effective Logging Patterns

### ✅ Log primitives, not objects

```js
console.log(i, penalty);
```

Instead of:

```js
console.log({ i, penalty });
```

---

### ✅ Log conditionally

```js
if (i < 10) console.log(penalty);
```

```js
if (penalty < minPenalty) {
  console.log("New best", i, penalty);
}
```

---

### ✅ Batch logs (best practice)

```js
let logs = [];

logs.push(penalty);

// later
console.log(logs.slice(0, 20));
```

One log is always better than thousands.

---

### ✅ Use debug flags

```js
const DEBUG = false;

DEBUG && console.log("Debug info");
```

---

### ✅ Use log levels (production apps)

```js
logger.debug()
logger.info()
logger.error()
```

Disable `debug` in production.

---

## 7. Why LeetCode Counts Logging Time

* Stdout is captured
* Stored in memory
* Sent to UI
* Execution time includes I/O

Logs are **not ignored**.

---

## 8. Key Takeaways

* `console.log` is **not free**
* Logging objects is **much slower** than primitives
* Logs inside loops can **destroy performance**
* Many TLEs are actually **I/O bugs**, not algorithm bugs

> Use logging for insight, not for iteration.

---

## Final Rule

**If a line runs more than 1,000 times, it should not contain `console.log`.**

Log smart. Ship fast 🚀
