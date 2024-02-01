//objects contains key value pairs
// 2 ways to create object 

//1 way
const User1={
    name:"Rudransh Pokhriyal",
    "locat ion":"dehradun",
    age:21,
    isLoggedin:false,
    LastLoginDays:["monday","friday"]
}

//2 way
const User2=new Object()
User2.name="Raj Saxena"
User2.location="delhi"
User2.age=25,
User2.isLoggedin=true,
User2.LastLoginDays=["tuesday","friday","saturday"]


//Accesing values using keys also has 2 ways
//Way 1 (.) dot operator
console.log(User1.name)
console.log(User1.age)

//Way 2 ["key"]
console.log(User2["name"]);

//Note if we have made a key in string format i.e "locat ion" then we can only access this using Way 2
console.log(User1["locat ion"]);

// to use symbol we have to define it in [] in object
const Sym=Symbol("key")
const useSymbol={
    Sym:"KeySymbol"
}
console.log(typeof useSymbol["Sym"])// will display value correctly but will not work as symbol 
