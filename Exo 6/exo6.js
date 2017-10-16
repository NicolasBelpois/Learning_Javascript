//Exercice : jeu du pendu


var Pendu = ["B","O","N","J","O","U","R"];
var Devine =  ["","","","","","","",]
var fin = Pendu.length;






var GuessLetter = function(){
  var lettre=prompt("Choisir une lettre");
  var correction = false;
  for (var i = 0; i < Pendu.length; i++) {
    if (lettre == Pendu[i]) {
      Devine[i] = (lettre)
      fin--;
      correction = true;

    }
   }
   if (correction) {
     alert("Bravo ! Vous avez trouvé une lettre" + "[ " + Devine + " ]");
   } else {
     alert("Dommage, mais la lettre ne ce trouve pas dans le mot.");
   }
 }

 while (fin > 0) {
  GuessLetter();
   if (fin == 0) {
    alert("Bien joué ! Tu a trouvé le mot mystère : Bonjour")
   }
 }
