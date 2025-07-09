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

let arr = [10,30,40,56,45,36,85,12]

let maximum = Math.max(arr[0],arr[1])
let secondMaximum = Math.min(arr[0],arr[1])

for(let i = 2; i<arr.length; i++){
    if(arr[i]> maximum){
        secondMaximum = maximum
        maximum = arr[i]
    } else if(arr[i] > secondMaximum && maximum != arr[i]){
        secondMaximum = arr[i]
    }
}

console.log(secondMaximum)

// reverse the array without extra space




