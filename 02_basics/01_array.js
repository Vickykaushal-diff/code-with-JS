const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array[0]);

// array in javascript are resizable and can hold different types of data


const myname = ["Vicky", "Ram"]
console.log(myname);
console.log(myname[0]);
console.log(myname[1]);

const myarr2 = new Array(1, 2, 3, 4, 5)
console.log(myarr2);
console.log(myarr2[0]);
console.log(myarr2[1]);

const myarr3 = new Array(5) // creates an array of length 5 with empty slots
console.log(myarr3);
console.log(myarr3[0]); // undefined

//Array Mathods


// myarr2.shift() // removes the first element of the array
// myarr2.pop() // removes the last element of the array
// myarr2.push(6) // adds an element to the end of the array
// myarr2.unshift(0) // adds an element to the beginning of the array
// console.log(myarr2);

// console.log(myarr2.includes(3)); // checks if the array includes the element
// console.log(myarr2.indexOf(3)); // returns the index of the element in the array
// console.log(myarr2.length); // returns the length of the array
// console.log(myarr2.reverse()); // reverses the array
// console.log(myarr2.sort()); // sorts the array
// console.log(myarr2.join("-")); // joins the elements of the array into a string with a separator
// console.log(myarr2)

const newArr = myarr2.join()

console.log(myarr2);
console.log(newArr);
console.log(typeof newArr); // string

// Slice and Spice

console.log("A ",myarr2)
const myn1 = myarr2.slice(1, 3) // returns a new array with the elements from index 1 to 3

console.log(myn1)
console.log("B",myarr2)

const myn2 = myarr2.splice(1, 3) 
console.log("C",myarr2)
console.log(myn2)

