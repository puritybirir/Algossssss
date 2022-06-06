function charCount(str) {
  let obj = {};
  for(let char of str){
    if(isAlphanumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
}

function isAlphanumeric(char){
  let code = char.charCodeAt(0)
  if(!(code > 47 && code < 58) &&
     !(code > 64 && code < 91) &&
     !(code > 96 && code < 123)) {
       return false;
      }
    return true;
  }


console.log(charCount('hello'))
