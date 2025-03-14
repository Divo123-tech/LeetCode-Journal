
function addBinary(a: string, b: string): string {
    let padding = ""
    if(a.length > b.length){
        for(let i = 0; i < a.length - b.length; i++){
            padding+= "0"
        }
        b = padding + b
    }
    else if (a.length < b.length){
        for(let i = 0; i < b.length - a.length; i++){
            padding+= "0"
        }
        a = padding + a
    }
    let carryOver = false
    let finalString = ""
    for(let i = a.length - 1; i >= 0; i--){
        if (a[i] == "0" && b[i] == "0"){
                if(carryOver){
                    finalString = "1" + finalString
                    carryOver = false

                }
                else{
                    finalString = "0" + finalString

                }

        }
        else if(a[i]=="1" && b[i] == "1"){
            if(carryOver){
                finalString = "1" + finalString
            }
            else{
            finalString = "0" + finalString

            }
            carryOver = true
        }
        else{
            if(carryOver){
                finalString = "0" + finalString

            }
            else{
                finalString = "1" + finalString
                carryOver=false
            }
        }
    }
    if(carryOver){
        finalString = "1" + finalString
    }
    return finalString
};
