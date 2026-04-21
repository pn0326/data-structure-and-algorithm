/* 
    * LeetCode: 16. 3Sum Closest
    * Link: https://leetcode.com/problems/3sum-closest/
    * Description: Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
    * Example:
        Input: nums = [-1,2,1,-4], target = 1
        Output: 2
        Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
    * Constraints:
        3 <= nums.length <= 10^3
        -10^3 <= nums[i] <= 10^3
        -10^4 <= target <= 10^4
        
*/

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum with the first three elements

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; // Left pointer
        let right = nums.length - 1; // Right pointer

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right]; // Calculate current sum

            // Update closest sum if current sum is closer to target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move pointers based on comparison with target
            if (currentSum < target) {
                left++; // Move left pointer to the right
            } else {
                right--; // Move right pointer to the left
            }
        }
    }

    return closestSum; // Return the closest sum found
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2

