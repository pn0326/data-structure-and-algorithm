/*
242. Valid Anagram
leetcode link: https://leetcode.com/problems/valid-anagram/
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.   
*/

isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let sObj = {}
        let tObj = {}
        for(let i=0; i<s.length; i++){
            sObj[s[i]] = sObj.hasOwnProperty(s[i]) ?  sObj[s[i]] + 1 :  1
            tObj[t[i]] = tObj.hasOwnProperty(t[i]) ?  tObj[t[i]] + 1 :  1
        }
        
        for(let key in sObj){
            if(sObj[key] !== tObj[key]){
                return false
            }
        }
        return true
    }
