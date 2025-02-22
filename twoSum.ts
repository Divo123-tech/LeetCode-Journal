function twoSum(nums: number[], target: number): number[] {
    let nums_dict = new Map<number,number>(); //number: index
    for(let i = 0; i<nums.length; i++){
        if(nums_dict.has(target-nums[i])){
            return [nums_dict.get(target-nums[i]), i]
        }

        nums_dict.set(nums[i], i)
    }
};
