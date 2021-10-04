function Finitial(){
  let prenom = document.getElementById("txtPrenom").value;
let nomDuMilieu = document.getElementById("txtNomMilieux").value;
let nomDeFamille = document.getElementById("txtNomFamille").value;
  alert(  "Initale:" + prenom.charAt(0) + "." + nomDuMilieu.charAt(0) + "." + nomDeFamille.charAt(0) + ".");
}
function Fcomplet(){
  let prenom = document.getElementById("txtPrenom").value;
let nomDuMilieu = document.getElementById("txtNomMilieux").value;
let nomDeFamille = document.getElementById("txtNomFamille").value;
  alert(  "Nom complet: " + prenom + " " + nomDuMilieu + " " +nomDeFamille);
}
function Futilisateur(){
  let prenom = document.getElementById("txtPrenom").value;
let nomDuMilieu = document.getElementById("txtNomMilieux").value;
let nomDeFamille = document.getElementById("txtNomFamille").value;
  var username = prenom.charAt(0) + nomDuMilieu.charAt(0) + nomDeFamille;
  alert("Username: " + username.toLowerCase());
}
