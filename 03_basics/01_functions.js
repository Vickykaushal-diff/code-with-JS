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

