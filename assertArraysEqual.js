
const eqArrays = require('./eqArrays');

// const assertEqual = function(actual, expected) {
//   if (actual === expected)
//     return true;
//   else
//     return false;
// };
// const eqArrays = function(arr1, arr2) {
//   let comp = [];
//   let res;
//   for (let i = 0; i < arr1.length; i++)
//     comp.push(assertEqual(arr1[i], arr2[i]));
//   //console.log(comp);
//   for (let i = 0; i < comp.length; i++) {
//     if (comp[i] === false) {
//       res = false;
//     }
//     else {
//       res = true;
//     }
//   }
//   return res;
//   //console.log (res);
// };
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

const assertArraysEqual = function(ar1, ar2) {
  let val = eqArrays(ar1, ar2);
  if (val === true)
    console.log("Assertion Passed: [" + ar1 + "] === [" + ar2 + "]");
  else if (val === false)
    console.log("Assertion Failed: [" + ar1 + "] != [" + ar2 + "]");
};
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", 2, 3], [3, 2, 1]);
module.exports = assertArraysEqual;
