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

//******************************Operations**********************************


let value = "100";
let negativeValue = -value;
console.log(negativeValue); // -100


//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(5%2);

let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2; // "Hello World"

console.log("1"+2); // "12"
console.log("1"+2 + 2); //122
console.log(1+"2"); // "12"
console.log(1+2 + "2"); // "32"32
console.log(1+"2"+ 2);


//run code: 
 //         node .devcontainer/03_conversionOperation.js