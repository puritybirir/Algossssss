// You want to search an array for a specific value and get the array element index if found.

let animals = new Array("dog", "cat", "seal", "elephant", "walrus", "lion");

console.log(animals.indexOf("elephant"));

let animals2 = new Array("dog","cat","seal","walrus","lion", "cat");

console.log(animals2.indexOf("cat"));
console.log(animals2.lastIndexOf("cat"));

let animals3 = new Array("dog","cat","seal","walrus","lion", "cat");

console.log(animals3.indexOf("cat",2));
console.log(animals3.indexOf("cat",4));
console.log(animals3.lastIndexOf("seal",4));
