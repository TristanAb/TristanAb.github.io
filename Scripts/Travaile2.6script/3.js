function chkchk (){
  var table = [0,0,0,0]
  table[0] = document.getElementById("chkProgramation1").checked;
  table[1] = document.getElementById("chkProgramation2").checked;
  table[2] = document.getElementById("chkProgramation3").checked;
  table[3] = document.getElementById("chkProgramation4").checked;
  var s = document.getElementById("radio").checked;
  if (s == true){
    console.log("Question 1:oui")
    
  } else{
    console.log("Question 1:non")
  }
  if (table[3] ==  true ){
    console.log("Question 2:non")
  } else if (table [0] == false ){
    console.log("Question 2:non")
    
  } else if (table [1] ==false ){
    console.log("Question 2:non")
    
  } else if (table [2] == false){
    console.log("Question 2:non")
    
  } else {
    console.log("Question 2:oui")
  }

}
