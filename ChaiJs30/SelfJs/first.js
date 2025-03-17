/**
 * Key point: return inside forEach does NOT break/exit the loop.
When you write a return inside a forEach callback, it only exits that callback function for the current iteration — but the loop itself continues to the next element.
 */
const nums = [1, 2, 3, 4];

nums.forEach((num) => {
  if (num === 3) {
    console.log("Found 3, returning!");
    return; // This only returns from the callback, not the whole forEach loop
  }
  console.log("Number:", num);
});
console.log("Done");
