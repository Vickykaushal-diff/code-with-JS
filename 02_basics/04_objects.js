const tinderUser = new Object(); // singleton object created using the Object constructor
// const tinderuer = {} // non singleton object created using object literal syntax 

tinderUser.id = "123abc"
tinderUser.name = "HItesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser) // empty object

const regularUser = {
    email: "some@example.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) // nested objects can be accessed using dot notation
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj5  ={5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// const obj4 = {...obj1, ...obj2} // spread operator can be used to merge two objects
// console.log(obj3)
// console.log(obj4)

// const obj3 = Object.assign({}, obj1 , obj2, obj5) // Object.assign() can be used to merge two objects
// console.log(obj3)

const obj3 = {...obj1, ...obj2, ...obj5} // spread operator can be used to merge two objects
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@example.com"
    },
    {
        id: 2,
        email: "user2@example.com"
    },{
        id: 3,
        email: "user3@example.com"
    }
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // returns an array of the keys of the object
console.log(Object.values(tinderUser)) // returns an array of the values of the object
console.log(Object.entries(tinderUser)) // returns an array of the key-value pairs of the object

console.log(tinderUser.hasOwnProperty("name")) // checks if the object has the property "name"

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh Sharma"
}
console.log(course.courseName) // accessing the property of the object using dot notation
console.log(course["courseInstructor"]) // accessing the property of the object using bracket notation

const {courseInstructor : instructor, price} = course // destructuring the object
console.log(instructor) // accessing the property of the object using destructuring
console.log(price) // accessing the property of the object using destructuring

// const navbaf = ({company}) => { //    console.log(company) // accessing the property of the object using destructuring in the function parameter
// }
// navbar({company: "Hitesh Sharma"}) // passing an object as an argument to a function and destructuring it in the function parameter


// {
//     "name": "Hitesh Sharma",
//     "age": 30,
//     "isLoggedIn": false,
//     "email": "hitesh@example.com"
// }

// [
//     {},
//     {},
//     {}
// ]