/* 
    * LeetCode: 16. 3Sum Closest
    * Link: https://leetcode.com/problems/3sum-closest/

    * Given an array of +ve and -ve integers, 
    * find a pair whose sum is closest to Zero in Array. 
    * Example: [-2, 2, 5, 9, -3, 6] Answer: [2, -3]

    * Approach:
    1. Initialize two variables, closestPair and closestSum, to store the closest pair and its sum.
    2. Use two nested loops to iterate through all possible pairs of integers in the array.
    3. Calculate the sum of each pair and compare its absolute value with the absolute value of closestSum.
    4. If the current sum is closer to zero than closestSum, update closestSum and closestPair with the current pair.
    5. After checking all pairs, return the closestPair.

    * Time Complexity: O(n^2) due to the nested loops.
    * Space Complexity: O(1) as we are using only a constant amount of extra space.
*/


function findPairClosestToZero(arr) {
    let closestPair = [];
    let closestSum = Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if (Math.abs(sum) < Math.abs(closestSum)) {
                closestSum = sum;
                closestPair = [arr[i], arr[j]];
            }
        }
    }

    return closestPair;
}

// Example usage:
const arr = [-2, 2, 5, 9, -3, 6];
const result = findPairClosestToZero(arr);
console.log(result); // Output: [2, -3] 
