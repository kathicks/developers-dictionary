//on click of letter
$( ".paginationLinks" ).click(function(event) {
  event.preventDefault();
  console.log($(this).text())
  var jumpToLetter = $(this).text()
  $.ajax({
    url: "/wheel",
    method: "GET",
  }).done(function(response) {
    terms = response;
    findWord = function(word) {
      for (var i = 0; i < terms.length; i++) {
        var searchable = terms[i].term.toLowerCase()
        if(searchable.charAt(0) === jumpToLetter){
          return terms[i].term
        }
      }
    };

    var rotateWheel = setInterval(function(){
         startAction();
      if ($('#term-01').text() === findWord()){
        clearInterval(rotateWheel);
      }
    }, 100);
    });
  rotateWheel();
});
