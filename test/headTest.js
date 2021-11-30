const head = require('../head.js');
const assertEqual = require('../assertEqual');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([" "]),1);
assertEqual(head([3,2,3]),1);