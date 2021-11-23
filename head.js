const assertEqual = function(actual, expected) {
  if(actual=== " ")
  console.log("Undefined");
  else {
  if (actual === expected)
    console.log("Assertion Passed:" + actual + "===" + expected);
  else if(actual !== expected)
    console.log("Assertion Failed:" + actual + "!=" + expected);
  }
};
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


function head(array){
  return array[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([" "]),1);
assertEqual(head([3,2,3]),1);

