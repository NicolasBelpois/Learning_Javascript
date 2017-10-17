//Exercice : PNJ (Personnage non-joueur)
function showPnj() {
let pnj = {
  name : "José",
  age : 58,
  item_to_give : ["Un quignon de pain", "Un boutton de manchette", "Une encyclopédie des plus belles photos de NationalGéographie traduite pour les aveugles", "Trois chatons morts", "Une sacoche remplis de crottes de lapin sèchées, roulées dans du sucre roux", ],
};
  for (i in pnj) {
    console.log(pnj[i]);
  }
}
  function giveItem() {
  var item_to_give = ["Un quignon de pain", "Un boutton de manchette", "Une encyclopédie des plus belles photos de NationalGéographie traduite pour les aveugles", "Trois chatons morts", "Une sacoche remplis de crottes de lapin sèchées, roulées dans du sucre roux", ]
  var result ="";
  for (var i = 0; i < item_to_give.length; i++) {
    result = item_to_give[Math.floor(Math.random()* item_to_give.length)]
  }
  alert(result);
  }



  //Exercice : Shop
let shop = [{
  name: "Epée de soldat",
  physic: 5,
  magic: 0,
  minLevel: 5,
  available: true,
},
  {
  name: "Hache de soldat",
  physic: 13,
  magic: 0,
  minLevel: 10,
  available: true,
},
  {
  name: "Masse de prêtre",
  physic: 5,
  magic: 5,
  minLevel: 15,
  available: false,
},
  {
  name: "Arc de soldat",
  physic: 7,
  magic: 0,
  minLevel: 8,
  available: true,
},
  {
  name: "Baton du Destin",
  physic: 0,
  magic: 15,
  minLevel: 18,
  available: true,
},
  {
  name: "Bouclier de soldat",
  physic: 0,
  magic: 0,
  minLevel: 3,
  available: true,
},
  {
  name: "Cimeter de pirate",
  physic: 20,
  magic: 0,
  minLevel: 20,
  available: false,
}];

function showShop() {
  for(i in shop)
  console.log(shop[i]);
}

function showAvailable() {
  for(i in shop)
  if (shop[i].available == true) {
    console.log(shop[i]);
  }
}

function showLevel() {
  for(i in shop)
  if (shop[i].minLevel >= 10) {
    console.log(shop[i]);
  }
}

//Exercice : Personnage

let mainCaracter = {
  name : "Nicoloscopie",
  level : 15,
  life : 100,
  weaponStat : {
  name :"Hache de soldat",
  dammage : 13,
  }
}
  function attack() {
    console.log(mainCaracter.name + " attaque avec " + mainCaracter.weaponStat.name + " et inflige, " + mainCaracter.level*mainCaracter.weaponStat.dammage + " dommages.");
  }

  //Bonus :Exercice : Adversaire
  let mainPersonnage = {
    nom: "Chevalier Blanc",
    level: 3,
    vie: 100,
    arme: {
      nom: "Epée Purificatrice",
      dommage: 5,
    }
  }
  let ennemiPersonnage = {
    nom: "Chevalier Noir",
    level: 3,
    vie: 100,
    arme: {
      nom: "Epée Destructrice",
      dommage: 4,
    }
  }
  var dommageDone = mainPersonnage.level*mainPersonnage.arme.dommage;
    function attaquer() {
      ennemiPersonnage.vie = (100 - dommageDone);
      console.log(mainPersonnage.nom + " attaque " + ennemiPersonnage.nom + " avec " + mainPersonnage.arme.nom + " et inflige " + dommageDone + " de dégats.");
      console.log(ennemiPersonnage.nom + " est maintenant à " + ennemiPersonnage.vie + " points de vie.");
}
