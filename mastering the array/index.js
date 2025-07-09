// master the array
// push == in the array
// pop == last element out
// noting in js is fixed , if array is 3 Array(3) then i also put arr[10] = 150

// array is linear ds which store multiple value  in contiuous

// sum of n element of an array

// max element find  -- without sorting

let arr = [10, 21, 100, 2, 36];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);

// 2nd max element find 
