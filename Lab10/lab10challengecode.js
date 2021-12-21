//Javascript


function numAdd(){
  numX = document.getElementById("numOne").value;
  numY = document.getElementById("numTwo").value;
  numZ = Number(numX) + Number(numY);
  document.getElementById("answerOutput").innerHTML = numZ;
  console.log(numX, numY, numZ);
}

function numSub(){
  numX = document.getElementById("numOne").value;
  numY = document.getElementById("numTwo").value;
  numZ = Number(numX) - Number(numY);
  document.getElementById("answerOutput").innerHTML = numZ;
  console.log(numX, numY, numZ);
}

function numTimes(){
  numX = document.getElementById("numOne").value;
  numY = document.getElementById("numTwo").value;
  numZ = Number(numX) * Number(numY);
  document.getElementById("answerOutput").innerHTML = numZ;
  console.log(numX, numY, numZ);
}

function numDiv(){
  numX = document.getElementById("numOne").value;
  numY = document.getElementById("numTwo").value;
  numZ = Number(numX) / Number(numY);
  document.getElementById("answerOutput").innerHTML = numZ;
  console.log(numX, numY, numZ);
}
