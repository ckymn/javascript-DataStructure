"use strict"
// input [1,2,3,4,5,6,7,8,9,10]
// output [2,4,6,8,10]

// ! SOLUTION 1
const removeEven = (arr) => {
  let newArr = [];
  for (let val of arr) {
    if (val % 2 != 0) newArr.push(val);
  }
  return newArr;
};

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(removeEven(values));

// ! SOLUTION 2
const removeEven2 = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

//console.log(removeEven2(values));

// ! SOLUTION 3
const removeEven3 = (arr) => {
  return arr.filter((val) => val % 2 != 0);
};

//console.log(removeEven3(values));

