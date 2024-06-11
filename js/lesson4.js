// // for (let i=1; i <= 10; i++) {
// //     console.log(i)
// // }

// // for (let i=10; i >= 0; i--) {
// //     console.log(i)
// // }

// // Question no.1 
// let i = 1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }

// // let i = 5;
// // while (i>=-1) {
// //     console.log(i);
// //     i--;
// // }

// // let i = 1;
// // do {
// //     console.log(i);
// //     i++;
// // }
// // while (i<=10);

// // Question no.2
// let i = 2;
// while (i<=10) {
//     console.log(i);
//     i += 2;
// }

// // QUestion no. 3
// sum = 0;
// for (let j = 1; j<=10; j++) {
//     sum += j;
//     console.log(sum)
// }

// // Question no.4
// num = 5;
// fact = 1;
// i = 1;

// while (i<=num) {
//     fact *= i;
//     i ++;
// }
// console.log(fact)

// // Question no.5
// square = 0
// for (let i = 1; i<=5; i++) {
//     square = i * i
//     console.log(square)
// }

// // Question no.6
// cube = 0
// i = 1
// while (i<=5) {
//     cube = i * i * i
//     console.log(cube)
//     i++;
// }

// // QUestion no.7
//  let array = ['subarna', 'aditya', 'sandip', 'bibek']

//  for (i in array) {
//     console.log(array[i])
//  }

//  // QUestion no. 8
//  let array = [2, 3, 6, 8, 4]
//  sum = 0;

//  for (i in array) {
//     sum += array[i]
//  }
//  console.log(sum)

// // Question no. 9
// let array = [2, 3, 4, 5, 6]

// for (i = array.length - 1; i>=0; i--) {
//     console.log(array[i])
// }

// // Question no. 10
// let array = [2, 5, 3, 9, 8]
// i = 0
// max = 0

// while (i<array.length) {
//     if (array[i] > max) {
//         max = array[i]
        
//     }
//     i++
// }
// console.log(max)

// //Question no. 11
// sum = 0

// for (i = 2; i<=20; i+=2) {
//     sum += i
// }
// console.log(sum)

// // QUestion no. 12
// product = 1

// for (i = 1; i<=15; i+=2) {
//     product *= i
// }
// console.log(product)

// // Question no. 13
// star = ''

// for (i = 1; i<=5; i++) {
//     star += '*'
//     console.log(star)
// }

// // Question no. 14
// let i = 10

// while (i>0) {
//     console.log(i)
//     i --
// }

// // Question no. 15

// let i = 6
// factorial = 1

// for (i; i>0; i--) {
//     factorial *= i;
    
// }

// console.log(factorial)

// // Question no. 16
// let number = 356
// sum = 0

// while (number > 0) {
//     remainder = number % 10
//     sum += remainder
//     number = Math.floor(number/10)
// }
// console.log(sum)


// // Question no. 17
// for (i = 5; i>0; i--) {
//     pattern = ''
//     for (j = 1; j<=i; j++){
//         pattern += i
//     }
//     console.log(pattern)
// }

// // Question no. 18

// x = 0
// y = 0
// z = 1

// console.log("First ten fibonacci numbers are: ")
// for (i = 0; i <=9; i++){
//     console.log(z)
//     x = y
//     y = z
//     z = x + y
// }

// // Question no. 19
// for (i = 1; i <= 20; i++){
//     let a = 0;
//     for(j = 2; j < i; j++){
//         if (i % j == 0){
//             a ++;
//         };
//     };
//     if(a == 0){
//         console.log(i)
//     }
// }

// // Question no. 20
// number = 87654;
// numberReverse = 0;

// while(number>0) {
//     remainder = number % 10;
//     numberReverse = numberReverse * 10 + remainder;
//     number = Math.floor(number/10);
// }

// console.log(numberReverse)