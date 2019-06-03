function  results(){


  var num1= parseInt(document.getElementById("numOne").value);
  var num2=parseInt(document.getElementById("numTwo").value);
  var num3=parseInt(document.getElementById("numThree").value);

  var sides = [num1, num2, num3];

  document.getElementById("output").innerHTML="It is not a triangle";


    if(sides[0] <=0 || sides[1] <=0 || sides[2] <=0){
      document.getElementById("output").innerHTML="It is not a triangle";
    }
    else if(sides[0]+sides[1]<sides[2] || sides[1]+sides[2]<sides[0] || sides[2]+sides[0]<sides[1]){
      document.getElementById("output").innerHTML="Does not make a triangle";
    }
    else if(sides[0]===sides[1] && sides[1]===sides[2] && sides[2]===sides[0]){
      document.getElementById("output").innerHTML= " Equilateral Triangle";
    }
    else if(sides[0]===sides[1] || sides[0]===sides[2] || sides[1]===sides[2]){
      document.getElementById("output").innerHTML="Isosceles Triangle";
    }
    else if(sides[0]!==sides[1] && sides[0]!==sides[2] && sides[2]!==sides[1] && sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[2]+sides[0]>sides[1]){
      document.getElementById("output").innerHTML="Scalene Triangle";
    }

    else {
      document.getElementById("output").innerHTML="Enter valid values";
    }
  }
