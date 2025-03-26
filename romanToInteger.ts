function romanToInt(s: string): number {
    const romanIntMap = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let total = 0;
    let lastValue = 0;
    for(let i = s.length - 1; i >= 0; i--){
        const letter = s[i]
        if (lastValue > romanIntMap[letter] ){
            total -= romanIntMap[letter]
        }
        else{
            total += romanIntMap[letter]
        }
        lastValue = romanIntMap[letter]

    }
    return total
};
