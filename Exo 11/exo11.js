var req = new XMLHttpRequest();
req.open('get', 'data.json', true);
req.send();
req.onload = function (event) {
  var data = req.responseText;
  data = JSON.parse(data);


  data.forEach(function(event) {
    var score = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    event.score = score;
    return event;
});
console.log(data);
}
/*
data.sort(function (event, event0){
  return event.score - event0.score

});

var tab1 = [];
var tab2 = [];
var tab3 = [];

data.forEach(function(event)){
  if (event.score > 750) {
    tab1.push(event)
  } else if (event.score < 500) {
    tab2.push(event)
  } else
    tab3.push(event.score)
});
  console.log(data);
}
*/
