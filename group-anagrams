/*
Group Anagrams
Leetcode Problem 49
Leetcode Link: https://leetcode.com/problems/group-anagrams/

Given an array of strings, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

Key Concept
Anagrams: Two strings are anagrams if they have the same characters with the same frequencies (e.g., "eat", "tea", and "ate" are all anagrams).
Approach: Sort the characters in each string alphabetically. Anagrams will produce the same sorted string (e.g., "eat" → "aet", "tea" → "aet"). Use this sorted string as a key to group the original strings.

Step-by-Step Walkthrough
Initialize a Map: map will hold the groups. Each key is a sorted string, and each value is an array of strings that match that key.
Loop through each string:
Take the current string (e.g., "eat").
Sort its characters: "eat".split('') → ['e', 'a', 't'], then .sort() → ['a', 'e', 't'], then .join('') → "aet".
Check if "aet" is already a key in the map. If not, create a new empty array for it.
Push the original string ("eat") into the array for that key.
Repeat for all strings: Anagrams like "tea" and "ate" will all sort to "aet" and end up in the same array.
Return the result: Convert the map's values (the arrays) into a single array of arrays.
Example
Input: ["eat","tea","tan","ate","nat","bat"]
After processing:
"eat", "tea", "ate" → sorted: "aet" → group: ["eat", "tea", "ate"]
"tan", "nat" → sorted: "ant" → group: ["tan", "nat"]
"bat" → sorted: "abt" → group: ["bat"]
Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]] (order may vary)
Time Complexity
Sorting each string: O(k log k) where k is the string length.
For n strings: O(n * k log k).
This is efficient for the constraints (n ≤ 10^4, k ≤ 100).
Edge Cases Handled
Empty strings: "" sorts to "", so they group together.
Single characters: "a" sorts to "a".
All unique strings: Each gets its own group.

*/


groupAnagram(strs) {
    const map = new Map(); // Key: sorted string, Value: list of original strings
    for (const str of strs) {
        // Sort characters to create a canonical representation for this anagram group
        const sortedStr = str.split('').sort().join('');
        
        // If this sorted key doesn't exist yet, initialize an empty group
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the correct anagram group
        map.get(sortedStr).push(str);
    }
    
    // Return just the grouped arrays, not the keys
    return Array.from(map.values());
}
