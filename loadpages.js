$(function(){
  var sidebarlist = $(".list");
  
  $('#content').load('aboutme.html');
  
  $( "#aboutme" ).click(function() {
    $('#content').load('aboutme.html');
  });
  $( "#skills" ).click(function() {
    $('#content').load('skills.html');
  });
  $( "#experience" ).click(function() {
    $('#content').load('experience.html');
  });
  $( ".item" ).click(function() {
    sidebarlist.hide();
  });
  $( ".menubutton" ).click(function() {
    sidebarlist.toggle();
  });
}
);