// Question no.1 

let number1 = 12;
let number2 = 13;

function addition(number1, number2){
    sum = number1 + number2;
    return sum;
}

console.log('The sum of the two numbers is ' + addition(number1, number2));

// Question no.2
numbers = [1,2,3,4,5,6,7];

function average(numbers){
    length = numbers.length;
    let sum = 0;
    for (i = 0; i<length; i++) {
        sum += numbers[i];
    }
    average = sum / length;
    return average;
}

console.log('The average of the array of numbers is ' + average(numbers));

// Question no.3
let number = 42;

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return 'even';
    }
    else{
        return 'odd';
    }
}

console.log('The number is ' + evenOrOdd(number));

// Question no. 4
let word = 'hayabusa';

function reverseString(word){
    let reverseWord = '';
    for (i in word){
        letter = word[i];
        reverseWord = letter + reverseWord;
    }
    return reverseWord
}

console.log('The reverse of the given word is ' + reverseString(word));

// Question no. 5
numbers = [1,34,53,62,83,12];

function maxValue(numbers){
    let max = 0;
    for (i in numbers){
        if (numbers[i]>max) {
            max = numbers[i]
        }
    }
    return max;
}

console.log('The maximum value in this array is ' + maxValue(numbers));

// Question no. 6

let celcius = 100;

function ctoF(celcius) {
    F = (1.8 * celcius) + 32;
    return F;
}

console.log('The fahrenheit of this temperature is ' + ctoF(celcius));


// Question no 7

let min = 1;
let max = 15;

function randomNumber(min, max){
    let randomnumber = Math.random();
    randomnumber = Math.round(min + randomnumber * (max - min));
    return randomnumber;
}

console.log('The generate random number is ' + randomNumber(min, max));


// Question no. 8

let number_ = 12321;

function palindrome(number) {
    let strNumber = number.toString();
    let actNumber = '';
    let revNumber = '';

    for (i in strNumber){
        actNumber = strNumber[i];
        revNumber = actNumber + revNumber;
    }

    if (revNumber == strNumber){
        return 'is palindrome';
    }

    else {
        return 'is not palindrome';
    }
}

console.log('The given number ' + palindrome(number_));


// Question no. 9

word = 'hayabusa';

function capitalize(word) {
    capitalWord = word[0].toUpperCase();
    newWord = '';
    for (i = 1; i<=word.length-1; i++){
        newWord += word[i];
    }
    newWord = capitalWord + newWord;
    return newWord;
}

console.log('The capitalized form of the given word is ' + capitalize(word));


// Question no. 10

number = 3;

function factorial(number) {
    let fact = 1;
    for(i = number; i > 0; i--) {
        fact *= i;
    }
    return fact;
}

console.log('The factorial of the given number is ' + factorial(number));


// Question no. 11

let numbers = [1, 2, 3, 3, 2, 3, 4, 5, 1];
let element = 5;

function count(numbers, element) {
    counts = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == element) {
            counts ++;
        }
    }
    return counts;
}

console.log('The total count of the given element in the array is ' + count(numbers, element));


// Question no. 12

let year = 2000;

function leapYear(year) {

    if (year % 400 == 0) {
        return 'leap year';
    }

    else if (year % 100 == 0) {
        return 'not a leap year';
    }

    else if (year % 4 == 0) {
        return 'leap year';
    }

    else {
        return 'not a leap year';
    }
}

console.log('The given year is ' + leapYear(year));


// Question no. 13

let array1 = [1, 3, 6, 23, 12];
let array2 = [23, 3, 4, 5, 2, 7];

function merge(array1, array2){
    for(i in array2) {
        array1.push(array2[i]);
    }
    return array1.sort();
}

console.log('The two array merge gives this: ' + merge(array1, array2));


// Question no. 14

num = 7;

function numToRoman(number){
    const symbols = [
        ['I', 1], ['IV', 4], ['V', 5], ['IX', 9],
        ['X', 10], ['XL', 40], ['L', 50], ['XC', 90],
        ['C', 100], ['CD', 400], ['D', 500], ['CM', 900],
        ['M', 1000]]

    let roman = ''
    let count = 0

    for (i in symbols.reverse()){
        let sym = symbols[i][0]
        let value = symbols[i][1]
        if (number / value >= 1){
            count = Math.floor(number / value)
            r = ''
            for(i=1; i <= count; i++){
                r += sym
            }
            roman += sym

            number = number % value
        }
    }
    return roman
}

console.log('The roman conversion of the given number is ' + numToRoman(7));


// Question no. 15

numbers = [23, 34, 26, 67, 83, 100]

function secondHighest(numbers) {
    highest = 0;
    secondHighest_ = 0;
    for (i in numbers) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    for (i in numbers) {
        if (numbers[i] < highest) {
            if (numbers[i] > secondHighest_){
                secondHighest_ = numbers[i];
            }
        }
    }
    return secondHighest_;
}

console.log('The second highest number in the given array is ' + secondHighest(numbers));


// Question no. 16

let radius = 15;

function areaOfCircle(radius){
    area = 3.1415 * radius ** 2;
    return area;
}

console.log('The area of the circle based on the given radius is ' + areaOfCircle(radius));


// Question no. 17

let stringValue = 'hayabusa';
let limit = 7;

function exceed(string, limit){
    let word = '';
    if (string.length > limit){
        for (i = 0; i<limit; i++){
            word += string[i];
        }
        word += '...';
    }
    else {
        word = string;
    }
    return word;
}

console.log(exceed(stringValue, limit))


// Question no. 18

stringValue = '12345';

function digitOrNot(stringValue) {
    if(Number(stringValue)){
        return 'contains only digits';
    }
    else{
        return 'doesnot only contains digits';
    }
}

console.log('The give string ' + digitOrNot(stringValue));


// Question no. 19

array = [false, null, 0, "", undefined, NaN, 42, "hello"];

function removeFalseValues(array) {
    filteredValue = array.filter(Boolean);
    return filteredValue;
}

console.log('The given array after removing the false values: ' + removeFalseValues(array));


// Question no. 20

array = [1, 2, 3, 3, 2, 1, 5, 4];

function uniqueValues(array) {
    let uniqueArray = [];

    for (i = 0; i < array.length; i++){
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

console.log('The new array with unique values is: ' + uniqueValues(array));