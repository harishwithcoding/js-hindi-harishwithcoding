let name = "Harish";
let age = 22;

console.log(`Hey! I am ${name.toUpperCase()} and my age is ${age}`);

const gameName = new String('Harish-PC-games');

// console.log(gameName);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('P'));


let newString = gameName.substring(0, 6);
console.log(newString);

let anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const url = "https://heyIam%20fakesmail";
console.log(url.replace("%20","-"));
console.log(url.includes("Iam"));

console.log(gameName.split("-"));




