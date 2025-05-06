https://leetcode.com/problems/build-array-from-permutation/description/?envType=daily-question&envId=2025-05-06

Solution: var buildArray = function (nums) { return nums.map(item => nums[item]); };

Achieve this in constant space with map in JS Notice that you can't apply it on the same array directly since some elements will change after application

🔄 Why does it still work correctly? Because Array.prototype.map() does not modify the original array during iteration.

It creates a new array and iterates over nums as it was at the beginning of the .map() call.

This means:

nums.map(...) loops through each element once, left to right.

The nums[item] lookup always uses the original nums, not the modified one.

Even if some nums[item] values refer to indices later in the array, they’re read, not written.
