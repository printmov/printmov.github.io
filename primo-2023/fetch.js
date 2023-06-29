$(window).on('load', function() {

  fetchCharacters();

});

var charactersJson;
var dateJson;

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
    dateJson = json[day + '-' + month];
    console.log(json[day + '-' + month]);
    render();
  });
}

function render() {
  var character = charactersJson[dateJson.character];
  var filename = character.path + character.filename + "-" + ((dateJson.count % character.variant) + 1 ) + ".png";
  $(".character-image").attr("src", filename);
  var bgFilename = character.path + "bg-" + (Math.floor(Math.random() * character.bg) + 1) + ".png";
  $(".background").attr("src", bgFilename);
  if(character["overlay"] > 0) {
    var overlayFilename = character.path + "overlay-" + (Math.floor(Math.random() * character.overlay) + 1) + ".png";
    $(".overlay").attr("src", overlayFilename);
  }
  else {
    $(".overlay").hide();
  }
  $(".message").text(dateJson.message);
  $(".black-hide").fadeOut(500);
}
