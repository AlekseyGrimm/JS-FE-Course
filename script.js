// //*********************************************************************************************
// // ======================              Topic 1            =====================================
// //*********************************************************************************************

// // /* ======================//////*******Tasks 1*******//////=====================================
// // 1) Variables: Declare admin and name variables. Assign the value "John" to name. 
// // Copy the value from name to admin. Show the value of admin using alert (must output “John”). */

// // Ans:
// // let Admin
// // let Name = "John"
// // Admin = Name;
// // alert(Admin)

// // ======================//////*******Tasks 2*******//////=====================================
// // 2)Array: Complete the method which accepts such an array, and returns that single different number (length >= 3)

// // Ans:
// // const arr = numbers => numbers.sort((a, b) => a - b)
// //  .filter(n => n === numbers[0]).length === 1 ? numbers[0] : numbers[numbers.length-1]
// // console.log(arr([17, 17, 3, 17, 17, 17, 17])) ==> 3
// // console.log(arr([17, 17, 17, 32, 17, 17, 17])) ==> 32
// // console.log(arr([1, 1, 2])) ==> 2

// // ======================//////*******Tasks 3*******//////=====================================
// // 3)Array: Write a function that accepts an array of 10 integers (between 0 and 9), 
// // that returns a string of those numbers in the form of a phone number.

// // function createPhoneNumber(n){
// //     const a = n.slice(0, 3).join('')
// //     const b = n.slice(3, 6).join('')
// //     const c = n.slice(6).join('')

// //     return `(${a}) ${b}-${c}`;
// // }

// // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// // ======================//////*******Tasks 4*******//////=====================================
// // 4)Array: Your task is to create a function deepCount that returns the number of ALL elements within an array, 
// // including any within inner-level arrays.

// // function deepCount(arrCount){
// //     let count = arrCount.length;
// //         for (let i= 0; i < arrCount.length; i++) {
// //             if (Array.isArray(arrCount[i]) ) {
// //                 count += deepCount(arrCount[i])
// //             }
// //         }
// //     return count;

// // }
// // console.log(deepCount([1, 2, 3]))
// // //>>>>> 3
// // console.log(deepCount(["x", "y", ["z"]]))
// // //>>>>> 4
// // console.log(deepCount([1, 2, [3, 4, [5]]]))
// // //>>>>> 7

// // ======================//////*******Tasks 5*******//////=====================================
// // 5)Array: The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
// // Each of them has a single 100, 50 or 25 dollar bill. 
// // An "Avengers" ticket costs 25 dollars. Vasya is currently working as a clerk. 
// // He wants to sell a ticket to every single person in this line. 
// // Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// // tickets([25, 25, 50]) // => YES
// // tickets([25, 100]) // => NO
// // tickets([25, 25, 50, 50, 100]) // => NO

// // function tickets(dollars) {
// //     let bill25 = 0
// //     let bill50 = 0
// //     for (let i = 0; i < dollars.length; i++) {
// //         if (dollars[i] == 25) {
// //             bill25 += 1
// //         }
// //         if (dollars[i] == 50) {
// //             bill25 -= 1
// //             bill50 += 1
// //         }
// //         if (dollars[i] == 100) {
// //             if (bill50 == 0 && bill25 >= 3) {
// //                 bill25 -= 3
// //             } else {
// //                 bill25 -= 1
// //                 bill50 -= 1
// //             }
// //         }
// //         if (bill25 < 0 || bill50 < 0) {
// //             return 'NO'
// //         }
// //     }
// //     return 'YES'
// // }

// // ======================//////*******Tasks 6*******//////=====================================
// //6) Write an if condition to check that age is NOT between 14 and 90 inclusively.
// // function ages(age){
// //     if (!(age >= 14 && age <= 90)){
// //         return ("true")
// //     } else {
// //         return ("false")
// //     }
// // }
// // console.log(ages(13))
// // console.log(ages(14))
// // console.log(ages(16))
// // console.log(ages(90))
// // console.log(ages(91))

// // ======================//////*******Tasks 7*******//////=====================================
// // 7)Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// // (for (let i = 0; i < 3; i++) {
// //     alert( `number ${i}!` );
// //   })
// // Answ:

// // let i = 0;
// // while (i < 3) {
// //   alert( `number ${i}!` );
// //   i++;
// // }

// // ======================//////*******Tasks 8*******//////=====================================
// // 8)Write a loop which prompts for a number greater than 100.
// // If the visitor enters another number – ask them to input again.
// // The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// // let num
// // do {
// //   num = prompt("Please enter a number greater than 100", 0)
// // } while (num <= 100 && num)


// // ======================//////*******Tasks 9*******//////=====================================
// // 9)Write a function min(a,b) which returns the least of two numbers a and b:

// // function min(a, b) {
// //     return a < b ? a : b;
// //   }

// //   console.log(min(2, 5))
// // // ====>2
// // console.log(min(3, -1))
// // // ==> -1
// // console.log(min(1, 1))
// // // ==> 1

// // ======================//////*******Tasks 10*******//////=====================================
// // 10)Rewrite the function using '?' and '||'.
// // function checkAge(age) {
// //     if (age > 18) {
// //         return true;
// //     } else {
// //         return confirm('Did parents allow you?');
// //     }
// // }

// // ANSW:
// // function checkAge(age) {
// //     return (age > 18) ? true : confirm('Did parents allow you?')
// // }

// // function checkAge(age) {
// //     return (age>18) || confirm('Did parents allow you?');
// // }

// //*********************************************************************************************
// // ======================              Topic 2            =====================================
// //*********************************************************************************************

// // ======================//////*******Tasks 1*******//////=====================================
// // Create a function runningAverage() that returns a callable function object:
// // // Example how it should work:
// // runningAverage(10); //Outputs 10.0
// // runningAverage(11); //Outputs 10.5
// // runningAverage(12); //Outputs 11

// // ANSW:
// // function running_Average() {
// //     let all = 0
// //     let num = 0

// //     return function (x) {
// //         all += x
// //         num += 1
// //         return all / num;
// //     }
// // }

// // let runningAverage = running_Average()

// // console.log(runningAverage(10)); //Outputs 10.0
// // console.log(runningAverage(11)); //Outputs 10.5
// // console.log(runningAverage(12)); //Outputs 11


// // ======================//////*******Tasks 2*******//////=====================================
// // Write a sum() function which will work properly when invoked using syntax below:
// // sum(2,3); // Outputs 5
// // sum(2)(3); // Outputs 5
// // sum(1)(2)(3)(4); // Outputs 10

// // // ANSW:
// function sum(...args) {
//     if (arguments.length > 1) {
//         let total = 0
//         for (let num of arguments) {
//             total += num
//         }
//         console.log(total)
//     } else {
//         let total = arguments[0]
//         function sum2(b) {
//             total += b
//             setTimeout(() => {
//                 console.log(total)
//             }, 0);            
//             return sum2
//         }
//         return sum2        
//     }
// }



// sum(2, 3); // Outputs 5
// sum(2)(3); // Outputs 5
// sum(1)(2)(3)(4); // Outputs 10

// // ======================//////*******Task 3*******//////=====================================
// // Create a function NamedOne() which takes first & last names as parameters and returns an object with firstName, 
// // lastName and fullName. If .firstName or .lastName are changed, then .fullName should also be changed. If .fullName is changed, 
// // then .firstName and .lastName should also be changed. 
// // Note: "input format" to .fullName will be firstName + space + lastName. 
// // If given fullName isn't valid then no property is changed.
// //Examples:
// // var	namedOne = new NamedOne("Naomi","Wang");
// // namedOne.firstName = "John"
// // namedOne.lastName = "Doe"
// // //...then...
// // namedOne.fullName // -> "John Doe"
// // // -- And:
// // namedOne.fullName = "Bill Smith"
// // //...then...
// // namedOne.firstName // -> "Bill"
// // namedOne.lastName // -> "Smith"
// // // -- But:
// // namedOne.fullName = "Tom" // -> no: lastName missing
// // namedOne.fullName = "TomDonnovan" // -> no: no space between first & last names
// // namedOne.fullName // -> "Bill Smith" (unchanged)

// // ANSW:

// // function NamedOne(first, last) {
// //     this.firstName = first;
// //     this.lastName = last;
// //     Object.defineProperty(this, "fullName", {
// //         get: function () {
// //             return this.firstName + ' ' + this.lastName;
// //         },

// //         set: function (value) {
// //             let arr = value.split(" ");
// //             if (arr.length === 2) {
// //                 this.firstName = arr[0];
// //                 this.lastName = arr[1];
// //             } 
// //         }
// //     });
// // }

// // let namedOne = new NamedOne('Naomi', 'Wang')
// // namedOne.firstName = "John"
// // namedOne.lastName = "Doe"
// // console.log(namedOne.fullName) // -> "John Doe"
// // // -- And:
// // namedOne.fullName = "Bill Smith"
// // //...then...
// // console.log(namedOne.firstName) // -> "Bill"
// // console.log(namedOne.lastName) // -> "Smith"
// // console.log(namedOne.fullName)
// // // -- But:
// // namedOne.fullName = "Tom" // -> no: lastName missing
// // console.log(namedOne.fullName, ": Tom")
// // namedOne.fullName = "TomDonnovan" // -> no: no space between first & last names
// // console.log(namedOne.fullName, ": TomDonnovan") // -> "Bill Smith" (unchanged)

// //*********************************************************************************************
// // ======================              Topic 3            =====================================
// //*********************************************************************************************


// // ======================//////*******Tasks 1*******//////=====================================
// // Create a Vector object that supports addition, subtraction, dot products, and norms. 
// // So, for example. If you try to add, subtract, or dot two vectors with different lengths, 
// // you must throw an error. Also provide: a toString method, so that using the vectors from above, 
// // a.toString() === '(1,2,3)' an equals method, 
// // to check that two vectors that have the same components are equal.

// //ANSW:

// // class Vector {
// //     constructor(arr) {
// //       this.arr = arr
// //     }
// //     add(arrTwo) {
// //       if (this.arr.length === arrTwo.arr.length) {
// //         let result = []
// //         for (let i = 0; i < this.arr.length; i++) {
// //           result.push(this.arr[i] + arrTwo.arr[i])
// //         }
// //         return new Vector(result)
// //       }
// //       return 'error'
// //     }
// //     subtract(arrTwo) {
// //       if (this.arr.length === arrTwo.arr.length) {
// //         let result = []
// //         for (let i = 0; i < this.arr.length; i++) {
// //           result.push(this.arr[i] - arrTwo.arr[i])
// //         }
// //         return new Vector(result)
// //       }
// //       return 'error'
// //     }
// //     dot(arrTwo) {
// //       if (this.arr.length === arrTwo.arr.length) {
// //         let res = 0
// //         for (let i = 0; i < this.arr.length; i++) {
// //           res += this.arr[i] * arrTwo.arr[i]
// //         }
// //         return res
// //       }
// //       return 'error'
// //     }
// //     norm() {
// //       let res = 0
// //       for (let i = 0; i < this.arr.length; i++) {
// //         res += this.arr[i] ** 2
// //       }
// //       return `sqrt(${res})`
// //     }
// //     toString() {
// //       return `(${this.arr.join()})`
// //     }
// //   }


// // var a = new Vector([1, 2, 3]);
// // var b = new Vector([3, 4, 5]);
// // var c = new Vector([5, 6, 7, 8]);
// // a.add(b); // should return a new Vector([4, 6, 8])
// // a.subtract(b); // should return a new Vector([-2, -2, -2])
// // a.dot(b); // should return 1*3 + 2*4 + 3*5 = 26
// // a.norm(); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// // a.add(c); // throws an error

// // ======================//////*******Tasks 2*******//////=====================================

// // Write a myNew function that replicates all the behavior of the new operator. 
// // This function should take one function parameter (the constructor), 
// // plus an unknown number of additional parameters of any type (arguments for the constructor). 
// // When invoked, myNew should do everything new does and return the same object new would evaluate to, 
// // as specified below:

// //ANSW:

// //Note: use the code below for your task:
// // function Person(name, age) {
// //     this.name = name;
// // 	this.age = age;
// // }
// // Person.prototype.introduce = function(){
// //     return 'My name is ' + this.name + ' and I am ' + this.age;
// // };

// // const myNew = (Person, ...params) => {
// //     return new Person(...params);
// //   }

// // var john = new Person('John', 30);
// // var jack = new Person('Jack', 40);
// // var john2 = myNew(Person, 'John2', 30); // should work the same as:
// // var jack2 = myNew(Person, 'jack2', 30);

// // console.log(john.introduce()); //My name is John and I am 30
// // console.log(jack.introduce()); //My name is Jackand I am 40 
// // console.log(john2.introduce());
// // console.log(jack2.introduce());


// //*********************************************************************************************
// // ======================              Topic 4            =====================================
// //*********************************************************************************************


// // ======================//////*******Tasks 1*******//////=====================================
// // Write your own MyPromise class with syncThen method
// //Example:
// // let promise = new MyPromise((resolve) => {
// //     console.log(1);
// //     resolve();
// // }).synchThen(()	=> {
// //     console.log(2);
// // }).then(() => {
// //     console.log(3);
// // })
// // console.log(4);
// // //1, 2, 4, 3

// // ANS:

// class MyPromise {
//     constructor(collback) {
//         this.promise = new Promise(collback)
//     }
//     then(collback) {
//         this.promise.then(collback)
//         return this
//     }
//     synchThen(collback) {
//         collback()
//         return this
//     }
// }


// let promise = new MyPromise((resolve) => {
//     console.log(1);
//     resolve();
// }).synchThen(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })
// console.log(4); // 1, 2, 4, 3

// // ======================//////*******Tasks 2*******//////=====================================

// // Write ReversePromise class so that ‘then’ functions
// // are calling from the end to the start
// // //Example:
// // let promise = new ReversePromise((resolve) => {
// //     console.log(1);
// //     resolve();
// // })
// // .then(() => console.log(2))
// // .then(() => console.log(3))
// // .then(() => console.log(4))
// // //1, 4, 3, 2

// //  ANS:

// const p1 = new Promise((resolve) => {
//     resolve(2)
// })

// const p2 = new Promise((resolve) => {
//     resolve(3)
// })

// const p3 = new Promise((resolve) => {
//     resolve(4)
// })

// Promise.all([p1, p2, p3])
// .then(console.log(1))
// .then(values => {
//     for (let result of values.reverse())
//     console.log(result)
// }) // 1,4,3,2



// //*********************************************************************************************
// // ======================              Topic 5            =====================================
// //*********************************************************************************************

// // ======================//////*******Tasks 1*******//////=====================================
// // Create a table 100x100.
// // Compare performance in adding listener to each col click and event delegation.
// // Apply drag&drop functionality to each col

// // ANW:

// // fun create table

// function tableCreate(row, col) {
//     const body = document.body
//     const tbl = document.createElement('table')
//     tbl.style.width = '200px'
//     tbl.style.border = '1px solid black'

//     for (let x = 0; x < row; x++) {
//         const tr = tbl.insertRow()
//         for (let y = 0; y < col; y++) {
//             const td = tr.insertCell()
//             td.id = `${x}:${y}`;
//             td.appendChild(document.createTextNode(`${x},${y}`))
//             td.style.border = '1px solid black'
//         }
//     }
//     body.appendChild(tbl)
// }

// tableCreate(30, 30)


// // add listener in cols
// const cols = Array.from(document.getElementsByTagName('td'))
// cols.forEach(col => {
//     col.addEventListener('click', () => {
//         alert(`${col.id}`)
//     })
// })

// // add listener in table
// const tableEvent = document.querySelector('table')
// tableEvent.addEventListener('click', (e) => {
//     alert(`Click ${e.target.id}`)
// })


// // drag&drop

// cols.forEach(col => {
//     col.setAttribute('draggable', 'true')

//     col.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('data', e.target.id)
//     })

//     col.addEventListener('drop', (e) => {
//         e.preventDefault()
//         const data = e.dataTransfer.getData('data')
//         e.target.append(document.getElementById(data))
//         e.target.style.backgroundColor = ''
//     })

//     col.addEventListener('dragover', (e) => {
//         e.preventDefault()
//         col.style.backgroundColor = '#4ce94f'
//     })

//     col.addEventListener('dragleave', (e) => {
//         e.preventDefault()
//         e.target.style.backgroundColor = ''
//     })
// })


// //*********************************************************************************************
// // ======================              Topic 6           =====================================
// //*********************************************************************************************
// ======================//////*******Tasks 1*******//////=====================================

// Create your custom error and trigger it.

// ANW:

// class MyError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'MyError';
//     }
//   }

// try {
//     throw new MyError('custom error');
//   } catch (e) {
//     console.log(e.name);     // 'MyError'
//     console.log(e.message);  // 'custom error'
//   }
