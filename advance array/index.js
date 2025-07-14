//  left side rotation == i+1 er value k tule i positoin e boshai dao

// let arr = [1,2,3,4,5]

// let copy = arr[0]

// for(let i = 0; i< arr.length - 1; i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length-1] = copy

// console.log(arr)


//  right rotation => last dik theke start korte hbe i , i-1 position er value k tule i e boshabo

let arr = [1,2,3,4,5]

let copy = arr[arr.length-1]

for(let i = arr.length-1; i > 0; i--){
    arr[i] = arr[i-1]
}

arr[0] = copy

console.log(arr)
