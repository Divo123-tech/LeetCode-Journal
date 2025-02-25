function isAnagram(s: string, t: string): boolean {
    let lettersUsed = {}
    if (s.length !== t.length) {
        return false;
    }
    for(const letter of s){
        if(lettersUsed[letter]){
           lettersUsed[letter]++ 
        }
        else{
            lettersUsed[letter] = 1
        }
    }

    for(const letter of t){
        if(!lettersUsed[letter]){
            return false
        }
        else{
           lettersUsed[letter]-- 
        }
    }
    

    for(const key in lettersUsed){
        if (lettersUsed[key] != 0){
            return false
        }
    }
    return true

};
