// Strict mode

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D")

// const private = 3;
// const interface = 3;

// FUNCTIONS

// function logger() {
//     console.log("My name is Jonas!");
// }

// // calling/running/invoking the function

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function declarations and expresions

// // Function Declaration;

// function calcAge1(birthYear) {
//     // const age = 2027 - birthYear;
//     // return age
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression;

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }


// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'John'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// DATA STRUCTURES

// // Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // Arrays Literal Syntax
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];
// const firstName = 'Jonas'

// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[1]);
// console.log(age1);

// // Arrays Basic Operations

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// // Remove elements

// const popped = friends.pop(); //last
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); //returns -1 as this element is not existing in the array

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// Objects

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastName, age, job, and friends');

// console.log(interestedIn);
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);


// //Challenge

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend called ${jonas.friends[0]}`);
// Challenge #3

// Solution:

// /* Write your code below. Good luck! 🙂 */

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// } else {
//     console.log(`they have the same BMI.`);
// }

// FOR loop practice
// for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep += 1) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// for (let a = 0; a < jonasArray.length; a++) {
//     // reading from jonas array
//     console.log(jonasArray[a], typeof jonasArray[a]);
//     // writing to jonas array
//     // types[a] = typeof jonasArray[a];
//     types.push(typeof jonasArray[a]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const age = [];

// for (let a = 0; a < years.length; a++) {
//     age.push(2037 - years[a]);
//     console.log(age);
// }

// continue and break statement

// console.log('---ONLY STRINGS---');
// for (let a = 0; a < jonasArray.length; a++) {
//     // reading from jonas array
//     if (typeof jonasArray[a] !== 'string') continue;
//     // writing to jonas array
//     // types[a] = typeof jonasArray[a];
//     console.log(jonasArray[a], typeof jonasArray[a]);
// }

// console.log('---BREAK WITH NUMBER---');
// for (let a = 0; a < jonasArray.length; a++) {
//     // reading from jonas array
//     if (typeof jonasArray[a] === 'number') break;
//     // writing to jonas array
//     // types[a] = typeof jonasArray[a];
//     console.log(jonasArray[a], typeof jonasArray[a]);
// }

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// how to loop backward
for (let a = jonasArray.length; a >= 0; a--) {
    console.log(jonasArray[a]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise} -----`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}