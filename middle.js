const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// const eqArrays = function(arr1, arr2) {
//   let comp = [];
//   let res;
//   if( Array.isArray(arr1) && Array.isArray(arr2)) {
//     if (arr1.length === arr2.length){
//       for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i]!==arr2[i]){
//           return false;
//         }
//       }
//     return true;
//     } 
//     else {
//       return false;
//     }
//   }
// };

// const assertArraysEqual = function(ar1, ar2) {
//   let val = eqArrays(ar1, ar2);
//   if (val === true)
//     console.log("Assertion Passed: [" + ar1 + "] === [" + ar2 + "]");
//   else if (val === false)
//     console.log("Assertion Failed: [" + ar1 + "] != [" + ar2 + "]");
// };


const middle = function(arr){
  let mid=[];
  if (arr.length===1 || arr.length===2){
    return [];
  }
  else if (arr.length %2 == 0 ){
    let l;
    l= arr.length/2;
    mid=[arr[l-1],arr[l]];
    return mid;
  }
  else if (arr.length % 2 !== 0) {
    let l;
    l = (arr.length-1)/2;
    mid=[arr[l]];
    return mid;

  }

};
module.exports = middle;
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1,2,3,4]));
// console.log(middle([1,2,3,4,5,6]));
// assertArraysEqual(middle([1, 2, 3]), [2]);