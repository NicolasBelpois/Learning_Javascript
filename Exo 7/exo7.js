//Exercice : Minimum et maximum
var x = [7, 5, -12, 6, 32, 18, 14, -2]
var y = Math.min(...x);

var w = 7; c = 5; v = -12; b = 6; n = 32; q = 18; s = 14; d = -2;
var r = Math.min(w, c, v, b, n, q, s, d,)

var t = [-3, 9, 21, 36, 27, 54, 17, 35]
var i = Math.max(...t);

var add = (y + i);

//Exercice : Aléatoire 1
var floatBateau = (10.4);
var couleBateau = Math.floor(floatBateau)
var voleBateau = Math.ceil(floatBateau)

//Exercice : Aléatoire 2
var random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
var random2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
var random = Math.random() * (100 - 50) + 50;

//Exercice : aléatoire 3
var playerSelect = function() {
var mortal = ["Goro", "Johnny Cage", "Kano", "Liu Kang", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]
var result ="";
for (var i = 0; i < mortal.length; i++) {
  result = mortal[Math.floor(Math.random()* mortal.length)]
}
alert(result);
}
playerSelect();
