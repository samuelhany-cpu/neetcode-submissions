class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};
        let complement;
        for (let i = 0; i < nums.length; i++) {
            complement = target - nums[i];

            if (seen[complement] !== undefined) {
                return [ i,seen[complement]];
            }

            seen[nums[i]] = i;
        }
    }
}
