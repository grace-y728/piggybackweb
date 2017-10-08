$( document ).ready(function() {

  //initialize
  $( ".cross" ).hide();
  $( ".menu" ).hide();

  //display menu
  $(".hamburger").click(function () {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  //close menu
  $(".cross").click(function (){
    $(".menu").slideToggle("slow", function(){
      $(".hamburger").show();
      $(".cross").hide();
    })

  });

});
