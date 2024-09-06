const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello Coders";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
    
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United Sates of America");
map.set('FC', "France");

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ":-", value);
}