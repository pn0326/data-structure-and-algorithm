/* 
    * Longest common prefix
    * Leetcode: https://leetcode.com/problems/longest-common-prefix/
    * Difficulty: Easy
    * Description: Given an array of strings, find the longest common prefix string amongst them. If there is no common prefix, return an empty string "".
    * Solution: Vertical scanning
    * Time complexity: O(S) where S is the sum of all characters in all strings
    * Space complexity: O(1) excluding the space for the output string
    * Explanation: We iterate through each character of the first string and compare it with the corresponding character in the other strings. If we find a mismatch or reach the end of any string, we return the longest common prefix found so far. 
    * Example 1: Input: ["flower","flow","flight"] Output: "fl"
    * Example 2: Input: ["dog","racecar","car"] Output: "" (no common prefix)
    * Example 3: Input: ["interspecies","interstellar","interstate"] Output: "inters"
    * Example 4: Input: ["throne","throne"] Output: "throne" (all strings are the same)
    * Example 5: Input: [""] Output: "" (empty string is the only common prefix)
    * Example 6: Input: ["a"] Output: "a" (single string is the common prefix)
    * Example 7: Input: ["ab", "a"] Output: "a" (common prefix is "a")
    * Example 8: Input: ["abc", "abcd", "abcde"] Output: "abc" (common prefix is "abc")
    * Example 9: Input: ["abc", "def", "ghi"] Output: "" (no common prefix)
    * Example 10: Input: ["prefix", "prefixes", "pref"] Output: "pref" (common prefix is "pref")
    *
*/

Function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""
console.log(longestCommonPrefix(["interspecies","interstellar","interstate"])); // Output: "inters"
console.log(longestCommonPrefix(["throne","throne"])); // Output: "throne"
console.log(longestCommonPrefix([""])); // Output: ""
console.log(longestCommonPrefix(["a"])); // Output: "a"
console.log(longestCommonPrefix(["ab", "a"])); // Output: "a"
console.log(longestCommonPrefix(["abc", "abcd", "abcde"])); // Output: "abc"
console.log(longestCommonPrefix(["abc", "def", "ghi"])); // Output: ""
console.log(longestCommonPrefix(["prefix", "prefixes", "pref"])); // Output: "pref"
