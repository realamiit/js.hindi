let score = [];
console.log(typeof score); // "number"



let vakueInnumber = "1234"; 
vakueInnumber = Number(vakueInnumber);
console.log(typeof vakueInnumber); // "number"
//"33" => 33 
//"12.34" => 12.34
//"12abc" => NaN
//"abc12" => NaN
//"" => 0
//[] => 0
//[12] => 12
//[12,34] => NaN
//{} => NaN 
//null => 0
//undefined => NaN


let LoggedIn = 1;
let booleanIsLoggedIn = Boolean(LoggedIn);
console.log(typeof LoggedIn); // "boolean"



//run code: node .devcontainer/03_conversionOperation.js