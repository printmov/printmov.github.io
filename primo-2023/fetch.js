$(window).on('load', function() {

  fetchCharacters();

});

var characters;

function fetchCharacters() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  $.getJSON("characters.json", function(json) {
    characters = json;
    console.log(json);
    fetchDate();
  });
}

function fetchDate() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  $.getJSON("message-database.json", function(json) {
    console.log(json[day + '-' + month]);
  });
}
