/* 
    * Remove Duplicates from Sorted Array
    * Leetcode: https://leetcode.com/remove-duplicates-from-sorted-array
    * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
    * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
    * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    * Return k.
    * 
    * Example 1:
    * Input: nums = [1,1,2]
    * Output: 2, nums = [1,2,_]
    * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
    * Example 2:
    * Input: nums = [0,0,1,1,1,2,2,3,3,4]
    * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
    * Constraints:
    * 1 <= nums.length <= 3 * 104
    * -100 <= nums[i] <= 100
    * nums is sorted in non-decreasing order.
    * Follow up: Could you solve this problem in O(1) extra memory space?
    * 
    * 
*/

function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Handle empty array case

    let k = 1; // Initialize k to 1 since the first element is always unique

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // Check if the current element is different from the previous one
            nums[k] = nums[i]; // Move the unique element to the position k
            k++; // Increment k for the next unique element
        }
    }

    return k; // Return the number of unique elements
}

// Example usage:
const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // Output: 2, nums1 = [1, 2, _]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2)); // Output: 5, nums2 = [0, 1, 2, 3, 4, _, _, _, _, _]
