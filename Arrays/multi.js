// Creating a multi dimensional array

// set array lenght
let arrayLength = 3;

// Create array
let multiArray = new Array(arrayLength);

console.log(multiArray)
for( var i = 0; i < multiArray.length; i++) {
  multiArray[i] = new Array(arrayLength)
}

// add items to first array index
multiArray[0][0] = "apple";
multiArray[0][1] = "banana";
multiArray[0][2] = "cherry";

// second
multiArray[1][0] = 2;
multiArray[1][1] = 56;
multiArray[1][2] = 83;

// third
multiArray[2][0] = ['test','again'];
multiArray[2][1] = ['Java','script'];
multiArray[2][2] = ['read','books'];


// Table using multi-dimensional arrays

let table = new Array(5);

table[0] = [45.89, 4, 34, 9998.99, 56]; // first row
table[1] = [3, 23, 99, 43, 2]; // second row
table[2] = [1, 1, 0, 43, 67]; // third row
