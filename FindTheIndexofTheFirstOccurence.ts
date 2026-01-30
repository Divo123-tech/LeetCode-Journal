/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack == needle){
        return 0
    }
    if(haystack.includes(needle)){
        for(let h = 0; h < haystack.length + needle.length - 1; h++){
            for(let n = 0; n < needle.length; n++){
                if(needle[n] == haystack[h + n]){
                    if(n == needle.length - 1){
                        return h
                    }
                }
                else{
                    break
                }
            }
        }
    }
    else{
        return -1
    }
};
