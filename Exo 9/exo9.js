var nombreEssai = 0;
var nombreMini = 20;
var nombreMaxi = 80;
var random = 0;




function randomNumber() {
  random = Math.floor(Math.random() * (nombreMaxi - nombreMini + 1)) + nombreMini;
}
  randomNumber();
  guessNumber();

function guessNumber() {
  var nombre = prompt("Choisi un nombre entre 20 et 80.")
 if (isNaN(nombre)) {
    alert("Okay ceci n'est pas un nombre Bertrand... tu peut le faire, choisi juste entre 20 et 80.")
    nombreEssai++;
    guessNumber();
  }else if (nombre <= 19 || nombre >= 81) {
    nombreEssai++;
    alert("Ont a dit, un nombre ENTRE 20 ET 80 BERTRAND !!");
    guessNumber();
  }else if (nombre > random) {
    nombreEssai++;
    alert("C'est moin !")
    guessNumber();
  }else if (nombre < random) {
    nombreEssai++;
    alert("C'est plus")
    guessNumber();
  }else if (nombre == random) {
    alert("Bravo !! tu a trouver le JustePrix en seulement "+nombreEssai+" coups")

  }
}





















/*

var nombreEssai = 0;
var nombreMini = 20;
var nombreMaxi = 80;
var random = 0;
var message = ["C'est plus !", "C'est moin !", "Bravo tu a trouvé en " +nombreEssai+ " coups"]
var nan = "Tu doit choisir entre 20 et 80 !! (c'est pas compliqué, c'est marquer au début du jeu...)";



 function randomNumber() {
  random= Math.floor(Math.random() * (nombreMaxi - nombreMini + 1)) + nombreMini;
}
  randomNumber();
function guessNumber() {
  var nan = "Tu doit choisir entre 20 et 80 !! (c'est pas compliqué, c'est marquer au début du jeu...)";
  var nombre = prompt("Choisi un nombre compris entre 20 et 80.")
  if (nombre < random) {
    alert(message[0]);
    nombreEssai ++;
    guessNumber()

  }  else if (nombre > random) {
    alert(message[1])
    nombreEssai ++;
    guessNumber()

  } else if (nombre <= 19) {
    alert(nan);

  } else if(nombre === random); {
    alert(message[2])

}
}
guessNumber();
*/
