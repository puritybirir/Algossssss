// to sort an array use the sort method
// it sorts the array alphabetically
// To facilitate the sort, all data types are converted to their string equivalent before sorting:

let fruitArray = ['strawberry','apple','orange','banana','lime'];
console.log(fruitArray.sort());

// see with no

let numberArray = [4,13,2,31,5];
console.log(numberArray.sort());

// not acccurate ay

// to do an actual  number sort we go

function compareNumbers(a, b) {
  return a - b;
}

let numArray = [13, 2, 31, 4, 5];

console.log(numArray.sort(compareNumbers))

