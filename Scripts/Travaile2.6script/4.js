function cree(){
  //les variable pour le text
  var premier = document.getElementById("un").value;
  var deuxiem = document.getElementById("deux").value;
  var troisem = document.getElementById("trois").value;
  var quatriem = document.getElementById("quatre").value;
  var cimquiem = document.getElementById("cinq").value;
  var sixiem = document.getElementById("six").value;
  var septiem = document.getElementById("sept").value;
  var huitiem = document.getElementById("huit").value;
  var neufiem = document.getElementById("neuf").value;
  var dixiem = document.getElementById("dix").value;
  var onzeieme = document.getElementById("onze").value;
  //message et text
  var affiche = document.getElementById("dio");

  //cree text
  var messagge = "J’adore l’été !  Chaque jour, quand je suis en vacances, je me réveille, je mets mes " + premier + ", je me rend à la cuisine et je mange " + deuxiem + " pour déjeuner.  Ensuite, mon activité préféré est de " + troisem + " avec mon ami " + quatriem + ".  À 14h, je dîne.  Je mange des " + cimquiem +" "+ sixiem + ".  Durant l’après-midi, j’aime me rendre au parc et de " + septiem + " " + huitiem + ".  En soirée, je mange toujours du " + neufiem + " pour le souper.  Finalement, je me couche et je rêve de " + dixiem + ".  Quel été " + onzeieme + " !";
  affiche.innerHTML = messagge;
  
}
