const score = 400
console.log(score)

const balanace = new Number(100)
console.log(balanace)


console.log(score.toString())
console.log(score.toString().length)
console.log(balanace.toFixed(2))
console.log(balanace.toFixed(4))

const otherNumber = 23.56789

console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(5))
console.log(otherNumber.toPrecision(2)) 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++++++++++++++++++++++++ MAths +++++++++++++++++++++++
console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.7))
console.log(Math.sqrt(16))
console.log(Math.pow(2, 3))
console.log(Math.min(3, 5, 1, 8))
console.log(Math.max(3, 5, 1, 8))

const randomNum = Math.random()
console.log(randomNum)

const randomNumBetween1And10 = Math.floor(randomNum * 10) + 1
console.log(randomNumBetween1And10)

console.log(Math.random())
console.log((Math.floor(Math.random()*10) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 