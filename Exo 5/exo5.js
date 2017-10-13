//Exercice : addition
var tableaux = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var resultat = 0;

for (var i = 0; i < tableaux.length; i++) {
  console.log(resultat += tableaux[i]);
}

//Vos meilleurs choix
var acteur = ["Edward Norton is number 1", "Bruce Willis is number 2", "Jackie Chan is number 3"]

for (var i = 0; i < acteur.length; i++) {
  acteur[0] = "Edward Norton est numéro 1"
  acteur[1] = "Bruce Willis est numéro 2"
  acteur[2] = "Jackie Chan est numéro 3"
  console.log(acteur[i]);
}

//Exercice : clone
var nintendo = ["Mario", "Luigi", "Peach"]
for (var i = 0; i < nintendo.length; i++) {
console.log(nintendo[i]);}

var sliced = nintendo.slice(0, 3);
sliced.push("Bowser")
for (var i = 0; i < sliced.length; i++) {
console.log(sliced[i]);
}
