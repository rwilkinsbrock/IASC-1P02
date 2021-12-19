//exercise 3 javascript

function numOutput(){
  numX = document.getElementById("numOne").value;
  numY = document.getElementById("numTwo").value;
  numZ = Number(numX) + Number(numY);
  document.getElementById("basicAddOutput").innerHTML = numZ;
  console.log(numX, numY, numZ);
}
