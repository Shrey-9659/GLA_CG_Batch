// if
// syntax -- 
// if(condition){
//     task
// }

// Print if the number is even
// let randomNumber = Math.floor((Math.random() * 10) + 1)
// console.log(randomNumber)
// if(randomNumber % 2 == 0){
//     console.log("Number even hai")
// }

// if...else
// syntax -- 
// if(condition){
//     task
// }else{
    // task
// }

// Print if the number is even or odd
// let randomNumber = Math.floor((Math.random() * 10) + 1)
// console.log(randomNumber)
// if(randomNumber % 2 == 0){
//     console.log("Number even hai")
// }else{
//     console.log("Number odd hai")
// }

// else...if
// syntax -- 
// if(condition1){
//      task
// }else if(condition2){
//      task
// }else{
//      task
// }

// Write a JavaScript program that takes a student's marks as input and displays their grade using an if-else-if ladder.
// Conditions
// Marks 90–100 → Grade A
// Marks 80–89 → Grade B
// Marks 70–79 → Grade C
// Marks 60–69 → Grade D
// Marks 40–59 → Grade E
// Marks below 40 → Fail
// Marks above 100 or below 0 → Invalid Marks

// let marks = -90;

// if(marks>90 && marks <= 100){
//     console.log("Grade : A")
// }else if(marks>80 && marks <= 90){
//     console.log("Grade : B")
// }else if(marks>70 && marks <= 80){
//     console.log("Grade : C")
// }else if(marks<=70 && marks >= 0){
//     console.log("Padh lo")
// }else{
//     console.log("Invalid Input")
// }

// switch

// switch(expression){
//     case 1:{
//         task
//     }
//     case 2:{
//         task
//     }
//     default: {
//         task
//     }
// }

// 1- Monday, 2- tuesday.... 7-sunday

// let day = 8;

// switch(day){
//     case 1:{
//         console.log("Monday")
//         break;
//     }
//     case 2:{
//         console.log("Tuesday")
//         break;
//     }
//     case 3:{
//         console.log("Wednesday")
//         break;
//     }
//     case 4:{
//         console.log("Thursday")
//         break;
//     }
//     case 5:{
//         console.log("Friday")
//         break;
//     }
//     case 6:{
//         console.log("Saturday")
//         break;
//     }
//     case 7:{
//         console.log("Sunday")
//         break;
//     }
//     default:{
//         console.log("Invalid Input")
//         break;
//     }
// }

// ternary operators



// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid Day");
// }
// Tuesday

// let x = 5;

// switch (x) {
//     case 1:
//         console.log("One");
//         break;
//     case 5:
//         console.log("Five");
//         break;
//     default:
//         console.log("Other");
// }
// 5

// let num = 10;

// switch (num) {
//     case 5:
//         console.log("A");
//     case 10:
//         console.log("B");
//     case 15:
//         console.log("C");
//         break;
//     default:
//         console.log("D");
// }
// B
// C

// let a = 2;

// switch (a) {
//     case 1:
//         console.log("Hello");
//         break;
//     case 2:
//         console.log("Welcome");
//     case 3:
//         console.log("JavaScript");
//         break;
//     default:
//         console.log("Bye");
// }
// Welcome
// JS

// let x = "2";

// switch (x) {
//     case 2:
//         console.log("Number");
//         break;
//     default:
//         console.log("Invalid");
// }

// let value = 3;

// switch (value) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//     case 5:
//         console.log("Five");
//         break;
//     default:
//         console.log("None");
// }

// let x = 1;

// switch (x) {
//     default:
//         console.log("Default");
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
// }

// let a = 10;

// switch (a) {
//     case 10:
//         console.log("A");
//         break;
//     case 10:
//         console.log("B");
//         break;
//     default:
//         console.log("C");
// }

// let x = 2;

// switch (x + 1) {
//     case 1:
//         console.log("One");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     default:
//         console.log("Default");
// }

// let x = 5;

// switch (true) {
//     case x > 10:
//         console.log("Greater than 10");
//         break;
//     case x < 10:
//         console.log("Less than 10");
//         break;
//     default:
//         console.log("Equal to 10");
// }


// Ternary Operator
// (condition) ? true statement : false statement

let mynum = 2
console.log(mynum);
(mynum % 2 == 0) ? 
console.log("Even") : 
console.log("Odd")