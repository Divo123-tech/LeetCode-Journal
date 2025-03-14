function majorityElement(nums: number[]): number {
    let nums_dict = {}
    if(nums.length == 1){
        return nums[0]
    }
    for (const num of nums){
        if(nums_dict[num]){
            nums_dict[num]++
            if(nums_dict[num] > nums.length/2){
                return num
            }
        }
        else{
            nums_dict[num] = 1
        }
    }
};
