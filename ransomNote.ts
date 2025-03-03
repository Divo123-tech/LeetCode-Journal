function canConstruct(ransomNote: string, magazine: string): boolean {
    let lettersInMag = {}
    for(const letter of magazine){
        if(lettersInMag[letter]){
            lettersInMag[letter]++
        }
        else{
            lettersInMag[letter] = 1
        }
    }

    for(const letter of ransomNote){
        if(lettersInMag[letter]){
            lettersInMag[letter]--
        }
        else if(lettersInMag[letter] == 0){
            return false
        }
        else{
            return false
        }
    }
    return true
};
