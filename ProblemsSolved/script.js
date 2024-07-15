// Basics Of JavaScript
// **********************************Date And Time**********************************

// Problem 1
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let myDate = new Date("7-9-2024 10:30:38"); //M/D/Y H:M:S

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayy = days[myDate.getDay()];
let Hour = myDate.getHours();
let Minute = myDate.getMinutes();
let Second = myDate.getSeconds();

let prettend = Hour >= 12 ? "PM" : "AM";
// console.log("Today is :", dayy, ".");
// console.log(
//   "Currrent time is :",
//   Hour + "",
//   prettend,
//   ":",
//   Minute,
//   ":",
//   Second
// );

// W3 Resource
// Get the current date and time
var today = new Date();
// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();
// Array of day names
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Display the current day
// console.log("Today is: " + daylist[day] + ".");
// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
// Determine if it's AM or PM
var prepand = hour >= 12 ? " PM " : " AM ";
// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;
// Check for special cases when hour is 0
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
// Check for special cases when hour is 0
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
// Display the current time
// console.log(
//   "Current Time: " + hour + prepand + " : " + minute + " : " + second
// );

// Problem 2

// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let Today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();

if (mm < 10) {
  mm = "0" + mm;
}

Today = mm + "-" + dd + "-" + yy;
// console.log(Today);

Today = mm + "/" + dd + "/" + yy;
// console.log(Today);

Today = dd + "-" + mm + "-" + yy;
// console.log(Today);

Today = dd + "/" + mm + "/" + yy;
// console.log(Today);

//Problem 3

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function myLeap(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

// console.log(myLeap(2012));
// console.log(myLeap(2016));
// console.log(myLeap(2025));
// console.log(myLeap(2026));
// console.log(myLeap(2004));

// Problem 4

// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

