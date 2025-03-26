function containsDuplicate(nums: number[]): boolean {
    const nums_dict = {}
    for(const num of nums){
        if (nums_dict[num]){
            return true
        }
        nums_dict[num] = 1
    }
    return false
};
