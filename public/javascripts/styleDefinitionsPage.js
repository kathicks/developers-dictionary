window.sr = ScrollReveal();
    sr.reveal('.definitions');
    var bgcolour = sessionStorage.getItem("bgcolour");
window.onload = function(){
      $(".jumbotron").css("background-color" , bgcolour)
      $(".source").css("color" , bgcolour)
      $(".downvote").css("color" , bgcolour)
      $(".upvote").css("color" , bgcolour)
      $(".rating").css("color" , bgcolour)
    }
