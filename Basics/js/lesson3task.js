// 


// Question 1:

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


// Question 2

let age = 14;

if (number >= 18) {
    console.log('You are eligible to vote')
}

else {
    console.log('You are not eligible to vote')
}


// Question 3

let day = 7;

switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid number');
        break;
}


// Question no. 4

let text = 'helloworld!';

if (text.length > 10) {
    console.log('Length is greater than 10')
}

else {
    console.log('Length is less than 10')
}


// Question no. 5

let score = 52;

if (score >= 90) {
    console.log('A+');
}

else if (score >= 80) {
    console.log('A');
}

else if (score >= 70) {
    console.log('B+');
}

else if (score >= 60) {
    console.log('B');
}

else if (score >= 50) {
    console.log('C');
}

else if (score > 100) {
    console.log('Invalid marks');
}

else {
    console.log('F');
}


// QUestion 6

let month = 11;

if (month == 4) {
    console.log('There are 30 days in this month');
}

else if (month == 6) {
    console.log('There are 30 days in this month');
}

else if (month == 9) {
    console.log('There are 30 days in this month');
}

else if (month == 10) {
    console.log('There are 30 days in this month');
}

else if (month == 2) {
    console.log('There are 29 days in this month');
}

else if (month > 12) {
    console.log('Invalid month number');
}

else if (month < 1) {
    console.log('Invalid month number');
}

else {
    console.log('There are 31 days in this month');
}


// Question 7

let year = 2024;

if (year % 4 === 0) {
    if (year % 100 !== 0) {
        console.log('Its a leap year');
    }
    else {
        console.log('Its not a leap year');
    }
}

else {
    console.log('Its not a leap year');
}

// QUestion 8

let weight = 65;
let heightFeet = 5;
let heightInch = 9;

const height = (heightFeet * 0.3048) + (heightInch * 0.0254);

const bmi = weight / height ** 2;

switch (true) {
    case (bmi <= 18):
        console.log('You are under weight');
        break;
    case (bmi <= 24):
        console.log('You are in ideal weight');
        break;
    default:
        console.log('You are overweight');
}