class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum = 0;
        let correctValues = []
        for (let i = 0; i < nums.length;i++){
            for (let j = i+1 ; j < nums.length;j++){
                sum = nums[i]+nums[j];
                if(sum === target){
                    correctValues.push(i,j);
                }
            }   
        }
        return correctValues;
    }
}
