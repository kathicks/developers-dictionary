// var terms = [{term: "AJAX", definition: "Annoying"}, {term: "HTML", definition: "Formats pages"}, {term: "CSS", definition: "Styles pages"}, {term: "Capybara", definition: "Big rodent"}, {term: "AJAX", definition: "Annoying"}, {term: "HTML", definition: "Formats pages"}, {term: "CSS", definition: "Styles pages SADKJFHLFAJKSLHGJKEHRGIUHWEUFhilusrhgluserhgiuhruighliu"}, {term: "Capybara", definition: "Big rodent"}, {term: "Sinatra", definition: "Web framework"}, {term: "Ruby", definition: "Programming language"}, {term: "AJAX", definition: "Annoying"}, {term: "HTML", definition: "Formats pages"}, {term: "CSS", definition: "Styles pages"}, {term: "Capybara", definition: "Big rodent"}, {term: "AJAX", definition: "Annoying"}, {term: "HTML", definition: "Formats pages"}, {term: "CSS", definition: "Styles pages SADKJFHLFAJKSLHGJKEHRGIUHWEUFhilusrhgluserhgiuhruighliu"}, {term: "Capybara", definition: "Big rodent"}, {term: "Sinatra", definition: "Web framework"}, {term: "Ruby",
// definition: "Programming language"}];

var terms = db.get('termcollection').find({});

var index1 = 0;

var svg = document.getElementById("svg-menu");
var text1 = svg.getElementById("term-01");
var text2 = svg.getElementById("term-02");
var text3 = svg.getElementById("term-03");
var text4 = svg.getElementById("term-04");
var text5 = svg.getElementById("term-05");
var text6 = svg.getElementById("term-06");
var text7 = svg.getElementById("term-07");
var text8 = svg.getElementById("term-08");
var text9 = svg.getElementById("term-09");

var def1 = svg.getElementById("Definition1");
var def2 = svg.getElementById("Definition2");
var def3 = svg.getElementById("Definition3");
var def4 = svg.getElementById("Definition4");
var def5 = svg.getElementById("Definition5");
var def6 = svg.getElementById("Definition6");
var def7 = svg.getElementById("Definition7");
var def8 = svg.getElementById("Definition8");
var def9 = svg.getElementById("Definition9");

window.onload = (function() {

});

  outputTermString = function(element, index){
    var string = terms[index].term;
    return string;
  };
  outputDefString = function(element, index){
    var string = terms[index].definition;
    return string;
  };
  updateInnerHTML1 = function(element1, element2, index) {
    element1.textContent = outputTermString(element1, index)
    element2.textContent = outputDefString(element2, index)
    if (index < terms.length -1) {
      index1 = index1 + 1;
    }
    else {
      index1 = 0
    }
  };

  doEverything = function(){updateInnerHTML1(text1, def1, index1); updateInnerHTML1(text2, def2, index1); updateInnerHTML1(text3, def3, index1); updateInnerHTML1(text4, def4, index1); updateInnerHTML1(text5, def5, index1); updateInnerHTML1(text6, def6, index1); updateInnerHTML1(text7, def7, index1); updateInnerHTML1(text8, def8, index1); updateInnerHTML1(text9, def9, index1)};
  startAction = function(){updateInnerHTML1(text1, def1, index1); updateInnerHTML1(text2, def2, index1); updateInnerHTML1(text3, def3, index1); updateInnerHTML1(text4, def4, index1); updateInnerHTML1(text5, def5, index1); updateInnerHTML1(text6, def6, index1); updateInnerHTML1(text7, def7, index1); updateInnerHTML1(text8, def8, index1); updateInnerHTML1(text9, def9, index1)};
