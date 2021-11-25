
    //An array to map
    //A callback function
    //eturn a new array based on the results of the callback function

const map = function(array, callback) {
  const results = [];
   for (let item of array) {
    results.push(callback(item));
    }
    return results;
 };
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

const assertArraysEqual = function(ar1, ar2) {
  let val = eqArrays(ar1, ar2);
  if (val === true)
    console.log("Assertion Passed: [" + ar1 + "] === [" + ar2 + "]");
  else if (val === false)
    console.log("Assertion Failed: [" + ar1 + "] != [" + ar2 + "]");
};

       
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [1, 2, 3]);