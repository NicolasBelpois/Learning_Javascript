//Exercice : PNJ (Personnage non-joueur)
function showpnj() {
let pnj = {
  name : "José",
  age : 58,
  item_to_give : ["Un quignon de pain", "Un boutton de manchette", "Une encyclopédie des plus belles photos de NationalGéographie traduite pour les aveugles", "Trois chatons morts", "Une sacoche remplis de crottes de lapin sèchées, roulées dans du sucre roux", ],
};
  for (let key in pnj) {
    console.log( pnj [key] );
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


function showInv() {
  console.log(shop);
}
function showAvailble() {
  console.log(shop.name);
}
