$(document).ready(function(){
  var showChar = 100;
var c
var h
$('.more').each(function() {
  var content = $(this).html();
  if(content.length > showChar) {
    var c = content.substr(0, showChar);
    var h = content.substr(showChar-1, content.length - showChar);
  }
  $(this).html(c);


});



  $(".morelink").click(function(){
    if($(this).hasClass("more")) {
      $(this).html(c + h);
      $(this).removeClass("more");
    } else {
      $(this).addClass("more");
    }
    $(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
  });
});
