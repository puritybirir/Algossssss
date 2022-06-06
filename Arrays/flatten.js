// You want to flatten a multidimensional array into a single dimensional array.

let originalArrray = new Array();
console.log(originalArrray);

originalArrray[0] = new Array("one", "two");
console.log(originalArrray);

originalArrray[1] = new Array("three", "four");
console.log(originalArrray);

originalArrray[2] = new Array("five","six");
console.log(originalArrray);

originalArrray[3] = new Array("five","six");
console.log(originalArrray);

// flatten this array

let newArray = originalArrray[0].concat(originalArrray[1], originalArrray[2], originalArrray[3]);
console.log(newArray);



