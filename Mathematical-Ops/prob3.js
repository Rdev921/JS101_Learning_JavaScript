// - You have to take five numbers, stored in variables with the following names

//      one, two, three, four, five, six  

// The value stored in the variable`two, five, six`has been doubled, such that if initially the value was 3, it has become 6

// The value stored in the variable`three, four`has been increased three times, such that if initially it was 3, it has become 9

// The value stored in the variable `one` has not been changed.

// Find the sum of the updated values stored in`one, two, three, four, five, six`


let one= 1;
let two= 2;
let three= 3;
let four= 4;
let five= 5;
let six= 6;

let sum1 = ((two+six+five) * 2);
let sum2 = ((three+four) * 3);
console.log(sum1+sum2+one);
