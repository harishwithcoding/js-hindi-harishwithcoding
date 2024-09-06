(function chai(){
    console.log(`DB CONNECTED`);
}) ();

// If we Not use (;) this after function then it will throw error

// (function chaiTwo(){
//     console.log(`DB CONNECTED AGAIN`);
// }) ()

( () =>{
    console.log(`DO IT AGAIN`);
})();

( (name) =>{
    console.log(`DO IT AGAIN ${name}`);
})('Harish');