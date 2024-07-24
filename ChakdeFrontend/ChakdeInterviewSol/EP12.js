//Question 1 : my recursive solution
const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => (a / b) * c,
  D: {
    E: (a, b, c) => a + b + c,
  },
};

function getOutputExecuted(input, ...args) {
  let ans = {};
  Object.keys(input).forEach((key, value) => {
    if (typeof input[key] === "function") {
      return (ans[key] = input[key](...args));
    } else {
      ans[key] = getOutputExecuted(input[key], ...args);
    }
  });
  return ans;
}

console.log("result -> ", getOutputExecuted(input, 1, 1, 1));

//Question2
Array.prototype.myReduce = myReduce;
function myReduce(fn, initialValue) {
  let arr = this;
  let n = arr.length;
  let curr = initialValue;
  for (let i = 0; i < n; i++) {
    curr = fn(curr, arr[i]);
  }
  return curr;
}

let inbuiltSol = [1, 2, 3].reduce((acc, item) => {
  return (acc += item);
}, 0);

let myReducerSol = [1, 2, 3].myReduce((acc, item) => {
  return acc + item;
}, 0);

console.log(inbuiltSol); //6
console.log("myReduce polyfill Sol", myReducerSol); //6

//Reduce usage => 1) accumulation(same as above example)
//Reduce usage => 2) transformation

