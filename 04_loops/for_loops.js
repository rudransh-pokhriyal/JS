let arr=[1,2,"str",true,{name:"A",age:18}]
let str="rudransh pokhriyal"
const myobj={
    name:"Rudi",
    age:18,
    isLogged:true
}

console.log("-----For of-------")
// for of focuses on values and works for arrays strings and maps
for (const item of arr) {
    console.log(item)
}

//focuses on keys
for (const ch of str) {
    console.log(ch)
}
console.log()
console.log("-----Maps-----")

let map=new Map()
map.set(1,'A')
map.set(2,'B')
map.set('name',"Rudi")

console.log(map)
for (const val of map) {
    console.log(val)
}
console.log();

console.log("----FOR IN------");
//for in focusses mainly on keys and works on arrays strings and objects
for (const key in arr) {
    console.log(`Key: ${key} | value:${arr[key]}`);
}
console.log();

for (const key in str) {
   console.log("index(key):"+key+"| value:"+str[key])
}
console.log();

for(const key in myobj)
{
    console.log("key:"+key+"| value:"+myobj[key])
}
console.log();

console.log("-------FOR EACH----------");
//in for each we have to write a function