/* 
    * First unique character in a string
    * LeetCode Problem : www.leetcode.com/problems/first-unique-character-in-a-string/
    * Difficulty: Easy
    * * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
    * 
    * Example 1:
    * Input: s = "leetcode"
    * Output: 0
    * Explanation: The first non-repeating character is 'l' and it is at index 0.
    * 
    * Example 2:
    * Input: s = "loveleetcode"
    * Output: 2
    * Explanation: The first non-repeating character is 'v' and it is at index 2.
    * 
    * Example 3:
    * Input: s = "aabb"
    * Output: -1
    * Explanation: There is no non-repeating character, so return -1.
    * * Constraints:
    * 1 <= s.length <= 10^5
    * s consists of only lowercase English letters.
    * 
    *   
*/

function firstUniqChar(s) {
    const charCount = {};
    
    // Count the occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i; // Return the index of the first unique character
        }
    }
    
    return -1; // Return -1 if there is no unique character
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
