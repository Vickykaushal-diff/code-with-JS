function saymyname(){
    console.log("My name is John");

}
// saymyname() // calling the function

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(5,3) // calling the function with arguments but not using the return value
// console.log("result:", result) // undefined + 5 = NaN

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result; // returning the result of the function
}
console.log(addTwoNumbers(5, 10)) // calling the function with arguments

const result = addTwoNumbers(5,3)
console.log("result:", result)

function loginUserMessage(username = "sam"){
    if(username === undefined){ // same as if(username === undefined) or if(!username)
        console.log("Please provide a username")
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Hitesh"))
console.log(loginUserMessage())

// function calculateCartPrice1(val1, val2,...num1){ //...num1 is rest parameter which allows us to pass an arbitrary number of arguments to the function and it will be stored in an array
//     return num1;
// }
// console.log(calculateCartPrice1(100, 200, 300, 4000, 500)) // passing multiple arguments to the function and it will be stored in an array

function calculateCartPrice(...num1){ //...num1 is rest parameter which allows us to pass an arbitrary number of arguments to the function and it will be stored in an array
    return num1;
}
console.log(calculateCartPrice(100, 200, 300, 4000, 500)) // passing multiple arguments to the function and it will be stored in an array

const user = {
    username: "Hitesh Sharma",
    price: 999,
    courseInstructor: "Hitesh Sharma"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} and courseInstructor is ${anyobject.courseInstructor}`);
}
// handleObject(user) // passing an object as an argument to a function

handleObject({
    username: "Hitesh Sharma",
    price: 999,
    courseInstructor: "Hitesh Sharma"
}) // passing an object as an argument to a function without storing it in a variable

const myNewArray = [1, 2, 3, 4, 5]

function handleArray(getarray){
    return getarray[2];
}
console.log(handleArray(myNewArray)) // passing an array as an argument to a function and accessing the element at index 2
