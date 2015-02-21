$( document ).ready(function() {
  $("h2").each(function(i, h2){
    $("#sidebar").append("<div>"+$(h2).text()+"</div>");
  });
});
