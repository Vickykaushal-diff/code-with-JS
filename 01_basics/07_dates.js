let myDate = new Date()
console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())
// console.log(myDate.getDate())
// console.log(typeof myDate)

let myCreatedDate = new Date(2026, 5, 1, 5, 3)
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); // in miliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getDay())

// ${newdate.getDate()}

newDate.toLocaleString('default',{
    Weekday: 'Long',
    timeZone: 'UTC'
})
