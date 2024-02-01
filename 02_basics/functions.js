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

//REST OPERATOR is used to pass multiple values as an array to single variable in a function
console.log("REST OPERATOR")
function mul(n1,...n2)
{
    return n2
}

console.log(mul(2,4,5,6,7,8))//2 goes in n1 and rest goes to n2
console.log()

//Arrays in functions
const ar=[2,4,5,8]

function array(arr)
{
    return arr[0]
}

console.log(array(ar))
console.log()

//objects in arrays
const user={
    username:"Rudi65",
    location:"Asia/Pacific"
}

function user_info(obj)
{
    console.log(`username is ${obj.username} and location of user is ${obj.location}`)
}

user_info(user)