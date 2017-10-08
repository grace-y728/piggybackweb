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

function goToHome(){
  window.location="index.html";
}

function goToProfile(){
  window.location="profile.html";
}

function goToSettings(){
  window.location="settings.html";
}

function goToAbout(){
  window.location="test.html";
}

function goToCart(){
  window.location="shoppingcart.html";
}

function goToFind(){
  window.location="findmatch.html";
}
