document.getElementById('labelform').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "/savetable", true);
  http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  var aElements = [];
  $(".inputcount").each(function(indx, element){
    aElements.push({id: element.getAttribute('id'), content: element.value});
    console.log(element.getAttribute('id') + ' : ' + element.value + '\n');
  });
  console.log(aElements);
  console.log(JSON.stringify(aElements));
  //var data = JSON.stringify(aElements);
  //var data = saveElements;
  http.send(JSON.stringify(aElements));
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(' Значения в базе обновлены');
    }
  }
}, false);
