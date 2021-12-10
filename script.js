// /* ======================//////*******Tasks 1*******//////=====================================
// 1) Variables: Declare admin and name variables. Assign the value "John" to name. 
// Copy the value from name to admin. Show the value of admin using alert (must output “John”). */

// Ans:
// let Admin
// let Name = "John"
// Admin = Name;
// alert(Admin)

// ======================//////*******Tasks 2*******//////=====================================
// 2)Array: Complete the method which accepts such an array, and returns that single different number (length >= 3)

// Ans:
// const arr = numbers => numbers.sort((a, b) => a - b)
//  .filter(n => n === numbers[0]).length === 1 ? numbers[0] : numbers[numbers.length-1]
// console.log(arr([17, 17, 3, 17, 17, 17, 17])) ==> 3
// console.log(arr([17, 17, 17, 32, 17, 17, 17])) ==> 32
// console.log(arr([1, 1, 2])) ==> 2

// ======================//////*******Tasks 3*******//////=====================================
// 3)Array: Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// function createPhoneNumber(n){
//     const a = n.slice(0, 3).join('')
//     const b = n.slice(3, 6).join('')
//     const c = n.slice(6).join('')

//     return `(${a}) ${b}-${c}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// ======================//////*******Tasks 4*******//////=====================================
// 4)Array: Your task is to create a function deepCount that returns the number of ALL elements within an array, 
// including any within inner-level arrays.

// function deepCount(arrCount){
//     let count = arrCount.length;
//         for (let i= 0; i < arrCount.length; i++) {
//             if (Array.isArray(arrCount[i]) ) {
//                 count += deepCount(arrCount[i])
//             }
//         }
//     return count;

// }
// console.log(deepCount([1, 2, 3]))
// //>>>>> 3
// console.log(deepCount(["x", "y", ["z"]]))
// //>>>>> 4
// console.log(deepCount([1, 2, [3, 4, [5]]]))
// //>>>>> 7

// ======================//////*******Tasks 5*******//////=====================================
// 5)Array: The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
// Each of them has a single 100, 50 or 25 dollar bill. 
// An "Avengers" ticket costs 25 dollars. Vasya is currently working as a clerk. 
// He wants to sell a ticket to every single person in this line. 
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?



// ======================//////*******Tasks 6*******//////=====================================
//6) Write an if condition to check that age is NOT between 14 and 90 inclusively.
// function ages(age){
//     if (!(age >= 14 && age <= 90)){
//         return ("true")
//     } else {
//         return ("false")
//     }
// }
// console.log(ages(13))
// console.log(ages(14))
// console.log(ages(16))
// console.log(ages(90))
// console.log(ages(91))

// ======================//////*******Tasks 7*******//////=====================================
// 7)Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// (for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   })
// Answ:

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// ======================//////*******Tasks 8*******//////=====================================
// 8)Write a loop which prompts for a number greater than 100. 
// If the visitor enters another number – ask them to input again. 
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// let num
// do {
//   num = prompt("Please enter a number greater than 100", 0)
// } while (num <= 100 && num)


// ======================//////*******Tasks 9*******//////=====================================
// 9)Write a function min(a,b) which returns the least of two numbers a and b:

// ======================//////*******Tasks 10*******//////=====================================
// 10)Rewrite the function using '?' and '||'.