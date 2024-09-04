// Primitive Datatypes

// 7 types = number, null, boolean, BigInt, string, symbol, undefined

let Id = Symbol("123");

let anotherId = Symbol("123");

console.log(Id===anotherId);


//Reference Datatypes( Non Primitive)

//Array, Objects, Functions

//Array
const heros = ["shaktiman", "Doga", "Harish"];

//Objects
const obj1 = {
    name : "Harish",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
    
}