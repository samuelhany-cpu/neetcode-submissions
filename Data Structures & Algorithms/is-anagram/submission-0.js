class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const anagram = {};

        if (s.length != t.length) {
            return false;
        } else {
            for (let i = 0; i < s.length; i++) {
                let char = s[i];
                if (anagram[char] === undefined) {
                    anagram[char] = 1;
                } else {
                    anagram[char] += 1;
                }
            }
            for (let j = 0; j < t.length; j++) {
                let char = t[j];
                if (anagram[char] === undefined || anagram[char] === 0) {
                    return false;
                } else {
                    anagram[char] -= 1;
                }
            }
            return true;
        }

    }
}
