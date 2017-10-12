//Exercice : Pair et impair (for)
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i + " est pair");

    } else{
      console.log(i + " est impaire");
    }
}

//Exercice : Pair et impair (while)
/*
var i = 0

while ( i <= 20 ){
  if ( i % 2 == 0) {
    console.log( i + " est pair");
  } else {
    console.log( i + " est impaire");
  }
  i++
}
*/

//Exercice : Multiplication Tables
for (var j = 0; j <= 10; j++) {
  console.log((j +" * 9 = ") + (j * 9))
}

//Exercice : assigner des grades
for (var k = 0; k <= 100; k++) {
  if (k >= 90) {
    console.log(k + (" Vous avez le grade A"));
  } else if (k >= 80 && k < 90) {
    console.log(k + (" Vous avez le grade B"));
  } else if (k >= 70 && k < 80) {
    console.log(k + (" Vous avez le grade C"));
  } else if (k >= 65 && k < 70) {
    console.log(k + (" Vous avez le grade D"));
  } else
    console.log(k + (" Vous avez le grade F"));
}

//Exercice : pyramide

var etoile = "";
var size = 4;
for(var i=0; i<=size; i++)
{
  etoile += "*";
  console.log(etoile);
}
