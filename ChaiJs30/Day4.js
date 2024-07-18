function table(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = `, num * i);
  }
}

table(5);

let num = 10;
while (num) {
  console.log(num--);
}

num = 10;
do {
  console.log("num", num--);
} while (num);
{
}

function factorial(num) {
  let result = 1;
  let current = num;

  do {
    result *= current;
    current--;
  } while (current > 0);

  return result;
}

num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);

//Task 7:
// pattern print
function patternPrint(num) {
  let ans = "";
  for (let i = 0; i < num; i++) {
    ans += " *";
    console.log(ans);
  }
}
patternPrint(5);

//Task 8
for (let i = 1; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log("current number i", i);
}

// Task 9
for (let i = 1; i < 10; i++) {
  if (i == 7) {
    break;
  }
  console.log("current number i to break at 7 and ", i);
}
