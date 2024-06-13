// Question 1

let password = 'helloworld!!!'; 

if (password.length > 12) {
    console.log('Strong Password');
}
else if (password.length > 8 ) {
    console.log('Medium Password');
}
else {
    console.log('Weak Password');
}

// Question 2

const vowels = ['a', 'e', 'i', 'o', 'u'];
const letter = 'e';

if (vowels.includes(letter)) {
    console.log('The given letter is vowel');
}

else {
    console.log('The given letter is consonant');
}


// Question 3

const randomNumber = 3;
let guessNumber = 4;

if (guessNumber == randomNumber) {
    console.log('You have guessed it!!!')
}

else if (guessNumber >= randomNumber) {
    console.log('Wrong! Guess lower')
}

else {
    console.log('Wrong! Guess Higher')
}


// Question 4

const taxRate = 0.08 // 8 percent
let price = 450;

const finalPrice = price - (taxRate * price);
console.log(`The final price of the product is ${finalPrice}`)


// Question 5

let firstNumber = 12;
let secondNumber = 23;
let operator = '*';

if (operator == '+') {
    const sum = firstNumber + secondNumber;
    console.log(`The sum of the two number is ${sum}`);
}

else if (operator == '-') {
    const subtraction = firstNumber - secondNumber;
    console.log(`The subtraction of two number is ${subtraction}`);
}

else if (operator == '*') {
    const multiplication = firstNumber * secondNumber;
    console.log(`The multiplication of the two number is ${multiplication} `);
}

else if (operator == '/') {
    const division = firstNumber / secondNumber;
    console.log(`The division of the two number is ${division}`);
}

else {
    console.log('Invalid operator')
}


// Question no. 6

let age = 18;

switch(true){
    case (age<=12):
        console.log('Recommended movie genre for you is Animation');
        break;
    case (age<18 && age>12):
        console.log('Recommended movie genre for you is Action');
        break;
    case (age >= 18):
        console.log('Recommended movie genre for you is Drama');
        break;
}

// Question no. 7

const date = new Date('May 25, 2024');

switch(date.getDay()) {
    case 0:
        console.log('Its Sunday!')
        break;
    case 6:
        console.log('Its Saturday!')
        break;
}


// Question no. 8

let number = -1;

switch (true) {
    case (number < 0):
        console.log('The given number is negative');
        break;
    case (number > 0):
        console.log('The given number is positive');
        break;
    default:
        console.log('The give number is 0')
        break;
}


// Question no. 9

let number_ = 30;

switch(true) {
    case (number_ % 3 == 0 && number_ % 5 == 0):
        console.log('This number is divisible by both 3 and 5');
        break;
    case (number_ % 3 == 0):
        console.log('This number is only divisible by 3');
        break;
    case (number_ % 5 == 0):
        console.log('This number is only divisible by 5');
        break;
    default:
        console.log('This number is not divisble by 3 or 5')
        break;
}


// Question no. 10

let number__ = 12;

switch(true){
    case (number__ % 2 == 0):
        console.log('This number is even');
        break;
    default:
        console.log('This number is odd');
        break;
}


