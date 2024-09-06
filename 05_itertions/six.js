// const coding = ["javascript", "java", "python","ruby"];

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 4 );
// const newNums = myNums.filter( (num) =>{ // IF we use {} this then use return
//     return num > 4
//     } );
// console.log(newNums);

const newNums = [];
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
} )
console.log(newNums);
