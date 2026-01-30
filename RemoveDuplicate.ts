/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNum = nums[0]
    let k = 1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == currentNum){
            continue
        }
        else{
            currentNum = nums[i]
            nums[k] = nums[i]
            k++
        }
    }
    return k
};
