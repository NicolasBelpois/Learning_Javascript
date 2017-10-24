var req = new XMLHttpRequest();
req.open('get', 'data.json', true);
req.send();
req.onload = function (event) {
  var data = req.responseText;
  data = JSON.parse(data);


  data.map(function(event) {
    var score = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    event.score = score;
    return event;
});



data.sort(function (event, event0){
  return event.score - event0.score

});

var tab1 = [];
var tab2 = [];
var tab3 = [];

data.map(function(event){
  if (event.score > 750) {
  return tab1.push(event)
  } else if (event.score < 500) {
  return tab2.push(event)
} else {
    return tab3.push(event)
  }

})
console.log(tab1);
  console.log(tab2);
    console.log(tab3);

  var tab4 = [];

  data.filter(function(event) {
    if (event.country == 'Bahrain'){
      return tab4.push(event);


    }
  })
    console.log(tab4);
    console.log(data[0]);
    console.log(data[data.length - 1]);
}
