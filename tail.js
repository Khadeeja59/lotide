// const assertEqual = function(actual, expected) {    (commented to create tailTest)
//   if (actual === " ")
//     console.log("Undefined");
//   else {
//     if (actual === expected)
//       console.log("Assertion Passed:" + actual + "===" + expected);
//     else if (actual !== expected)
//       console.log("Assertion Failed:" + actual + "!=" + expected);
//   }
// };

const tail = function(tail) {
  let theTail = tail.splice(1);
  //console.log(theTail);
  return theTail;
};
module.exports = tail;  //added later

//(commented to create tailTest)
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let newTail = tail(words);
// console.log(newTail); // no need to capture the return value since we are not checking it
// assertEqual(newTail.length, 3); // original array should still have 3 elements!
// assertEqual(newTail.length, 1); // original array should still have 3 elements!
// assertEqual(newTail[0],'Lighthouse');
// assertEqual(newTail[1],'Lighthouse');


