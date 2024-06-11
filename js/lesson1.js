console.log("Hello, world!")

// What is variable?: a container that stores data and manipulates it

// three keywords given for declaring variable: var, let, const
// never use var as it can be redeclared 
// let can be used to disallow redeclare but allow reassign
// const can be used to disallow both redeclare and reassign
// var is only used for hoisted effect 

const b = 40;
const c = 50;
let d;
d = b + c;

console.log(d)

// NAMING CONVENTIONS
const fullName = 'Bajra'; // camel case
const FullName = 'Bajra'; // pascal case
const full_name = 'Bajra'; // snake case

// Classwork

const myFullName = 'Subarna Bajracharya';
const myAge = 21;
const myAddress = 'Gabahal, Lalitpur'
const myLevel = 'Level 5';
const myContactNumber = 9813443979;

console.log('Full Name: ' + myFullName)
console.log('Age: ' + myAge)
console.log('Address: ' + myAddress)
console.log('Level: ' + myLevel)
console.log('Contact Number: ' + myContactNumber)
