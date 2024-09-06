for (let i = 1; i <= 10; i++) {
    // console.log(`the no. is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArr = ["Harish", "Dhoni", "Sahil"];

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element); 
// }
for (let index = myArr.length-1; index >= 0; index--) {
    const element = myArr[index];
    console.log(element);
    
}