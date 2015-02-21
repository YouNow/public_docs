$( document ).ready(function() {
  $("h2").each(function(i, h2){
    $("#sidebar").append("<div onclick="scrollTo(i)">"+$(h2).text()+"</div>");
  });
});
function scrollTo(i) {
  $('html,body').animate({
    $($("h2")[i]).offset().top
  }, 1000);
}
