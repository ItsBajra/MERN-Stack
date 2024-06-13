// Function in JavaScript

// function to greet
function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}`;
}

let firstName = "Subarna";
let lastName = "Bajracharya";

const greeting = greet(firstName, lastName);
console.log(greeting);
console.log(greeting);

// function for addition
function addition(number1, number2) {
  sum = number1 + number2;
  console.log(`The sum of ${number1} and ${number2} is ${sum}`);
  return;
}

addition(12, 23);
addition(34, 45);

// function for subtraction
function subtraction(number1, number2){
    sub = number1 - number2;
    console.log(`The subtraction of the given two numbers is ${sub}`)
    return;
}

subtraction(12,11)

// function for multiplication
function multiplication(number1, number2) {
    mul = number1 * number2;
    console.log(`The multiplication of the two given numbers is ${mul}`)
    return;
}

multiplication(12,12)

// function for division
function division(number1, number2){
    div = number1/ number2;
    console.log(`The division of the two given numbers is ${div}`);
    return;
}

division(12,3)

// function expression

let namee = function(name){
    console.log(`Hello ${name}`);
}

namee('sandip');

let subtract = function(number1, number2){
    return number1-number2;
}
console.log(subtract(12,10))

// arrow function
let multiply = (a, b) =>
    {
        return a * b;
    }
console.log(multiply(12, 2))


let divide = (a, b) =>
    {
        return a / b;
    }
console.log(divide(12,3))


// generator function
// read your self
// study es6 for tmrw

// constructor function 

function Person(name, age){
    this.name = name;
    this.age = age;
}
let john = new Person('John', 25);
console.log(john)

// Array

const numbers = [1,2,3,4,5];
console.log(numbers[4])

// study array string and object manipulations


// Object in js, is a data structure that allows you to 
// store data in the form of key value pairs.

// unlike array, object can have different data structure in the same object

const person = {
    name: "John",
    age: 30,
    hobbies: ["Reading", "Cooking", "Running"]
};

console.log(person.name)
console.log(person.age)
console.log(person.hobbies)

// Question no.2

let ageGroup = [12,18,25,35,45]

function reverse(array) {
    length = array.length;
    let sum = 0;
    for(let i = 0; i<length; i++){
        sum += array[i];
    }
    av = sum / length;
    return av;
}

let average = reverse(ageGroup);
console.log(`The average is ${average}`);