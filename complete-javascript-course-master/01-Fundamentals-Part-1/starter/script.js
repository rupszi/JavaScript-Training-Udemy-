// let js = "amazing";
// //if (js === "amazing") alert("JavaScript is FUN!");
// console.log(34 + 54 - 42 + 5)

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas"
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Assignment for the Values and Variables lecture

// let country = "Hungary";
// let continent = "Europe";
// let population = "9.8 million";

// console.log(continent);
// console.log(country);
// console.log(population);


// Data Types

// let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// year = 1991;
// console.log(typeof year);

// // DataTypes assignment

// let isIsland = true
// let language;
// console.log(population, country, isIsland, language);

// Variable type assignment

// language = hungarian;
// const birthYear = 1984;

// Basic Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2);

// const firstName = "Jonas";
// const lastName = "Schmidt";
// console.log(firstName + " " + lastName);

// x = 10 + 5;
// x += 10;
// x++ // x = x + 1
// console.log(x);


// Coding Challenge 1

// let bodymass_Mark = 78;
// let bodymass_John = 92;
// let height_Mark = 1.69;
// let height_John = 1.95;

// let bmi_Mark = (bodymass_Mark / (height_Mark ** 2));
// let bmi_John = (bodymass_John / (height_John ** 2));
// let markHigherBMI = bmi_Mark > bmi_John;
// console.log(markHigherBMI);
// console.log("BMI Mark= " + bmi_Mark);
// console.log("BMI John= " + bmi_John);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1992;
// const currentYear = 2024;

// const jonasNew = `I'm ${firstName}, I'm a ${currentYear - birthYear} years old ${job}.`;

// console.log(jonasNew);

// const jonas = "I'm " + firstName + "," + " I'm a " + job + ", and I'm " + (currentYear - birthYear) + " years old.";

// console.log(jonas);

// Taking decisions, if/else statements

// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving licence. 🚗");
// } else {
//     const ageLeft = 18 - age;
//     console.log(`Sraha is too young, wait an another ${ageLeft} years :)`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


// type conversion

// const inputYear = '1971';
// console.log(Number(inputYear));
// console.log(inputYear + 18);

// console.log(Number("jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);


// type coercion

// console.log("I am " + 23 + " old");
// console.log("23" - 10 - "3");
// console.log("23" * "3");

// 5 falsy values: 0 '' undefined NaN null

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job!")
// }

// Equality operators

// const age = 18;
// if (age === 18) console.log("You just became an adult :) (strict)");

// if (age == 18) console.log("You just became an adult :) (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);

// if (favourite === 23) { // "23" == 23
//     console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number!");
// } else {
//     console.log("Number is not 23 or 7.");
// }

// if (favourite !== 23) console.log("Why not 23?");

// logical operators

// Logical operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive!")
// }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive!")
// } 
// Switch statement

// const day = "wednesday"; // day === "monday"

// switch (day) {
//     case 'monday': //day === monday
//         console.log('Plan course structure');
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write video examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
//         break;
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day == "tuesday") {
//     console.log('Prepare theory videos');
// } else if (day == 'wednesday' || 'thursday') {
//     console.log('Write video examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

// Conditional operator

// const age = 23;
// age >= 18 ? console.log("I like to drink wine :)") : console.log("I like to drink water :)");

// const drink = age >= 18 ? "wine" : 'water';
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? "wine" : 'water'}`);

