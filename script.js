$( document ).ready(function() {

  //initialize
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  window.resizeto(2500, 250);

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

function goToHome(){
  window.location="index.html";
}

function goToProfile(){
  window.location="test.html";
}

function goToSettings(){
  window.location="test.html";
}

function goToFAQ(){
  window.location="test.html";
}

function goToCart(){
  window.location="test.html";
}

function goToFind(){
  window.location="test.html";
}
