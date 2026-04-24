/* 
    * Trapping Rain Water
    * Leetcode: https://leetcode.com/problems/trapping-rain-water/
    * Difficulty: Hard
    * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
    * Example 1:
    * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    * Output: 6
    * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
    * Constraints:
    * n == height.length
    * 0 <= n <= 3 * 104
    * 0 <= height[i] <= 105
    * Solution:
    * We can use a two-pointer approach to solve this problem. We will maintain two pointers, left and right, to represent the current window. We will also maintain two variables, leftMax and rightMax, to keep track of the maximum height from the left and right sides respectively. We will iterate through the array with the two pointers and update the maximum heights at each step. The amount of water that can be trapped at each position is determined by the minimum of the maximum heights from both sides minus the current height.
    * Here is the implementation in JavaScript: 
*/

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}

// Example usage:
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6
