const assertEqual = function(actual, expected) {
  if (actual === expected)
    return "Assertion Passed:" + actual + "===" + expected ;
  else
    return "Assertion Failed:" + actual + "!=" + expected;
};

const eqArrays = function(arr1, arr2) {
  
    if (arr1.length === arr2.length){

      for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]===arr2[i]){
          return true;
        }
        else  { 
          
          return false;
        }
    }
  }

    else {
      return false;
    }
  
  };
 

const eqObjects = function(object1, object2) {
  const key1=Object.keys(object1);
  const key2=Object.keys(object2);
  //let equalObj= false;
  if( key1.length !== key2.length){
    return false;
   }
    
    else{
      for(let key of key1) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        return (eqArrays(object1[key],object2[key]));
        }
        else if (object1[key] !== object2[key]){
        return false;
        }
        }
        return true;
      }
     
    };  



const assertObjectsEqual = function(actual , expected) { 
  const val = eqObjects (actual,expected);
  const inspect = require('util').inspect; // <= add this line
  if (val === true) 
    return `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`; 
   else
   return `Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`; 
    //return `Example label: ${inspect(actual)}`;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let x = eqObjects (ab,ba);
console.log(x); // => true
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));


const abc = { a: "1", b: "2", c: "3" };
let y = (eqObjects(ab, abc)); // => false
console.log(y); // => false
console.log(assertObjectsEqual( { a: "1", b: "2" },{ a: "1", b: "2", c: "3" }));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let z = eqObjects (cd,dc);
console.log(z); // => true
console.log(assertObjectsEqual({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" }));


const cd2 = { c: "1", d: ["2", 3, 4] };
let w = eqObjects(cd, cd2); // => false
console.log(w); // => true
console.log(assertObjectsEqual({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] })); // => false