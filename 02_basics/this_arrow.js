//this refers to the current context
//eg
const user={
    name:"A",
    age:25,
}

user.disp=function()
    {
        console.log(`hello ${this.name}`);
    }

    user.disp()

// this in a function returns undefined
function func_this()
{
    const age=20
    console.log(this.age);
}
func_this()


//we can create an arrow function
const fun=() => {
    const age=20
    console.log(age);
}
fun()

// if he have only single statement in a function we can use implicit return
const myname=() =>{
    return "Rudransh Pokhriyal"
}

const myname_implicit=() => "Rudransh Pokhriyal"

console.log(myname());
console.log(myname_implicit());

//object implicit return
const obj_implicit=() => ({user:"Rudi"})

const Web=obj_implicit()
console.log(Web.user);