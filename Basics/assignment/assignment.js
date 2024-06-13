// 1. Create two variables, one for your name and another for your age. Print a sentence combining those variables.

// storing 
const fName = 'Subarna Bajracharya';
const age = '21';

// printing
console.log(`My name is ${fName} and my age is ${age}`);



// 2. Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.

// storing and calculating
const a = 21;
const b = a*a;

// printing
console.log(`${a} multiplied by ${a} is ${b}.`);


// 3. Write code to check if the character stored in a variable is
// uppercase or lowercase. Print 'uppercase' or 'lowercase'
// accordingly. (Hint: User character codes)

const x = 'd';

// comparing and printing
if (x == x.toLowerCase()) {
    console.log('The given character is lowercase')
}
else {
    console.log('The giver character is uppercase')
};


// 4. Declare two variables with numeric values. Add them together
// and print the sum. Then subtract the smaller number from the
// larger number and store the difference in a new variable. Print
// the difference.

// storing
const w = 42;
const e = 21;

// adding
const addition = w+e;

// printing
console.log(`Sum: ${addition}`);

// calculating difference
const difference = w-e;

// printing
console.log(`Difference: ${difference}`);



// 5. Imagine you have a variable storing a product price. Write code
// to apply a 10% discount and print the discounted price.

// storing
const price = 1500;

// calculating
const finalPrice = price-price*0.1;

// printing
console.log(`Your final price after 10% discount is ${finalPrice}`);