const findKeyByValue = function (obj,value) {
  let key= Object.keys(obj);     
  //console.log(key)      //[scifi comedy drama]
  for(let key in obj){
    
    if (obj[key]=== value){
    return key;
    }

  }
    
  }
  const assertEqual = function(actual, expected) {
    if (actual === expected)
      console.log("Assertion Passed:" + actual + "===" + expected);
    else
      console.log("Assertion Failed:" + actual + "!=" + expected);
  };
  
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",                              
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
//findKeyByValue ( bestTVShowsByGenre, "The Wire");
console.log(findKeyByValue ( bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
