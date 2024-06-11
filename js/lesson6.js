// constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person ("John", 25);

console.log(john)

// Synchronous functions execute one operation at a time, blocking further
// execution until the current operation is completed. 
// They follow the traditional sequential flow of code execution

// multiple callback = callbackh

// Asynchronous functions executes simultaneously

// Scope: Global scope and local scope

let globalVar = 'global'; // global scope: can be accessed from anywhere

function localScope(){
    let localVar = 'local'; // local scope: can only be accessed inside the function
    console.log(globalVar);
    console.log(localVar);
}

// Closures
// a feature in JS where an inner function has access to the outer (enclosing) function's
// variable. A closure is created when a function references variables from the outer function.

function outerFunction(){
    let outerVar = 'outer';

    function innerFunction() {
        console.log(outerVar); // can access outerVar
    }
    return innerFunction;
}

const myClosure = outerFunction();
myClosure();

// in this example, innerFunction is a closure that captures and remembers the 
// variable outerVar from its outer function outerFunction

// Callback Function
// Callback function is a function that is passed into another function as an 
// argument and is executed after some operation has been completed. Callbacks are commonly
// used for handling asynchronous operations such as API calls.

function greet(name, callback) {
    console.log('Hello, '+name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

// another example:

function add(a, b, callback){
    callback();
    return a + b;
}

let result = add(2, 3, printResult);
console.log(result);

function printResult(){
    console.log('The result is printed below:');
}

// class task:

function addition(number1, number2, callback, callback2) {
    sum = number1 + number2;
    console.log('The sum of the given numbers is ' + sum)
    callback(number1, number2, callback2);
}

function multiplication(number1, number2, callback2) {
    mul = number1 * number2;
    console.log('The multiplication of the given numbers is ' + mul);
    callback2(number1, number2);
}

function subtraction(number1, number2){
    sub = number1 - number2;
    console.log('The subtraction of the given numbers is ' + sub)
}

addition(12, 10, multiplication, subtraction);


// Promises
// Promises provide a way to asynchronous operations by representing the eventual completion
// (or failure) of an asynchronous operation and its resulting value. A promise can be in one
//  of three states: pending, fulfilled, or rejected.

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise resolved!');
    }
    else {
        reject('Promise rejected!');
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});


//
let promiseSub = new Promise((resolve, reject) => {
    let a = 12;
    let b = 6;
    subtraction = a - b;
    if (subtraction > 5) {
        resolve('Promise Resolved!');
    }
    else {
        reject('Promise Rejected!');
    }
})

promiseSub.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
})