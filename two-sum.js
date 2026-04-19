/** 
 * Two Sum problem solution in JavaScript. Where we need to find two numbers in the array that add up to a specific target and return their indices. Given an array of integers and a target integer, return the indices of the two numbers that add up to the target.
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0, 1]
    * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    * Constraints:
    * 2 <= nums.length <= 10^4
    * -10^9 <= nums[i] <= 10^9
    * -10^9 <= target <= 10^9
    * Only one valid answer exists. You may not use the same element twice.
    * Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
    * Solution:
    * We can solve this problem using a hash map (or object in JavaScript) to store the indices of the numbers we have seen so far. As we iterate through the array, we calculate the complement (target - current number) and check if it exists in our hash map. If it does, we have found our two numbers and can return their indices. If not, we add the current number and its index to the hash map for future reference.
    *  This approach has a time complexity of O(n) and a space complexity of O(n) in the worst case, where n is the number of elements in the input array.
    * Here is the implementation of the twoSum function in JavaScript:  
    
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


twoSum(nums, target) {
        let resultObj = {};
        let result = 0;
        for (let i=0; i < nums.length; i++) {
            result = target - nums[i];
            if (resultObj.hasOwnProperty(result)) {
                return [i, resultObj [result]];
            }
            resultObj[nums[i]] = i;
            }
        }
