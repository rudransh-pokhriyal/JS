//to convert we use primitive wrappper types i.e Boolean String Number

//string conversion
let str1="212"
let str2="23abc"
let str3=""

console.log(Number(str1));// pure number with digits gets converted to valid number
console.log(Number(str2));// string with digits and alphabets gets converted to NaN(Not a number)
console.log(Boolean(str3));// string with any value will change to true and empty-string to false

//number conversion
console.log("--------------")
let num1=1214441
let num2=4

console.log(String(num1))//number changes to sring easily
console.log(Boolean(num2))//0-->false any-value-->true

//boolean coversion
console.log("--------------")
let bool1=true
let bool2=false

console.log(String(bool1))//changes to true and false as string
console.log(String(bool2))
console.log(Number(bool1))//changes to respective number values
console.log(Number(bool2))