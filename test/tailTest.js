const tail = require('../tail.js');
const assertEqual = require('../assertEqual');




const words = ["Yo Yo", "Lighthouse", "Labs"];
let newTail = tail(words);
assertEqual(newTail.length, 3); // original array should still have 3 elements!
assertEqual(newTail.length, 1); // original array should still have 3 elements!
assertEqual(newTail[0],'Lighthouse');
assertEqual(newTail[1],'Lighthouse');
