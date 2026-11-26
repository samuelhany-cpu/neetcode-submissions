class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map(); // value -> index

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (seen.has(need)) {
                const j = seen.get(need);
                // ensure smaller index first
                return j < i ? [j, i] : [i, j];
            }

            seen.set(nums[i], i);
        }
    }
}
