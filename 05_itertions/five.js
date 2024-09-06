const coding = ["Python", "JS", "Java", "C++", "Ruby"];

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (val) => {
   // console.log(val);
} )

function printMe (items){
    // console.log(items);
}

coding.forEach(printMe);

coding.forEach( (item, index, arr)=> {
// console.log(item, index, arr);

} )

const mycoding = [
    {
        languageName: "Javascript",
        languagefile: "js",
    },
    {
        languageName: "Java",
        languagefile: "java",
    },
    {
        languageName: "python",
        languagefile: "py",
    },
]

mycoding.forEach( (item) => {
    console.log(`languge name is ${item.languageName} and file is ${item.languagefile}`);
    
} )