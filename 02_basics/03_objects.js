// Singleton
// obect literal

const mySym = Symbol("key1") // symbol is a unique identifier

const JsUser = {
    name: "Ram",
    "full name": "Kaushal Sharma",
    [mySym]: "my value", // symbol can be used as a property key and always in *square brackets*
    age: 25,
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}
// console.log(JsUser.name) // both dot notation and bracket notation can be used to access the properties of an object
// console.log(JsUser["name"])
// console.log(JsUser["full name"]) // when the property name has spaces, we need to use bracket notation

// console.log(JsUser[mySym]) // symbols can be accessed using their key
// console.log(typeof mySym) // symbol is a primitive data type

// JsUser.email = "Kaushal@chatgpt.com"
// Object.freeze(JsUser) // freezes the object and makes it immutable
// JsUser.email = "Kaushal@microsoft.com" // this will not change the email property of the object
// console.log(JsUser)

JsUser.greeting  = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greetingTwo  = function(){
    console.log(`Hello JS User, ${this.name}`) // this keyword refers to the object that is calling the function
}
console.log(JsUser.greetingTwo())