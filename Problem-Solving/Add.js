// Write a function that takes in a string and returns counts of each character in the string

/**Simple inputs */
// characterCount('aaaaaaa'); // {a:4};
// characterCount('hello'); // {h:1 e:1 l:2 0:1};

/** Complex inputs */
// characterCount('My phone number is 182763');
// characterCount('Hello hi');

/**Empty inputs */
// characterCount("")

/**Invalid inputs */
// characterCount(20)

function characterCount(str) {
  // make object to return at end
  var result = {}
  // loop over string for each character
  for(var i=0; i< str.length; i++){
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add  one to count
    if(result[char] > 0){
      result[char]++;
    }
    // if the char is is a number/letter AND not in object, add it and set value to 1
    else {
      result[char] = 1
    };
  }
    // if char is something else (space, period, etc..) don't do anything
    // return object at end
    return result;
}


console.log(characterCount('hello'));
