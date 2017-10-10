//Exercice : Langues
var langues = "en";

var mess1 = "Bonjour tout le monde";
var mess2 = "Hello, world";
var mess3 = "Holla, mundo";

if (langues == "fr") {console.log(mess1);}
if (langues == "en") {console.log(mess2);}
if (langues == "es") {console.log(mess3);}

//Exercice : Affichage des scores
var score = 90;

var result1 = "Bravo !, Vous avez atteint le plus haut rang: A"
var result2 = "Bien, votre score est dans la moyen, votre rang: B"
var result3 = "Attention, vous avez un des plus bas score, votre rang: C"

if (score >= 90)
{console.log(result1);}
else if (score < 90 && score > 50)
{console.log(result2);}
else
{console.log(result3);}

//Exercice : Mettre au pluriel
var sing = "Pomme"

var numb = 3

var result = "s"

if (numb > 1) {
  console.log(sing+"s");
} else {
  console.log(sing);}
