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
    if ($( window ).width() < 600) {
      sidebarlist.hide();
    }
  });
  
  $( ".menubutton" ).click(function() {
    if ($( window ).width() < 600) {
      sidebarlist.toggle();
    }
  });
  
  $(window).resize(function(){
    
    var width = $(window).width();
    
    if (width > 600){
      
      sidebarlist.show();
      
    }else{
      sidebarlist.hide();
    }
    
  });
}
);