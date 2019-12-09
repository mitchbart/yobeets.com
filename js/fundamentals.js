"use strict";

console.log("why hello there!");
console.log("stuff also be deleted in the console, not a lot to see here")


//fundamentals part 1

//let admin;
//let name;

//name = "John";
//admin = name;

//console.log(admin);

//fundamentals part 2
//const birthYear = 1948
//const thisYear = 1965
//c//onst firstName = "Carlos"
//const lastName = "Stevenson"

//const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old."

//console.log(greeting)

//fundamentals part 3
//Write a function called add7 that takes one number and returns that number + 7.

function add7(number) {
    return number + 7;
}

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(x,y) {
    return x * y;
}

//Write a function called capitalize that takes a string and returns that string with only the first 
function capitalize(str) {
    str = str.toLowerCase();
    let cap = str.charAt(0).toUpperCase() + str.substring(1);
    return cap;
}

console.log(capitalize("cAN YOU DO THIS!!"));


//Write a function called lastLetter that takes a string and returns the very last letter of that string: 
function lastLetter(las) {
    let length = las.length;
    return las.substring(length - 1);
}

console.log(lastLetter("and the last letter is!"));