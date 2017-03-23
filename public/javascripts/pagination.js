var terms;
//on click of letter
$( ".paginationLinks" ).click(function(event) {
  event.preventDefault();

  if(!$(this).parent().hasClass('disabled')){
    var jumpToLetter = $(this).text()
    findWord = function() {
      for (var i = 0; i < terms.length; i++) {
        var searchable = terms[i].term.toLowerCase()
        if(searchable.charAt(0) === jumpToLetter){
          return terms[i].term
        }
      }
    };
    var rotateWheel = setInterval(function(){
         startLeft();
      if ($('#term-09').text() === findWord()){
        clearInterval(rotateWheel);
      }
    }, 15);
    rotateWheel;
    };
  });

$(document).ready(function(){
  $.ajax({
    url: "/show",
    method: "GET",
  }).done(function(response) {
    terms = response;
    var letterArr = [];
    terms.forEach(function(term){
      letterArr.push(term.term.charAt(0).toLowerCase());
    });
    paginationArr = $('.paginationLinks').text().split('');
    paginationArr.forEach(function(letter){
      if(!letterArr.includes(letter)){
        $('#'+letter).addClass("disabled");
      }
    });
  });
});
