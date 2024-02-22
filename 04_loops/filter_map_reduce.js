let arr=[1,2,3,4,5,6,7,8,9]

//filter is used to retrieve selective data from an array (i.e when on basis on some conditions we need some data)
let new_nums1=arr.filter((num)=> num>5)// we can use arrow function with implicit return for callback fn of filter

//alternatives to above
/* new_nums1=arr.filter((num)=>{
    return num>5
})

new_nums1=arr.filter(function (num){
    return num>5
})
*/

console.log(new_nums1)
