// Task 1 find even or odd number
num = 100;
num % 2 == 0 ? console.log("even") : console.log("odd");

// Task 2
function square(n) {
  return n * n;
}
console.log(square(10));

// Task3
function Maxof(a, b) {
  return Math.max(a, b);
}
console.log(Maxof(-1, -2));

// Task 4
function joinTwoString(a, b) {
  return a + " " + b;
}
console.log(joinTwoString("Hello", "World!"));

// Task 5
const sum = (a, b) => {
  return a + b;
};
console.log(sum(2, 4));

// Task 6
let str = "Hello";
function contains(string, specificChar) {
  let some = string.split("").filter((i) => i == specificChar);
  return some.length > 0 ? true : false;
}

console.log("here check if string contains specific character:", contains(str, "e"));

// Task 7
function multiple(a, b = 10) {
  return a * b;
}
console.log(multiple(1));
console.log(multiple(1, 3));

// Task 8 same as Task7

//Task 9
// Higher order function are function which can take function in arg and return function, since in js function are first class object/citizens
function Hoc(fn, num) {
  while (num--) {
    fn(num);
  }
}

Hoc((num) => {
  console.log("working", num++); // even though i increment this num this whole execution doesnot go in infinite loop because of the num scoping
  //Increment: The num++ expression inside the function increments num after it is logged, but this increment is local to that function call and does not persist outside of it.
}, 3);

//Task 10
function HoC2(fn1, fn2, num) {
  let res = fn2(fn1(num));
  console.log("res", res);
}

HoC2(
  function (a) {
    console.log("here1", a);
    return a * 2;
  },
  function (b) {
    console.log("here2", b);
    return b * 3;
  },
  2
);
