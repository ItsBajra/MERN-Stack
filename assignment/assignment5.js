// Question no. 1

function addition(a, b) {
    sum = a + b;
    return sum;
}

let a = 12;
let b = 14;

console.log('The sum of the given numbers is '+ addition(a, b));

// Output: The sum of the given numbers is 26

// Question no. 2

function getFirstElement(array) {
    return array[0];
}

let array_ = [12, 45, 54, 43];

console.log('The first element of the given array is '+ getFirstElement(array_));

// Output: The first element of the given array is 12

// Question no. 3

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

function getPersonInfo(person){
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
}

let hello = new Person('Bajra', 21, 'Lalitpur');

console.log(getPersonInfo(hello))

// Output: Name: Bajra, Age: 21, City: Lalitpur

// Question no. 4

function toUpperCase(string) {
    capitalized = string.toUpperCase();
    return capitalized;
}
let word = 'Sandip';
console.log('The capitalized version of the given word is '+ toUpperCase(word));

// Output: The capitalized version of the given word is SANDIP

// Question no. 5

function product(a, b){
    mul = a * b;
    return mul;
}

let number1 = 12;
let number2 = 12;

console.log('The product of the given numbers is '+ product(number1, number2));

// Output: The product of the given numbers is 144

// Question no. 6

function getLastElement(array){
    last = array.length - 1;
    return array[last];
}

let array1 = [23, 3, 1, 5, 23, 4];
console.log('The last element of the given array is ' + getLastElement(array1));

// Output: The last element of the given array is 4

// Question no. 7

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function getBookTitle(book) {
    return `Title: ${book.title}`;
}

let firstBook = new Book('Hello World!', 'Bajra', 2024);

console.log(getBookTitle(firstBook));

// Output: Title: Hello World!

// Question no. 8

function reverseString(string) {
    let char = '';
    let reverseChar = '';
    for (i = 0; i<string.length; i++){
        char = string[i];
        reverseChar = char + reverseChar;
    }
    return reverseChar;
}

let word1 = 'Bajra';
console.log('The reverse string of the given word is ' + reverseString(word1));

// Output: The reverse string of the given word is arjaB

// Question no. 9

function evenOrOdd(number){
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let number_ = 12;

console.log(evenOrOdd(number_));

// Output: true

// Question no. 10

function sumArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let array2 = [1, 2, 3, 4, 5];
console.log('The sum of elements in the given array is ' + sumArray(array2));

// Output: The sum of elements in the given array is 15

// Question no. 11

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function getCarModel(name) {
    return `Model: ${name.model}`;
}

let porsche = new Car('US', 'Porsche 911', 2021);
console.log(getCarModel(porsche));

// Output: Model: Porsche 911

// Question no. 12

function concatenateStrings(string1, string2) {
    con = string1 + string2;
    return con;
}

let string1 = 'Bajra';
let string2 = 'Don';

console.log('The concatenation of the given two strings is ' + concatenateStrings(string1, string2));

// Output: The concatenation of the given two strings is BajraDon

// Question no. 13

function square(number) {
    result = number ** 2;
    return result;
}

let number3 = 12;
console.log('The square of the given number is '+ square(number3));

// Output: The square of the given number is 144

// Question no. 14

function findMax(array) {
    let highest = 0;
    for (i = 0; i<array.length; i++){
        if (array[i]>highest){
            highest = array[i];
        }
    }
    return highest;
}

let array3 = [1, 2, 54, 69, 32, 34, 67];
console.log('Highest number in the given array is ' + findMax(array3));

// Output: Highest number in the given array is 69

// Question no. 15

function Student(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
}

function getFullName(student) {
    return `Full Name: ${student.firstName} ${student.lastName}`;
}

let sandip = new Student('Sandip', 'Thapa Magar', 1.0);

console.log(getFullName(sandip));

// Output: Full Name: Sandip Thapa Magar

// Question no. 16

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Bajra'));

// Output: Hello, Bajra!

// Question no. 17

function doubleArray(array) {
    newArray = [];
    for (i = 0; i<array.length; i++){
        double = array[i]*2;
        newArray.push(double);
    }
    return newArray;
}

let array4 = [2, 4, 50, 100, 150];
console.log('New Array: ' + doubleArray(array4));

// Output: Hello, Bajra!

// Question no. 18

function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
}

function getMovieTitle(movie) {
    return `Title: ${movie.title}`;
}

let movie1 = new Movie('Interstellar', 'Christopher', 2011);
console.log(getMovieTitle(movie1));

// Output: Title: Interstellar

// Question no. 19

function getLength(string) {
    return string.length;
}

let string3 = 'Bajra';
console.log('The length of the given string is ' + getLength(string3));

// Output: The length of the given string is 5

// Question no. 20

function subtract(a, b){
    diff = a - b;
    return diff;
}

let number4 = 12;
let number5 = 4;
console.log('The difference between the two given number is ' + subtract(number4, number5));

// Output: The difference between the two given number is 8

// Question no. 21

function mergeArrays(array1, array2) {
    for (i = 0; i<array2.length; i++){
        array1.push(array2[i]);
    }
    return array1;
}
let array5 = [1, 2, 3]
let array6 = [4, 5, 6]
console.log('The merged array: ' + mergeArrays(array5, array6));

// Output: The merged array: 1,2,3,4,5,6

// Question no. 22

function recipe(name, ingredients, servings) {
    this.name = name;
    this.ingredients = ingredients;
    this.servings = servings;
}

function getIngredients(recipe) {
    return `Ingredients: ${recipe.ingredients}`;
}

let momo = new recipe('momo', ['minced meat', 'veggies', 'masalas', 'flour'], 1);
console.log(getIngredients(momo));

// Output: Ingredients: minced meat,veggies,masalas,flour

// Question no. 23

function endsWith(string, char) {
    length = string.length - 1;
    if (string[length] == char) {
        return true;
    }
    else {
        return false;
    }
}

let string4 = 'Bajra';
let char1 = 's';
console.log(endsWith(string4, char1));

// Output: false

// Question no. 24

function divide(a, b){
    diff = a / b;
    diff = Math.floor(diff);
    return diff;
}

let a1 = 12;
let a2 = 5;
console.log('The quotient is ' + divide(a1, a2));

// Output: The quotient is 2

// Question no. 25

function removeFirstElement(array) {
    newArray = [];
    for (i=1; i<array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

let array1_ = [2, 4, 6, 8, 10];
console.log('After removing the first element: ' + removeFirstElement(array1_));

// Output: After removing the first element: 4,6,8,10

// Question no. 26

function album(title, artist, tracks) {
    this.title = title;
    this.artist = artist;
    this.tracks = tracks;
}

function getTrackCount(album) {
    return `Track Count: ${album.tracks}`;
}

let hop = new album('Shot a flow 9', 'Adin Ross', ['track1', 'track2', 'track3']);
console.log(getTrackCount(hop));

// Output: Track Count: track1,track2,track3

// Question no. 27

function startsWith(string, char) {
    if (string[0] == char) {
        return true;
    }
    else {
        return false;
    }
}

let string_ = 'Bajra';
let char_ = 'B';

console.log(startsWith(string_, char_));

// Output: true

// Question no. 28

function isPositive(number) {
    if (number > 0) {
        return 'Positive';
    }
    else {
        return 'Negative';
    }
}

let number__ = -2;
console.log(isPositive(number__));

// Output: Negative

// Question no. 29

function countsElements(array) {
    return array.length;
}

let array__ = [1, 2, 3, 4, 5];
console.log('Total number of elements in the array: ' + countsElements(array__));

// Output: Total number of elements in the array: 5

// Question no. 30

function game (name, genre, platform) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
}

function getPlatformList(game) {
    return `Platform List: ${game.platform}`;
}

let rdr2 = new game('Red Dead Redemption 2', 'Adventure, Story, Shooting', ['PC', 'Playstation', 'Xbox']);
console.log(getPlatformList(rdr2));

// Output: Platform List: PC,Playstation,Xbox