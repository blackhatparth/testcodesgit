const accountId = 123
let accountEmail = "parth@google.com"
var accountPassword ="5471"
// accountCity = "Delhi"
let accountState; // output: undefined
// accountId = 2 // not allowed since const cant be changed
accountEmail = "aradhya@hcl.com"
accountPassword = "5473"
// accountCity = "Kanpur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword, accountState]);
