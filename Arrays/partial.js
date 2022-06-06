/** When you want to traverse an array until you find either a specific
 * element or an element that meets or doesn't meet a specific criteria
 *
 * */

let numArray = new Array(1, 4, 66, 123, 240, 444, 555);
let i = 0;

while(numArray[i] < 100) {
  console.log(numArray[i++]);
}
