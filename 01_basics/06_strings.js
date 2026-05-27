const name = "kaushal"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello ${name} you have ${repoCount} repo`);

const gameName = new String('kaushal-sh')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('a'))



const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-4, 1)
console.log(anotherString);

const newString1 = "   Kaushal    "
console.log(newString1)
console.log(newString1.trim())

const url = "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
console.log(url.replace("channel", "c"))

console.log(url.includes("channel"))

console.log(gameName.split("-"))