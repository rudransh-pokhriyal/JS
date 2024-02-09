/*
Falsy values are those values which by default are considered as false

like false,0,-0,"" i.e empty string,big int 0n,null,undefined,NaN

truthy values are those values which by default are considered as true

like true,1,"any-value"," " i.e a string with only a space, [] i.e empty array, {} i.e empty object,function (){} i.e empty function
*/

//Null Coalescing Operator ??
//This operator works when there is a null value and a normal value and it always selects normal value over null value.It works same for undefined

//It is used when we are getting some data back from DB and we get a null/undefined then to avoid using that null/undefined it acts as an failsafe 

let val=null??10
console.log(val);

//Ternery Operator
let price=70
price>=50 ? console.log("price is greater than 50") : console.log("Price is less than 50")