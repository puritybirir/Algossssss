// This is a continuation of Sum

// function charCount(str) {
//   let stringObj = {};
//   for( let i=0; i<str.length; i++){
//     let char = str[i].toLowerCase() ;
//     if(/[a-z0-9]/.test(char)){
//       if(stringObj[char]> 0){
//         stringObj[char]++
//       } else {
//         stringObj[char] = 1;1
//       };
//     }
//   }
//   return stringObj;
// }

// console.log(charCount('hello'));



function charCount(str) {
  let stringObj = {};
  for( var char of str){
    char=char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      stringObj[char] = ++stringObj[char] || 1
    }
  }
  return stringObj;
}

console.log(charCount('hello'));
