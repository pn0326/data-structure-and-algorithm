/**
 * This question is from https://leetcode.com/problems/contains-duplicate/
 * This question is asked by Amazon. Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * This question is also asked by Google, Facebook, Microsoft, Apple, Adobe, Uber, Twitter, LinkedIn, Airbnb, Dropbox, and many more companies.
 * This question is similar to 217. Contains Duplicate II, 219. Contains Duplicate II, and 220. Contains Duplicate III.
 * This question says that we need to find if the array contains any duplicates. We can use a Set to store the unique values of the array. If the length of the Set is less than the length of the original array, then there are duplicates in the array. Otherwise, all elements are distinct.
 * This question is a common question that is asked in coding interviews. It is a good question to test the candidate's understanding of data structures and their ability to solve problems efficiently.
 * This question can be solved in O(n) time complexity and O(n) space complexity using a Set. We can also solve this question in O(n log n) time complexity and O(1) space complexity by sorting the array and checking for adjacent duplicates. However, the Set solution is more efficient and easier to implement.
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * The code implementation of this solution is as follows:
 * This question has a time complexity of O(n) and a space complexity of O(n) because we need to store the unique values in a Set.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
    hasDuplicate(nums) {
        let newNums = new Set(nums);
        if([...newNums].length < nums.length){
            return true
        }else{
            return false
        }
    }
