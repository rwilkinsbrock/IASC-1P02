//javascript goes here

var start = new Date();
var milliStart = start.getTime();
console.log(start, milliStart);


function stopTime(){
  var stop = new Date();
  var milliStop = stop.getTime();
  console.log(stop, milliStop);
  var difMilli = milliStop - milliStart;
  var difSecs = difMilli / 1000;
  console.log(difMilli, difSecs);
  var myAlert = alert("You have been on this page for: " + difSecs + " seconds!");

}
