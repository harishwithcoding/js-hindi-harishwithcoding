const user ={
    username : "Harish",
    price : 999,

    visitwebsite : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.visitwebsite()
// user.username = "payal";
// user.visitwebsite()

const chai = () =>{
    let username = "Harish";
    // console.log(this.username);
    console.log(this);
}

// const add = (num1, num2) =>{
//     return num1 + num2;
// }

// const add = (num1, num2) => num1 + num2;  // we can also use this type of arrow function

const add = (num1, num2) => (num1 + num2); 
console.log(add(2,5));
