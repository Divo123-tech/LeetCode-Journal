function backspaceCompare(s: string, t: string): boolean {
    let sModified = "";
    for (let i = 0; i < s.length; i++){
        if (s[i] == "#"){
            sModified = sModified.substring(0, sModified.length - 1);
        }
        else{
            sModified += s[i];
        }
    }
    let tModified = "";
     for (let i = 0; i < t.length; i++){
        if (t[i] == "#"){
            tModified = tModified.substring(0, tModified.length - 1);
        }
        else{
            tModified += t[i];
        }
    }
    return sModified == tModified
};
