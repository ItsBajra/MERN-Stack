// Async await

// is syntactic sugar built on top of promises. it allows you to write asynchronous code that looks 
// and behaves more like synchronous code, making it easier to read and write.
// the async keyword is used to declare an synchronous function, and the await keyword is 
// used to pause the execution until the promise is resolved.

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('Data Fetched!');
        }, 1000);
    })
}

async function getData() {
    const data = await fetchData();
    console.log(data); // Logs: 'Data fetched!' after 1 second
}

getData();

// find map and filter in array

// find: finds the first element in the array tha satisfies the provided testing function.
// returns the first element found or undefined if no elements satisfies

const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find(
    (num) => num > 30
);

const foundNumber1 = numbers.filter((num) => num>30);
console.log(foundNumber);
console.log(foundNumber1);

const squareNumbers = numbers.map(num => num/5);
console.log(squareNumbers);
