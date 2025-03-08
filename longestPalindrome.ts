
function longestPalindrome(s: string): number {
    //initialize letters dictionary to track "letter: count"
    let letters = {}
    //initialize a total variable
    let length = 0
    //iterate through every letter
    for (const letter of s){
        //if the letter is already in the dict
        if(letters[letter]){
            //increase it by 1
            letters[letter] += 1
            //if it becomes even (a pair)
            if(letters[letter] % 2 == 0){
                //increase the max length by 2
                length += 2
            }
        }
        else{
            //else just initialize the count to 1
            letters[letter] = 1
        }
    }
    //iterate through the dictionary
    for(const letter in letters){
        //if an odd number exists
        if(letters[letter] % 2 != 0){
            //add the total by 1
            length += 1
            break 
        }
    }
    //return the total
    return length 
};
