const myArr = [0,1,2,3,4,5,6];
// console.log(myArr[0]);

myArr.push(7); // Add new value in the last of the Array
// console.log(myArr);

myArr.pop(); // Remover last value from Array
// console.log(myArr);

myArr.unshift(9); // Add new value in the starting of the Array
// console.log(myArr);

myArr.shift(); // Remove value in the starting of the Array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

let newArr = myArr.join(); // Join method convert Array into a String
// console.log(typeof newArr);

console.log("A ", myArr);

let mn1 = myArr.slice(1,3);

console.log(mn1);
console.log("B ", myArr);

let mn2 = myArr.splice(1,3); // Splice remove that values form the original Array
console.log(mn2);
console.log("C ", myArr);





