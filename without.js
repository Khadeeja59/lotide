const without = function(source, itemsToRemove) {
const result = [];
for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
        result.push(source[i]);
    }
  
}
return result;
};

const assertArraysEqual = function(arr1,arr2){
const a1 = without(arr1,arr2);
console.log(`The array is [${arr1}] and elements to remove is [${arr2}] and final array is: `, without(arr1,arr2));

};

assertArraysEqual([1, 2, 3],[1]);
assertArraysEqual([1,2,3,4,5,6,7,8],[1,3,5,7]);
assertArraysEqual(["hello", "world", "lighthouse"], ["lighthouse"]);
