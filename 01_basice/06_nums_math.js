const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());

// console.log(balance.toFixed(3));

const hunderds = 1000000;
// console.log(hunderds.toLocaleString());// this is use American excent
// console.log(hunderds.toLocaleString('en-IN')); // for use indian use this

//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-7)); // For doing negative value in positive value
console.log(Math.round(4.5));
console.log(Math.ceil(4.2)); //always taken upper value 
console.log(Math.floor(4.9)); // always taken lower value

console.log(Math.min(34,5,33,534,52,4));
console.log(Math.max(34,5,33,534,52,4));

console.log(Math.floor(Math.random()*10)+1);

let min = 10;
let max = 20;
console.log(Math.floor(Math.random()* (max - min + 1)) +min );


