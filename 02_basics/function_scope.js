//to create a function

function msg()
{
    console.log("Hello World");
}

//function call
msg()

//function with return
function RETURN()
{
    return "Function with return"
}

//function call
console.log(RETURN())

console.log("----Function with Arguments------");
//function with arguments
function add(num1,num2)
{
    if(typeof num1=='number' && typeof num2=='number')
        return num1+num2
    else
        return "arguments are not numbers"
}

console.log(add(3,7));
console.log(add(3,'ab'));

//we can provide default values to the arguments which will be overwritten if 