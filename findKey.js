
const assertEqual = function(actual, expected) {
  if (actual === expected)
    return "Assertion Passed:" + actual + "===" + expected;
  else
    return "Assertion Failed:" + actual + "!=" + expected;
};


const findKey = function  (obj,callback){
  
  let val=[];
   const keys= Object.keys(obj);          
  for (let key of keys) { 
  if (callback (obj[key])){          //x.stars===2
  return key;
 }   
 }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
 const xyz = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); 

console.log(assertEqual(xyz,"noma"));

