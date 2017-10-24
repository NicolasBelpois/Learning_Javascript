//EXERCICE 1 : Manipulation de classes
var body = document.body
body.classList.remove('bg-aqua')
body.classList.add('bg-olive')

var first = document.getElementById('first-paragraph')
first.classList.remove('bg-lime')
first.classList.remove('gray')
first.classList.add('aqua')

var silver = document.getElementsByClassName('bg-silver')
  silver[0].classList.add("bg-teal")
  silver[0].classList.remove("bg-silver")


var block = document.getElementsByTagName('blockquote')
block[0].classList.add("bg-white")

//EXERCICE 2 : Selecteurs CSS
var mytable = document.querySelector('.white')
mytable.classList.add("bg-purple")

var p = document.querySelectorAll('p')
for (var i = 0; i < p.length; i++) {
  p[i].classList.add("shadow")
}

//EXERCICE 3
var pre = document.querySelectorAll('pre');
for (var i = 0; i < pre.length; i++) {

pre[i].style.color = "red"
pre[i].style.backgroundColor = "green"
pre[i].style.borderTop = "3px solid red"
pre[i].style.borderBottom ="3px solid red"
}

var h3 = document.querySelector('h3')
h3.innerHTML = "<em>Itelic title ! yeah !</em>"

var h2 = document.querySelector('h2')
h2.style.color = "black"
h2.innerText = "<strong>HTML doens't work !</strong>"

//EXERCICE 4 : Création d'éléments

var Select_ul = document.querySelector('ul');
var New_li = document.createElement('li');
New_li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>"

Select_ul.appendChild(New_li);
var a1 = document.querySelector("li a");
a1.style.color = "yellow"

//EXERCICE 4 : Création et suppression de plusieurs éléments
var Select_ol = document.querySelector('ol');
while (Select_ol.firstChild) {
  Select_ol.removeChild(Select_ol.firstChild);
}

var Tab = ["Silent Teacher","Code Monkey", "CodeCombat"];

Tab.forEach(function(e, index){
  var li = document.createElement('li');
  li.innerHTML = e
  Tab[index] = li;
  Select_ol.appendChild(li) })
