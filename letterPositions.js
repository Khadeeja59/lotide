const letterPositions = function(sentence) {
 ans={};
 //console.log(sentence);
  //ans = { h -> 0 e ->1 l -> 2,3,4 o -> 5 } 

   for(let i=0; i<sentence.length;i++){
    if(sentence[i] !==" ") { 
      let a=[] 
      if(ans[sentence[i]]) {
         ans[sentence[i]].push(i) 
        } 
        else{ 
          a.push(i) 
          ans[sentence[i]] = a 
        } 
      } 
      
    }
    return ans;
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

const word="lighthouse in the house";
console.log(letterPositions(word));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
