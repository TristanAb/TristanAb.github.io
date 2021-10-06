function chkchk (){
  var question1;
  var question2;
  var question3;
  var table = [0,0,0,0]
  table[0] = document.getElementById("chkProgramation1").checked;
  table[1] = document.getElementById("chkProgramation2").checked;
  table[2] = document.getElementById("chkProgramation3").checked;
  table[3] = document.getElementById("chkProgramation4").checked;
  var s = document.getElementById("radio").checked;
  if (s == true){
    console.log("Question 1:Oui")
    question1 = "Oui";
    
  } else{
    console.log("Question 1:Non")
    question1 = "Non";
  }
  if (table[3] ==  true ){
    console.log("Question 2:Non")
    question2 = "Non";
  } else if (table [0] == false ){
    console.log("Question 2:Non")
    question2 = "Non";
  } else if (table [1] ==false ){
    console.log("Question 2:Non")
    question2 = "Non";
  } else if (table [2] == false){
    console.log("Question 2:Non")
    question2 = "Non";
  } else {
    console.log("Question 2:Oui")
  }question2 = "Oui";
  var t = document.getElementById("quelleTravaille").value;
  if (t == "Travaile 2.6 3"){
    console.log("Question 3:Oui")
    question3 = "Oui";
  } else {
    console.log("Question 3:Non")
    question3= "Non";
  }
  document.getElementById("dio").innerHTML = "Question 1:   " + question1 +",    Question 2:    " + question2 + "    Question 3:  " + question3;

}
