const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Hsrish";
tinderUser.islogedin = false;
// console.log(tinderUser);

const regularUser = {
    email : "Hrijhsfdgfff",
    fullname: {
        userFullName:{
            fristName: "harish",
            lastName: "Verma",
        }
    }
}
// console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4: "d"};
// const obj3 =  Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
