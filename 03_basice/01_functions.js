// function addTwoNumber(number1, number2){
//      console.log(number1 + number2);   
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2;   
    // return result;

    return  number1 + number2;
}

const result = addTwoNumber(3,4);
// console.log("result:", result);

// function liginUserMessage(username){
function liginUserMessage(username = "sam"){
    // if(username === undefined){
    if(!username){
        console.log("Please Enter username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(liginUserMessage("Harish"));
// console.log(liginUserMessage());

// function addItemsPrice(num){
//     return num;
// }
// console.log(addItemsPrice(200, 300, 400));


function addItemsPrice(...num){  //This is way to add multiple values in function
    return num;
}
// console.log(addItemsPrice(200, 300, 400));

const user = {
    username : "Harish",
    price: 199,
}

function handleObj(anyobj){
    console.log(`${anyobj.username} is orderd and the price is ${anyobj.price}`);   
}

// handleObj(user);

const newArray = [100,200,300,400,500];

function getArray(anyArry){
    return anyArry[1];
}
console.log(getArray(newArray));
