//we have basically two scopes in JS global scope and block scope
let a=10
const b=20
var c=30// var is not recommended to use because it causes scope related problem

//values in global scope are accessible everywhere

if(true)// block scope
{
 console.log(a);
 console.log(b);
 console.log(c);
    let block_a=10
    const block_b=20
    var block_c=30
}

//console.log(block_a)  will generate error due to block scope
//console.log(block_b)  will generate error due to block scope
console.log(block_c);  // this will not generate error but it should this is due to use of var keyword
console.log();

console.log("TWO WAYS OF FUNCTIONS");
//we can write functions in two ways
disp()// here the function call will work even before it's declaration as scope of it extends globally
function disp() 
{
    console.log("Hello World");
}

// disp_two() //will generate error 
const disp_two=function(){
    console.log("Hello World 2");
}
disp_two()