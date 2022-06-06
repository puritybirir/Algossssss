// The Array slice method is a simple way of building a new array from a consecutive sequence of elements in another array.

let origArray = new Array(4);
console.log(origArray);

origArray[0] = new Array("one", "two");
console.log(origArray);

origArray[1] = new Array("three", "four");
console.log(origArray);

origArray[2] = new Array("five","six");
console.log(origArray);

origArray[3] = new Array("seven","eight");
console.log(origArray);

var newArray = origArray.slice(1,3);
console.log(newArray)


let first = new Array("one","two","three");
let second = first; // copied by reference

console.log(second);

second[1] = "apple";

// first and second arrays now have "one","apple","three"
console.log(first);
console.log(second);


let origArray2 = new Array(4);
origArray2[0] = new Array("one","two");
origArray2[1] = new Array("three","four");
origArray2[2] = new Array("five","six");
origArray2[3] = new Array("seven","eight");


let newArray2 = origArray2.slice(1,3);

// modify original
origArray2[1][0] = "octopus";

console.log(newArray2);

// modify new
newArray2[1][1] = "kitten";

console.log(origArray2);

let args = Array.prototype.slice.call(arguments);
