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
console.log()

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
console.log();

console.log("-----DEFAULT ARGUMENT VALUES------")
//we can provide default values to the arguments which will be overwritten if new values are passed
function add(num1=1,num2=1)
{
    if(typeof num1=='number' && typeof num2=='number')
        return num1+num2
    else
        return "arguments are not numbers"
}

console.log(add())
console.log(add(1,4))