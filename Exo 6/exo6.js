//Exercice : jeu du pendu


var Pendu = ["B","O","N","J","O","U","R"];
var Devine =  ["","","","","","","",]

function trouveLettre() {
 var message =prompt("Entrer une lettre")
 message = message.toUpperCase();
 console.log(message );
 if (message.length != 1) {
   alert("Oups, vous avez rentrer "+ message.length +" lettres dans la selection.")

 }
 else {
   if (Pendu.indexOf(message) == -1) {
     console.log('oups');
   }else {
     console.log('trouvé');

     for (var i = 0; i < Pendu.length; i++) {
       if (message == Pendu[i]) {
          Devine.splice(i,1,message);

        }
      }
    }
  }
  if
}
trouveLettre();




/*
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
*/
