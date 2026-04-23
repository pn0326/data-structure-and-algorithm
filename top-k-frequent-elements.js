/* 
    * Top K Frequent Elements
    * Leetcode: https://leetcode.com/problems/top-k-frequent-elements/
    * Difficulty: Medium
    * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
    * Example 1:
    * Input: nums = [1,1,1,2,2,3], k = 2
    * Output: [1,2]
    * Example 2:
    * Input: nums = [1], k = 1
    * Output: [1]
    * Constraints:
    * 1 <= nums.length <= 10^5
    * k is in the range [1, the number of unique elements in the array].    
    * 
  
    *   
*/

function topKFrequent(nums, k) {
    const frequencyMap = new Map();

    // Count the frequency of each element
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Create an array of [element, frequency] pairs
    const frequencyArray = Array.from(frequencyMap.entries());

    // Sort the array based on frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);

    // Extract the top k elements
    const topKElements = frequencyArray.slice(0, k).map(entry => entry[0]);

    return topKElements;
}
// Example usage:
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(topKFrequent(nums1, k1)); // Output: [1, 2]

const nums2 = [1];
const k2 = 1;
console.log(topKFrequent(nums2, k2)); // Output: [1]
