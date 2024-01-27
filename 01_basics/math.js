//Math is inbuilt library in JS which has similar functions as Java's Math library
let num=new Number(-3)
console.log(Math.abs(num))

let deci=new Number(12.6)
console.log(Math.round(deci));
console.log(Math.floor(deci));
console.log(Math.ceil(deci));

let num2=new Number(64)
console.log(Math.sqrt(num2));

console.log(Math.max(num,deci,num2))
console.log(Math.min(num,deci,num2))

//Math.random function
console.log(Math.random())