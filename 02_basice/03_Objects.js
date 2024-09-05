const jsUser = {
    name : "Harish",
    "Full name": "Harish Verma",
    age : 22,
    email : "harish43434@gmail.com",
    isLogedIn : false,
    lastlogidIn : ["Monday", "Sunday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);   
// console.log(jsUser."Full name")// console.log(jsUser."full name";  // us can't access values form this situation using the (.)

// console.log(jsUser["Full name"])

jsUser.email = "gdsffs@gmiar.cob";
// Object.freeze(jsUser);
jsUser.email = "gdsffs@fggggfdgffgdfgfd.cob";

// console.log(jsUser);

jsUser.greating = function(){
    console.log("Hello! JS Users");
}

jsUser.greatingTwo = function(){
    console.log(`Hello! JS Users ${this.name}`);
}
// console.log(jsUser.greating);
console.log(jsUser.greating());
console.log(jsUser.greatingTwo());
