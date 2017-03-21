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
      if ($('#term-01').text() === findWord()){
        clearInterval(rotateWheel);
      }
    }, 100);
    rotateWheel();
    };
  });

//DISABLE LINKS

//on page load find all first letters of terms and put into array without duplicates
//check pagination links against first letters of terms
//if letter is missing then run disable function
//disable function greys out letter in pag and doesn't allow clicking.

$(document).ready(function(){
  $.ajax({
    url: "/wheel",
    method: "GET",
  }).done(function(response) {
    terms = response;
    var letterArr = [];
    terms.forEach(function(term){
      letterArr.push(term.term.charAt(0).toLowerCase());
    });
    paginationArr = $('.paginationLinks').text().split('');
    console.log(paginationArr, letterArr);
    paginationArr.forEach(function(letter){
      if(!letterArr.includes(letter)){
        $('#'+letter).addClass("disabled")
      }
    })
  });
});
