# Lexicographical Order in JavaScript (Complete Guide)

This document explains **what lexicographical order means**, **why `Array.prototype.sort()` behaves unexpectedly in JavaScript**, and **how to correctly sort numbers**, with clear examples and interview‑ready explanations.

---

## 1. What does *Lexicographical* mean?

**Lexicographical order** is the same as **dictionary order**.

It means comparing values **character by character from left to right**, based on their **Unicode (ASCII) values**.

### Example (Words)

```js
["apple", "banana", "cat"].sort();
```

Output:

```js
["apple", "banana", "cat"]
```

Why?

* `a` comes before `b`
* `b` comes before `c`

This is exactly how dictionaries work.

---

## 2. How lexicographical comparison works internally

When two strings are compared:

1. Compare the **first character**
2. If equal, compare the **next character**
3. Continue until a difference is found

### Example

```txt
"bat" vs "ball"
 b == b
 a == a
 t > l   → "ball" comes first
```

---

## 3. Why `arr.sort()` fails for numbers in JavaScript

### Example

```js
[11, 2, 13, 7].sort();
```

Output:

```js
[11, 13, 2, 7]
```

❌ This is **not numerical sorting**.

### Why does this happen?

JavaScript **converts numbers to strings** by default when using `sort()`.

Internally, JS treats the array as:

```js
["11", "2", "13", "7"]
```

Now it applies **lexicographical (string) comparison**.

---

## 4. Step‑by‑step comparison (important)

| Comparison  | Result           | Reason      |
| ----------- | ---------------- | ----------- |
| "11" vs "2" | "11" comes first | `'1' < '2'` |
| "13" vs "2" | "13" comes first | `'1' < '2'` |
| "2" vs "7"  | "2" comes first  | `'2' < '7'` |

So the final order becomes:

```txt
11 → 13 → 2 → 7
```

---

## 5. Correct way to sort numbers in JavaScript ✅

You must provide a **compare function**.

### Ascending Order

```js
[11, 2, 13, 7].sort((a, b) => a - b);
```

Output:

```js
[2, 7, 11, 13]
```

### Descending Order

```js
[11, 2, 13, 7].sort((a, b) => b - a);
```

Output:

```js
[13, 11, 7, 2]
```

---

## 6. How the compare function works

```js
(a, b) => a - b
```

| Return value | Meaning              |
| ------------ | -------------------- |
| `< 0`        | `a` comes before `b` |
| `> 0`        | `b` comes before `a` |
| `0`          | order stays same     |

This forces **numerical comparison** instead of string comparison.

---

## 7. Lexicographical vs Numerical Sorting (Side‑by‑Side)

| Input        | Default `sort()` | With Compare Function |
| ------------ | ---------------- | --------------------- |
| `[10, 2]`    | `[10, 2]` ❌      | `[2, 10]` ✅           |
| `[1, 20, 3]` | `[1, 20, 3]` ❌   | `[1, 3, 20]` ✅        |

---

## 8. When lexicographical sorting is actually useful

Lexicographical sorting is **correct and intentional** when working with:

* Names
* Words
* IDs
* Alphanumeric strings

### Example

```js
["A12", "A2", "A1"].sort();
```

Output:

```js
["A1", "A12", "A2"]
```

This is expected behavior.

---

> **JavaScript `sort()` sorts elements as strings by default using lexicographical order. For numerical sorting, a compare function is mandatory.**

This question is extremely common in frontend interviews.

---

## 10. One‑line summary 🧠

> **Lexicographical order = dictionary order. JavaScript sorts arrays as strings unless explicitly told otherwise.**


