let v=22
const name="Rudransh Pokhriyal"
//to print a variable or const we can use +
console.log("Value of V is "+v)
//but we can use placeholders and back ticks ` this is the right and modern way
console.log(`My name is ${name} and my age is ${v}`);

//if we use new keyword then we can create a string which is fundamentally an object with key value pairs where key is indices and value is a character.This gives us the capability to use many inbuilt functions most of which are same as Java but we can use these functions on normal strings declared in variables and constants

let nam=new String("Rudransh Pokhriyal")
console.log(nam[0])
console.log(nam.length)
console.log(nam.charAt(0))