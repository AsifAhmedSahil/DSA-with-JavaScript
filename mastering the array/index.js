// master the array
// push == in the array
// pop == last element out
// noting in js is fixed , if array is 3 Array(3) then i also put arr[10] = 150

// array is linear ds which store multiple value  in contiuous

// sum of n element of an array

// max element find  -- without sorting

// let arr = [10, 21, 100, 2, 36];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

// 2nd max element find 

// let arr = [10,30,40,56,45,36,85,12]

// let maximum = Math.max(arr[0],arr[1])
// let secondMaximum = Math.min(arr[0],arr[1])

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]> maximum){
//         secondMaximum = maximum
//         maximum = arr[i]
//     } else if(arr[i] > secondMaximum && maximum != arr[i]){
//         secondMaximum = arr[i]
//     }
// }

// console.log(secondMaximum)

// reverse the array with extra space

// let arr = [10,20,30,40,50]
// let temp = new Array(arr.length)

// let j=0
// for(let i = arr.length-1; i>=0; i--){
//     temp[j] = arr[i]
//     j++

// }

// console.log(temp)

//reverse the array wihout extra space

// let arr= [10,20,30,40,50]

// let i = 0 , j=arr.length-1;

// while(i!=j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }

// console.log(arr)

///two pointer theory

// question is sort binary number based on 0 one side and 1 another side

// here i is moving forward always, if find 0 then swap with j , if j swap then j moving forward

// let arr = [1,1,0,0,1,0,1,0,1,1,0]

// let i=0,j=0

// while(i<arr.length){
//     if(arr[i]==0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }

// console.log(arr)

// replace neg and positive number

function negativeAndPositiveNumberSegregate(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){

        while(arr[left] < 0 && left < right){
            left++
        }

        while(arr[right] >=0 && left < right){
            right--
        }

        if(left < right){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }

    return arr;
}

let arr = [12, -7, -3, 4, -1, 9, -2];

console.log(negativeAndPositiveNumberSegregate(arr))

//next question




