
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
var num = [3];
num[0]= prompt("Enter the first side");
num[1] = prompt("Enter the second number");
num[2] = prompt ("Enter the third number");

isocelesTriangle(num[0], num[1], num[2]);
scaleneTriangle(num[0],num[1],num[2]);
equilateralTriangle(num[0], num[1], num[2]);
