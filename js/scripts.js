function  results(){
 

  var num1= parseInt(document.getElementById("sideA").value);
  var num2=parseInt(document.getElementById("sideB").value);
  var num3=parseInt(document.getElementById("sideC").value);
 
  var sides = [num1, num2, num3];
  

    if(sides[0] <=0 || sides[1] <=0 || sides[2] <=0){
      document.getElementById("output").innerHTML="it is not a triangle";
    }
     else if(sides[0]+sides[1]<sides[2] || sides[1]+sides[2]<sides[0] && sides[2]+sides[0]<sides[1]){
      document.getElementById("output").innerHTML="Does not make a triangle";
    }
    else if(sides[0]===sides[1] && sides[1]===sides[2] && sides[2]===sides[0]){ 
      document.getElementById("output").innerHTML= " Equilateral Triangle";
    }
    else if(sides[0]===sides[1] || sides[0]===sides[2] || sides[1]===sides[2]){
      document.getElementById("output").innerHTML="Iscosceles Triangle";
    }
    else if(sides[0]!==sides[1] && sides[0]!==sides[2] && sides[2]!==sides[1] && sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[2]+sides[0]>sides[1]){
      document.getElementById("output").innerHTML="scalene triangle";
    }
   
    else {
      document.getElementById("output").innerHTML="Enter valid values";
    }
  }
