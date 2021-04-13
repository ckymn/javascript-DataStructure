"use strict"

// write a JavaScript function to check whether an 'input' is an array or not

// ! SOLUTION 1
const is_array = (input) =>{
    return input instanceof Array ? true : false
}


// console.log(is_array("muhammet"));
// console.log(is_array([1,2,3,4,5]))


//! SOLUTION 2
const is_array2 = (input) =>{
    console.log(toString.call(input));
    return toString.call(input) === "[object Array]" ? true : false
}

// console.log(is_array2("muhammet"));
// console.log(is_array2([1,2,3,4,5]));
