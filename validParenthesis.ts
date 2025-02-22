function isValid(s: string): boolean {
  let chars = []
  let openCloseDict = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  for(let char of s){
    if(openCloseDict[char] && chars.length == 0 ){
        return false
    }
    if(char == "(" || char=="[" || char=="{"){
        chars.push(char)
    }
    //checks if its a closing
    else{
        //is the top the cooresponding opening bracket
        if(chars[chars.length - 1] == openCloseDict[char]){
            chars.splice(chars.length-1)
        }
        else{
            return false
        }
    }

    
  }
  return chars.length == 0
};
