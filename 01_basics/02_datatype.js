"use strict"; // treat all JS code as newer version

// alert("Hello Kaushal") // we are using node.js not browser, so alert will not work

// Code readability and maintainability
console.log(3+3)
console.log("Kaushal")

let name = "Kaushal"
let age = 22
let isloggedin = true


// number => 2 to power 53
//bigint => larger than 2 to power 53
// string => any text, it should be in quotes
// boolean => true or false
// null => standalone value that represents nothing
// undefined => standalone value that represents undefined
// symbol => unique and immutable data type

//object => collection of key value pairs
// array => ordered collection of values
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isloggedin) // boolean
console.log(typeof null) // object (this is a bug in JavaScript, but it is kept for backward compatibility)
console.log(typeof undefined) // undefined
console.log(typeof Symbol("id")) // symbol
