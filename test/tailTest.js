const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
   
   const words = ["Yo Yo", "Lighthouse", "Labs"];
   let newTail = tail(words);

  it("returns 2 for length", () => {
    assert.strictEqual(newTail.length, 2)
  });
  it("returns 2 for length", () => {
    
    assert.strictEqual(newTail.length, 1);
  });
  it("returns Lighthouse for Tail[0]", () => {
    assert.strictEqual(newTail[0],'Lighthouse');

  })
  it("returns Labs for Tail[1]", () => {
    
    assert.strictEqual(newTail[1],'Labs');

  })
});


// const tail = require('../tail.js');
// const assertEqual = require('../assertEqual');




// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let newTail = tail(words);
// assertEqual(newTail.length, 3); // original array should still have 3 elements!
// assertEqual(newTail.length, 1); // original array should still have 3 elements!
// assertEqual(newTail[0],'Lighthouse');
// assertEqual(newTail[1],'Lighthouse');
