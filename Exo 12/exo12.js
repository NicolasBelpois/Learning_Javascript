
var over = document.querySelectorAll('.hoverMe');
for (var i = 0; i < over.length; i++) {
over[i].addEventListener('mouseover', function(){
  this.style.visibility = "hidden";
});
}
  var reset = document.querySelector('.reset');

    reset.addEventListener('click', function(){
        for (var i = 0; i < over.length; i++) {
        over[i].style.visibility = 'visible';
}
  });
