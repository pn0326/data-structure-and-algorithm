/* 
    * Product of Array Except Self
    * Leetcode: https://leetcode.com/problems/product-of-array-except-self/
    * Difficulty: Medium
    * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
    * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.
    * Example 1:
    * Input: nums = [1,2,3,4]
    * Output: [24,12,8,6]
    * 
    * Example 2:
    * Input: nums = [2,3,4,5]
    * Output: [60,40,30,24]
    * 
    * Constraints:
    * 2 <= nums.length <= 10^5
    * -30 <= nums[i] <= 30
    * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
    * 
    * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
    * 
    * Explanation:
    * The product of all the elements of nums except nums[i] can be calculated by multiplying the product of all the elements to the left of i with the product of all the elements to the right of i.
    * 
    * To achieve this, we can create two arrays, left and right, where left[i] contains the product of all the elements to the left of i and right[i] contains the product of all the elements to the right of i. Then, we can iterate through the nums array and calculate the answer for each index by multiplying left[i] and right[i].
    * The time complexity of this solution is O(n) and the space complexity is O(n) due to the left and right arrays. However, we can optimize the space complexity to O(1) by using the output array to store the products instead of creating separate left and right arrays.
    * Here is the implementation of the optimized solution:
    * 
*/

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // Calculate the product of all elements to the left of each index
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    
    // Calculate the product of all elements to the right of each index and multiply with the left product
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([2, 3, 4, 5])); // Output: [60, 40, 30, 24]

