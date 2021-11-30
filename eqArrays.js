// const assertEqual = function(actual, expected) {
//   if (actual === expected)
//     return true;
//   else
//     return false;
// };



const eqArrays = function(arr1, arr2) {
  let comp = [];
  let res;
  if( Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length){
      for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]!==arr2[i]){
          return false;
        }
      }
    return true;
    } 
    else {
      return false;
    }
  }
};








// const eqArrays = function(arr1, arr2) {
//   let comp = [];
//   let res;
//   for (let i = 0; i < arr1.length; i++)
//     comp.push(assertEqual(arr1[i], arr2[i]));
//   console.log(comp);
//   for (let i = 0; i < comp.length; i++) {
//     if (comp[i] === false) {
//       res = false;
//     }
//     else {
//       res = true;
//     }
//   }
//   return res;
// };
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
module.exports = eqArrays;  //added later