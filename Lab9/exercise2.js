//javascript goes here
var todaysDate = new Date();
var myPrompt = prompt("What is our age?");
var thisYear = todaysDate.getFullYear();
var birthYear = Number(thisYear) - Number(myPrompt);

console.log(myPrompt, thisYear, birthYear);

document.getElementById("yearOutput").innerHTML = birthYear;
