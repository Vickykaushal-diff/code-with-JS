let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null

console.log(typeof score)
console.log(typeof(score))
console.log(typeof score1)
console.log(typeof(score1))

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)

let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

//"33" => 33
//"33abc" => NaN (Not a Number)
// true => 1

let isloggedIn = ""
let booleanIsLoggedIn  = Boolean(isloggedIn)
//console.log(booleanIsLoggedIn);
// 1 => true; 0=> false
// "" => false; "kaushal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)


// ********** Operations ********

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Hello"
let str2 = "Kaushal"

let str3 = str1 + " " + str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+3)
console.log(1+2+"3")