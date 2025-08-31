
function printFactor(n) {
    let num = n
    let result = []
    let root = Math.sqrt(num)


    for(let i = 1; i < root + 1 ; i++){
        if(num % i == 0){
            result.push(i)
             if(num / i != i){
            result.push(num / i)
        }
        }
       
    }

    result.sort((a,b)=>(a-b))
    return result
}

console.log(printFactor(36))

// update