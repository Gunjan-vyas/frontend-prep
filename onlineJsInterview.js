let a = "hi my name is gunjna";

let b = a.split(" ").map((word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
});

console.log(b);
b = b.join(" ");
console.log(b);

let sentence = "hi my name is gunjan";

let obj = {};
let letters = sentence.split("");

const odd = [1, 3, 5];
const nums = [2, ...odd, 4, 6];
console.log(nums.sort()); //[ 1, 2, 3, 4, 5, 6 ]

console.log(Math.floor(4.9)); //longhand
console.log(~~4.9); //shortHand

const num1 = +"100"; // convert str to num
console.log(typeof num1);

const arr = [];
console.log(arr.indexOf(3)); //if index you wrote is not present in arrray it will give -1;
// ~ is bitwise operator "NOT	Inverts all the bits"
console.log(~arr.indexOf(2));
console.log(~2);

const ekobj = {
  dursra: {
    a: "ad",
    b: "kuch bhi",
  },
  tisara: {
    a: "teri",
    b: "asdf",
  },
};
Object.keys(ekobj).map((a) => {
  console.log(a);
});

// slice
var Arr = [1, 2, 3, 4, 5];
// Arr.slice(2,2);
var p = Arr.slice(2, 4);
console.log(p);

var numberji = 100000000;
console.log(numberji.toLocaleString("en-IN"));

var filteredNum = Arr.filter(function (value) {
  return value > 2;
});
console.log(filteredNum);
console.log(Arr);

Arr.forEach(function (value) {
  value = value * 2;
});
console.log(Arr);
// For each for reading values
// and Map is to use those value and do some operations on those
Arr.reduce((acc, val) => {
  console.log(acc, ":", val);
  return val;
});

function add(a) {
  return function addb(b) {
    return a + b;
  };
}

var ans = add(2)(3);
console.log(ans);

// (function(){
// const ab = b = 2;
// console.log(a, b);// 2 2
// })();//iife
// console.log("working",ab);// ReferenceError would come

// var abc = [3,5,7,89];
// // abc.reverse();
// const newArraywillCreate =  new Array;
// abc.forEach((i)=>{
//   console.log(i);
//   const element = [i].reverse();
//   console.log(i.toString().reverse(), " dasf")
//   newArraywillCreate.push(...element)
// })
// console.log(abc,newArraywillCreate)

const runThisImplicitReturnFunc = () => (console.log("works"), console.log("works great"));
runThisImplicitReturnFunc();

console.log("some".type);

function gunjan() {
  var kuchToh = 100;
  console.log(kuchToh);
}
gunjan();
// console.log(kuchToh);

let PrintEvenNum = [1, 2, 3, 4, 5];

console.log(PrintEvenNum.filter((n) => n % 2 == 0).map((i) => i));
console.log(PrintEvenNum.flatMap((n) => (n % 2 == 0 ? n : [])));

let gun = 2;
if (gun == 0) {
  console.log("coming here");
}
if (gun == 1 || gun == 0) {
  console.log("in second");
} else if (gun == 2) {
  console.log("sodf");
} else {
  console.log("going in else");
}
