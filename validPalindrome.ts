function isPalindrome(s: string): boolean {
    //convert the string to all lowercase, all spaces, all non-alphanumeric characters

    s = s.split(" ").join("").toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    console.log(s)
    if(s.length < 2){
        return true
    }
    let startP = 0
    let endP = s.length - 1
    while(endP >= startP ){
        if(s[endP] != s[startP]){
            return false
        }
        endP--
        startP++
    }
    return true
};
