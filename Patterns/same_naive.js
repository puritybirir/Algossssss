// same([1,2,3], [4,1,9]) should return true]
// same([1,2,3], [1,9]) should return false
// same([1,2,1], [4,4,1]) should return false

function same(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i=0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

