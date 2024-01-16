// relational comparision between same types
console.log(2==2)
console.log(2>=3)
console.log(1<=3);
console.log(3>2);
console.log(2<5)
console.log(2!=3);
console.log()

// issue when different types generally values are converted to numbers if possible then are compared
console.log("2">1)
console.log("2">true);
console.log("02">1)
console.log()

// == equality and all other relational operators works differently on null
// relational converts it into 0 and then compare while equality treats null as NaN
console.log(null>0);
console.log(null<=0)
console.log(null==0)
console.log()

// strict check i.e === works such that it does'nt converts anything and treats different datatypes as different
console.log("2"===2)