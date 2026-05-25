const accountId = 142161
let accountEmail = "kaushal@exmple.com"
var accountPassword = "1321516"
acountCity = "Bangalore"
let accountState;

// accountId = 182161 // not allowed

accountEmail = "Shivi@amd.com"
accountPassword  = "131566513"
accountCity = "Pune"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var, as it is function scoped and can lead to unexpected behavior.
Use const for variables that won't be reassigned, and let for variables that will be reassigned.
*/
