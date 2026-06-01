const marvel_heroes = ["thor", "ironman", "hulk", "captain america", "black widow"]
const dc_heroes = ["superman", "batman", "wonder"]

//marvel_heroes.push(dc_heroes) // adds an array to the end of the array
//console.log(marvel_heroes);

// console.log(marvel_heroes[5]); // returns the array at index 5
// console.log(marvel_heroes[5][0]); // returns the first element of the array at index 5
// console.log(marvel_heroes[5][1]); // returns the second element of the array at index 5 

// const allHeroes = marvel_heroes.concat(dc_heroes) // adds the elements of the array to the end of the array
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // adds the elements of the array to the end of the array using spread operator
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // flattens the array to any depth
// console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // checks if the variable is an array
console.log(Array.from("Hitesh"))

console.log(Array.from({name: "Hitesh"})) // **creates an array from an object with a length property

let  score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creates an array from the arguments passed to it