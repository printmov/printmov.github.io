$(window).on('load', function() {

  $(document).click(function() {
    switchNote();
  });

});

var isShowingNote = false;

function switchNote() {
  isShowingNote = !isShowingNote;
  if(isShowingNote) {
    $(".full-note").css("opacity", "1");
  }
  else {
    $(".full-note").css("opacity", "0");
  }
}
