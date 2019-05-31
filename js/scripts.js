
function determineIfTriangle(num1, num2, num3){
  if((num1+num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1)){
    console.log("it is a triangle");
  } else {
    console.log("it is not a triangle");
  }
}
function scaleneTriangle (num1, num2, num3){
 if(num1 !== num2 && num1!==num3 && num1 !== num3){
 console.log("It is a scalene triangle");
 } else{
 console.log ("it is not a scalene triangle");
 }
}
function isocelesTriangle (num1, num2, num3){
  if ((num1 == num2 && num2 !== num3) || (num1 !== num2 && num2 == num3)){
    console.log("it is an isosceles triangle");
  }else {
    console.log("It is not an isoceles triangle");
  }
}
function equilateralTriangle (num1, num2, num3){
  if (num1 == num2 && num2 == num3){
    console.log("It is an equilateral triangle");
  }else{
    console.log("It is not an equilateral triangle");
  }
}
function myFunction() {
  document.getElementById("form-group").reset();
    }
function results(){
  document.getElementById("output").innerHTML = "Paragraph changed!";
  }
var num = [3];
num[0] = document.getElementById("num1").value;
num[1] = document.getElementById("num2").value;
num[2] = document.getElementById("num3").value;
submitOK = "true";




isocelesTriangle(num[0], num[1], num[2]);
scaleneTriangle(num[0],num[1],num[2]);
equilateralTriangle(num[0], num[1], num[2]);
