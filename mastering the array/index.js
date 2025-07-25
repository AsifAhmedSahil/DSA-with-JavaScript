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

// function negativeAndPositiveNumberSegregate(arr){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){

//         while(arr[left] < 0 && left < right){
//             left++
//         }

//         while(arr[right] >=0 && left < right){
//             right--
//         }

//         if(left < right){
//             let temp = arr[left]
//             arr[left] = arr[right]
//             arr[right] = temp
//         }
//     }

//     return arr;
// }

// let arr = [12, -7, -3, 4, -1, 9, -2];

// console.log(negativeAndPositiveNumberSegregate(arr))

//next question
// left rotation and right rotation by k element - bruthforce

// let arr = [1,2,3,4,5]
// let k = 7
// k = k % arr.length

// for(let j=0; j<k; j++){

//     let copy = arr[0]
    
//     for (let i = 0; i<arr.length -1; i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = copy
// }

// console.log(arr)


// left rotation and right rotation by k element - mathmatical algorithm not best approach - this is with extra space***

// let arr = [1,2,3,4,5]
// let temp = new Array(arr.length)
// let k = 2
// k = k % arr.length

// for (let i = 0; i<arr.length; i++){
//     temp[i] = arr[(i+k)%arr.length]
// }

// console.log(temp)

// left rotation and right rotation by k element - best approach(no extra space + no n square)
// left

// let arr =[1,2,3,4,5]
// let k = 3

// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//         i++
//         j--
//     }
// }

// console.log(arr)

// right
// let arr =[1,2,3,4,5]
// let k = 2

// reverse(0,arr.length-1)
// reverse(k,arr.length-1)
// reverse(0,k-1)

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//         i++
//         j--
//     }
// }

// console.log(arr)

// merge 2 sorted array

// let arr1 = [1,3,6]
// let arr2 = [2,4,5]

// let merge = new Array(arr1.length + arr2.length)

// let i=j=k=0

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i] < arr2[j]){
//         merge[k++] = arr1[i++]
//     } else{
//         merge[k++] = arr2[j++]
//     }

// }

// while(j<arr2.length){
//     merge[k++] = arr2[j++]
// }
// while(i<arr1.length){
//     merge[k++] = arr1[i++]

// }

// console.log(merge)

// max sum subarray = kadans algorithm - letcode medium

// let nums = [-2,-1,-3,4,-1,2,1,-5,4]

// let max = -Infinity
// let sum = 0

// for (let i = 0; i<nums.length;i++){
//     sum += nums[i]
//     max = Math.max(sum,max)
//     if(sum<0) sum = 0
// }

// console.log(max)

// leetcode 169 - majority element - moores voting algorithm

// let nums = [2,2,1,1,1,2,2]

// let ans = nums[0]

// count = 1

// for(let i=0; i<nums.length;i++){
//     if(count = 0){
//         ans = nums[i]
//         count = 1
//     } else if(ans === nums[i]) count++;
//     else count --
// }

// console.log(ans)

// leetcode 42 - trapping rain water - hard




