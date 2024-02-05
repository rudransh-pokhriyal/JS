(function disp(){
    console.log("Hello World")
})();


/* It is mandatory to use ; in IIFE beacuse it causes context end issue
(function disp1(){
    console.log("Hello World1")
})()
(function disp2(){
    console.log("Hello World2")
})() */

//We can pass and recieve parameters and also implement arrow function in IIFE format
((num1=1,num2=1)=>
{
    console.log(num1+num2)
})(3,4);