//definite way to create a number
let num=new Number(289)
console.log(num);
console.log(typeof num)
console.log("--------")

//In this way we also get access to various methods which you can check on console
//Note: All the below functions return a string

console.log(num.toString())// changes to string type
console.log(num.valueOf())// changes to primitive number type
console.log(num.toFixed(2))// adds decimal places

let num2=new Number(123.4567)
console.log(num2.toPrecision(2));// represents string in a precision format where priority is given before the decimal

let num3=new Number(100000000)
console.log(num3.toLocaleString())// represents number in an international format by default but can be used to display in 
                                //   other local number systems 
console.log(num3.toLocaleString('en-IN'));