class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for(let x = 0;x < nums.length;x++){
            if (seen.has(nums[x])){
                return true
        }
        seen.add(nums[x]);
        }
        return false;

    }
}
