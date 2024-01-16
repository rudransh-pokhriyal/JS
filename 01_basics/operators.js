/*
console.log(2+2)
console.log(2-5);
console.log(2*3);
console.log(1/2);
console.log(2**3) // exponent i.e 2^3
console.log(3%2);

// while working with strings and numbers separately + operator works as expected
console.log(1+3); // both are numbers it adds them
console.log("1"+"3")  // since both are strings it concats them

//but when we use both together confusion starts and output may not be as expected if we don't know the rule
console.log("1"+3)
console.log(3+"1");
console.log("3"+1+1)
console.log(1+1+"3")
console.log(1+1+"3"+1+1)

// by running the above statements we can establish 2 rules 
// Rule 1:if strings come first then whole expression is treated as string and hence is concatenated 
// Rule 2:if number comes first then all the number values before expression are treated as numbers and added arithmetically and then result is concatenated with the string value

// note: just remember the above 2 rules for guessing the output of these
console.log(1+1+"3"+1+1)
console.log("3"+1+1+"3");
*/
console.log(true)
console.log(+true)// + also changes values like true and ""(which returns false)to their corresponding number value i.e 1 and 0
console.log(+"")

//we have concept of prefix and postfix in JS