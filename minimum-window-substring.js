/* 
    * Minimum Windows Substring
    * Leetcode: https://leetcode.com/problems/minimum-window-substring
    * Difficulty: Hard
    * Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".
    * The testcases will be generated such that the answer is unique.
    * Example 1:
    * Input: s = "ADOBECODEBANC", t = "ABC"
    * Output: "BANC"
    * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
    * 
    * Example 2:
    * Input: s = "a", t = "a"
    * Output: "a"
    * Explanation: The entire string s is the minimum window.
    * 
    * Example 3:
    * Input: s = "a", t = "aa"
    * Output: ""
    * Explanation: Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.
    * Constraints:
    * 1 <= s.length, t.length <= 10^5
    * s and t consist of English letters.
    * 
    * 
*/

function minWindow(s, t) {
    if (s.length < t.length) return "";
    const charCount = {};
    for (let char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let left = 0, right = 0, required = Object.keys(charCount).length, formed = 0;
    const windowCounts = {};
    let minLength = Infinity, minLeft = 0;

    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (charCount[char] && windowCounts[char] === charCount[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            const currentChar = s[left];
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
            }
            windowCounts[currentChar]--;
            if (charCount[currentChar] && windowCounts[currentChar] < charCount[currentChar]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
