// Assignment 9

/*
User ko do prompts dena hai
phir dono inputs ka sum dikhana hai
*/

// User se Input lena

// + ka use kiya taki string => number

let num1 = +prompt("Pehla Number Batao?");
let num2 = +prompt("Dusra Number Batao?");

// Abb dono Inputs ka Sum karna hai

let sum = num1 + num2;

// Abb saare data ko jama len taki user ko saaf dikhe

let xyz = "Result: " + num1 + ` + ` + num2 + ` = ` + sum;

// Abb ise Website mein Print Karna hai

document.write(xyz);
