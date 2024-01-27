//we can get current date and time in JS.By default we get time in milliseconds which are counted from 1 Jan 1970 midnight
let date=new Date();
console.log(date)// here format is typical to read so there are inbuilt functions which can change the display format and extract various info

console.log(date.toString())// this function changes date to more readable string format where time date and timezone is mentioned

console.log(date.toDateString())// this returns only date

console.log(date.toTimeString());//this returns only time

console.log(date.toLocaleString());// changes to host environment's current locale or a specified locale

// we can also convert date and time to UTC and ISO format
console.log("         date creation         ");
console.log("-------------------------------")

//we can create our own date and time here month starts with 0 and days starts with monday
let createdDate=new Date(2024,0,23,5,4,35)
console.log(createdDate.toString());
//we can give date data in different formats such as MM-DD-YYYY etc
let newdate=new Date("01/23/2024")
console.log(newdate.toString())

console.log("       Timestamps      ")
console.log("-----------------------")
// we can create timestamps they are nothing but time in milliseconds counted from midnight 1 Jan 1970 to till date these helps us to compare the time correctly and is used in booking history sites etc
let timestamp=Date.now()
console.log(timestamp);

console.log(Math.floor(timestamp/1000))
console.log(Math.floor(Date.now()/1000))// to convert these ms to s

console.log("  More methods       ")
console.log("---------------------")
//some more methods for extracting info from a date
console.log(createdDate.getDay())
console.log(createdDate.getMonth())
console.log(createdDate.getTime())