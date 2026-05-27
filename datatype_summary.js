// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 


const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id === anotherId) // false, because symbol is unique

const bigNumber = 16588948894651984n

// Non-Primitive or  Reference
// Object, Array, Function

const heros = ["Shaktiman", "Superman", "Batman"]
const myObj = {
    name: "Kaushal",
    age: 22,
    isLoggedIn: false
}

function myFunc(){
    console.log("Hello World")
}

console.log(typeof bigNumber) // bigint
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunc) // function