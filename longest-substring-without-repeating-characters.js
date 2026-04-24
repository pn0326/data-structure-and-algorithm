/* 
    * Longest Subsequence without Repeating Characters
    * Leetcode Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters
    * Difficulty: Medium
    * Given a string s, find the length of the longest substring without repeating characters.
    * Example 1:
    * Input: s = "abcabcbb"
    * Output: 3
    * Explanation: The answer is "abc", with the length of 3.
    * Example 2:
    * Input: s = "bbbbb"
    * Output: 1
    * Explanation: The answer is "b", with the length of 1.
    * Example 3:
    * Input: s = "pwwkew"
    * Output: 3
    * Explanation: The answer is "wke", with the length of 3.
    * Constraints:
    * 0 <= s.length <= 5 * 104
    * s consists of English letters, digits, symbols and spaces.
    * Solution:
    * We can use a sliding window approach to solve this problem. We will maintain a set to keep track of the characters in the current window. We will also maintain two pointers, left and right, to represent the current window. We will iterate through the string with the right pointer and add characters to the set until we encounter a duplicate character. When we encounter a duplicate character, we will move the left pointer to the right until we remove the duplicate character from the set. We will keep track of the maximum length of the window at each step.
    * Here is the implementation in JavaScript: 
    *   
*/

function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
