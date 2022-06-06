// To access stored values in reverse order (last item added is accessed first), create a LIFO (last-in, first-out) stack

// create new array
let queue = new Array();

// push on three entries
queue.push('first');
queue.push('second');
queue.push('third');

// pop two entries
console.log(queue.pop());
console.log(queue.pop());
console.log(queue);
