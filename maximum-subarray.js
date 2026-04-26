/* 
    * Maximum Subarray 
    * Leetcode: https://leetcode.com/problems/maximum-subarray/
    * Difficulty: Medium
    * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    * Example 1:
    * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    * Output: 6
    * Explanation: [4,-1,2,1] has the largest sum = 6.
    * 
    * Example 2:
    * Input: nums = [1]
    * Output: 1
    * Explanation: The subarray [1] has the largest sum = 1.
    * 
    * Example 3:
    * Input: nums = [5,4,-1,7,8]
    * Output: 23
    * Explanation: The subarray [5,4,-1,7,8] has the largest sum = 23.
    * Constraints:
    * 1 <= nums.length <= 10^5
    * -10^4 <= nums[i] <= 10^4
    * Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
    * Solution: Kadane's Algorithm
    * Time Complexity: O(n)
    * Space Complexity: O(1)
    * Kadane's Algorithm is a dynamic programming approach that iterates through the array while keeping track of the maximum sum of a subarray ending at the current index. It updates the maximum sum found so far and returns it at the end.
    * 
*/

function maxSubArray(nums) {

    if(nums.length == 1) {
        return nums[0];
    }
    
    let maxSum = nums[0]; 
    let currentSum = 0; 
    for (let i = 0; i < nums.length; i++) {
        currentSum = currentSum + nums[i]; 
        maxSum = currentSum > maxSum ? currentSum : maxSum
        currentSum = currentSum < 0 ?  currentSum = 0 :  currentSum;
    }

    return maxSum;

}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6    



