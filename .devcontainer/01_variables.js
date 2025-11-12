const accountId = 143211
let accountEmail = "amit@gmail.com"
var accountPassword = "124566"
accountCity = "Varanshi"
let accountState;


//accountId = 2 // This will throw an error because accountId is a constant
accountEmail = "rahul@gmail.com"
accountPassword = "987654"
accountCity = "Delhi"

/*
prefer not to use var keyword as it has function scope
and may create confusion in large code bases.
*/
accountState = "Uttar Pradesh"  // assigning value to declared variable

console.log(accountId);
console.table({accountId, accountEmail,accountPassword,accountCity,accountState});


//node /workspaces/js.hindi/.devcontainer/01_variables.js