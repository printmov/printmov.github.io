$(window).on('load', function() {

  fetch();

});

function fetch() {
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
