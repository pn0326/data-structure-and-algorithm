/* 
    * Count Pairs Of Similar Strings
    * LeetCode Problem : www.leetcode.com/problems/count-pairs-of-similar-strings
    * Difficulty : Easy
    * Given an array of strings words, return the number of pairs of similar strings in the array.
    * Two strings are similar if they consist of the same characters.
    * Example 1:
    * Input: words = ["aba","aabb","abcd","bac","aabc"]
    * Output: 2
    * Explanation: There are 2 pairs of similar strings in the array:
    * - ("aba", "bac") -> The characters in each string are {'a', 'b', 'c'}.
    * - ("aabb", "aabc") -> The characters in each string are {'a', 'b', 'c'}.
    * Example 2:

    * Input: words = ["aabb","ab","ba"]
    * Output: 3
    * Explanation: There are 3 pairs of similar strings in the array:
    * - ("aabb", "ab") -> The characters in each string are {'a', 'b'}.
    * - ("aabb", "ba") -> The characters in each string are {'a', 'b'}.
    * - ("ab", "ba") -> The characters in each string are {'a', 'b'}.
    * Example 3:

    * Input: words = ["nba","cba","dba"]
    * Output: 0
    * Explanation: There are no pairs of similar strings in the array.  
  
    *   
*/

function countPairs(words) {
    let count = 0;
    const map = new Map();

    for (const word of words) {
        const uniqueChars = new Set(word);
        const key = [...uniqueChars].sort().join('');

        if (map.has(key)) {
            count += map.get(key);
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    return count;
}

// Example usage:
const words1 = ["aba", "aabb", "abcd", "bac", "aabc"];
console.log(countPairs(words1)); // Output: 2

const words2 = ["aabb", "ab", "ba"];
console.log(countPairs(words2)); // Output: 3

const words3 = ["nba", "cba", "dba"];
console.log(countPairs(words3)); // Output: 0
