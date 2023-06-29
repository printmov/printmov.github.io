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
    charactersJson = json;
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
    dateJson = json;
    console.log(json[day + '-' + month]);
    render(day + '-' + month);
  });
}

function render(dateString) {
  var dateInfo = dateJson[dateString];
  var character = charactersJson[dateInfo.character];
  var filename = character.path + character.filename + "-" + ((dateInfo.count % character.variant) + 1 ) + ".png";
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
  $(".message").text(dateInfo.message);
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getYear();
  $('<br /><br />' + dateInfo.character + "<br />" + day + '-' + month + '-' + year).appendTo('.full-note-message');
  $(".black-hide").delay(1000).fadeOut(500);
}
