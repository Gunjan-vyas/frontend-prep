let num = 1;
if (num < 0) {
  console.log("num negative");
} else if (num > 0) {
  console.log("num positive");
} else {
  console.log("num is zero");
}

// nested if else to get max value
let a = 1;
let b = 3;
let c = 2;
function test(a, b, c) {
  if (a < b) {
    if (b > c) return b;
    return c;
  } else {
    if (c > a) return c;
    return a;
  }
}
console.log(test(a, b, c));

switch (num) {
  case 1:
    console.log("monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
}

function findLeapYear(year) {
  // A year is a leap year if it is divisible by 4 and (not divisible by 100 or divisible by 400)
  if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
    console.log(year + ' is a leap year');
    return true;
  } else {
    return false;
  }
}
console.log("find 2000 leap year", findLeapYear(2000));
