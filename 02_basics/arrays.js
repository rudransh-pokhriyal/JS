//arrays in JS works similar as in any other language but difference is that here it can have mixed values and it is resizable
let arr=[1,3,5,"A","C",true,{name:"Rudransh",age:18}]
console.log(arr)

console.log()
console.log("-----------------")
//methods for adding and removing elements from arrays
let ar=[1,3,5,8,9]

ar.push(10)//adds element at the end 
console.log(ar)

console.log(ar.pop())//removes element from end and returns it

ar.unshift(-1,0)
console.log(ar)//adds element at the start in the order given

console.log(ar.shift())//removes element from start and returns it
console.log()

//Slice and Splice
console.log("-----SLICE-------")
console.log(ar.slice(0,3))// here elements are extracted from start-index to end-index(exclusive)
console.log(ar)

console.log("-----SPLICE------")
console.log(ar.splice(0,3))
console.log(ar)
//difference b/w these are that in "SLICE" we get an array copy from orignal having the elements according to function whereas in "SPLICE" we extract that portion of array from orignal changing the orignal array

console.log()
console.log("---------MERGING---------");
let ar_merg=ar.concat(arr)//for 2 arrays
console.log(ar_merg)

//for more than arrays we can use spread(...) operator
let a1=[1,2]
let a2=[3,4]
let a3=[5,6]

let a_merg=[...a1,...a2,...a3]
console.log(a_merg)
console.log()
