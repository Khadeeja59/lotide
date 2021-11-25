const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log("Assertion Passed:" + actual + "===" + expected);
  else
    console.log("Assertion Failed:" + actual + "!=" + expected);
};


const countChar = (str) => {
  const counts = {};
  let noSpace= str.split(" ").join("");
  for (const s of noSpace) {            ///  "l" "i" "g" "h" "t"
    if (counts[s]) {                    //counts ["l"]
      counts[s]++                       // counts["l"]++
  
    }
    else {
      counts[s] = 1                    //counts["l"]=1 
    }
  }
  return counts;      
}

const str = "lighthouse in the house";
console.log(countChar(str));
assertEqual(countChar(str)["l"],1);


