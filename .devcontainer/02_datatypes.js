"use strict"; // to enable strict mode

// replaced alert() (browser) with console.log() for Node
console.log(3 + 5) // Addition

let name = 'Amit Gupta'
let age = 20
let isStudent = true
console.log("Name: " + name)
console.log("Age: " + age)
console.log("Is Student: " + isStudent)
console.table({name, age, isStudent})

// Data Types in JavaScript
//number => integer and float (12, 12.5)
//string => sequence of characters ("Amit Gupta")
//boolean => true or false (isStudent)
//null => stanalone value and it type is type of object
//bigint => for large integers
//symbol => unique identifier (unique)
//undefined => variable declared but not assigned any value


//object => collection of key-value pairs
/*let person = {
    name: "Amit Gupta",
    age: 20,
    isStudent: true
}*/

console.log(typeof null) // object
console.log(typeof 123) // number
console.log(typeof 12.5) // number
console.log(typeof "Amit Gupta") // string
console.log(typeof true) // boolean
console.log(typeof BigInt(12345678901234567890)) // bigint
console.log(typeof Symbol("id")) // symbol
let unassignedVar;
console.log(typeof unassignedVar) // undefined



//node /workspaces/js.hindi/.devcontainer/02_datatypes.js // to run this file  with full path
//.devcontainer/02_datatypes.js  // to run this file from current directory( run with project root)