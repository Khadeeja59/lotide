const assertEqual = function(actual, expected) {
  if (actual === expected)
    return true;
  else
    return false;
};
const eqArrays = function(arr1, arr2) {
  let comp = [];
  let res;
  for (let i = 0; i < arr1.length; i++)
    comp.push(assertEqual(arr1[i], arr2[i]));
  //console.log(comp);
  for (let i = 0; i < comp.length; i++) {
    if (comp[i] === false) {
      res = false;
    }
    else {
      res = true;
    }
  }
  return res;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
