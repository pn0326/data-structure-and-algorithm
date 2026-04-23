/* 
    * Split Array into Consecutive Subsequences
    * Leetcode: https://leetcode.com/problems/split-array-into-consecutive-subsequences/
    * Difficulty: Medium
    * Given an integer array nums sorted in non-decreasing order, return true if you can split it into one or more subsequences such that each subsequence is a consecutive increasing sequence (i.e., each integer is exactly one more than the previous integer). Otherwise, return false.
    * Example 1:
    * Input: nums = [1,2,3,3,4,5]
    * Output: true
    * Explanation: You can split them into two consecutive increasing subsequences : 1, 2, 3 and 3, 4, 5
    
    * Example 2:
    * Input: nums = [1,2,3,3,4,4]
    * Output: false   
    * 
    * 
  
    *   
*/

function isPossible(nums) {
    const freq = new Map();
    const need = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const num of nums) {
        if (freq.get(num) === 0) continue;

        if (need.get(num) > 0) {
            need.set(num, need.get(num) - 1);
            need.set(num + 1, (need.get(num + 1) || 0) + 1);
        } else if (freq.get(num + 1) > 0 && freq.get(num + 2) > 0) {
            freq.set(num + 1, freq.get(num + 1) - 1);
            freq.set(num + 2, freq.get(num + 2) - 1);
            need.set(num + 3, (need.get(num + 3) || 0) + 1);
        } else {
            return false;
        }

        freq.set(num, freq.get(num) - 1);
    }

    return true;
}

// Example usage:
console.log(isPossible([1, 2, 3, 3, 4, 5])); // Output: true
console.log(isPossible([1, 2, 3, 3, 4, 4])); // Output: false
