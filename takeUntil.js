const takeUntil = function(array, callback) {
  let results=[];
  for ( let element of array){
    if (callback(element)){
      return results;
      
    }
    results.push(element);
    
  }
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
   return "Assertion Passed: [" + ar1 + "] === [" + ar2 + "]";
  else if (val === false)
    return "Assertion Failed: [" + ar1 + "] != [" + ar2 + "]";
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(results1,[1,2,3,4,5]));
console.log(assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]));

