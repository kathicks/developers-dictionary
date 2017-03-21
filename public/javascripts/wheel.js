window.onload = (function() {

  var colours = ["#F9C00C", "#03A9F4", "#9C56BB", "#FF5722", "#FF4081"];

  var svg = document.getElementById("svg-menu");

  var term1 = svg.getElementById("term-01");
  var term2 = svg.getElementById("term-02");
  var term3 = svg.getElementById("term-03");
  var term4 = svg.getElementById("term-04");
  var term5 = svg.getElementById("term-05");
  var term6 = svg.getElementById("term-06");
  var term7 = svg.getElementById("term-07");
  var term8 = svg.getElementById("term-08");
  var term9 = svg.getElementById("term-09");

  var summ1 = svg.getElementById("summary-1");
  var summ2 = svg.getElementById("summary-2");
  var summ3 = svg.getElementById("summary-3");
  var summ4 = svg.getElementById("summary-4");
  var summ5 = svg.getElementById("summary-5");
  var summ6 = svg.getElementById("summary-6");
  var summ7 = svg.getElementById("summary-7");
  var summ8 = svg.getElementById("summary-8");
  var summ9 = svg.getElementById("summary-9");

  var link1 = svg.getElementById("item-1");
  var link2 = svg.getElementById("item-2");
  var link3 = svg.getElementById("item-3");
  var link4 = svg.getElementById("item-4");
  var link5 = svg.getElementById("item-5");
  var link6 = svg.getElementById("item-6");
  var link7 = svg.getElementById("item-7");
  var link8 = svg.getElementById("item-8");
  var link9 = svg.getElementById("item-9");

  var terms;

  var index0 = 0;
  var index1 = 1;
  var index2 = 2;
  var index3 = 3;
  var index4 = 4;
  var index5 = 5;
  var index6 = 6;
  var index7 = 7;
  var index8 = 8;

  $.ajax({
    url: "/wheel",
    method: "GET",
  }).done(function(response) {

    terms = response;

    }).then(function() {

      outputTermString = function(index){
        var string = terms[index].term;
        return string;
      };
      outputDefString = function(index){
        var string = terms[index].summary.split('').slice(0, 40).join("") + '...';
        return string;
      };
      outputShowLink = function(index){
        var id = terms[index]._id;
        return "/show/" + id;
      };
      outputColour = function(index){
        var colour = colours[index % colours.length];
        return colour;
      };

    updateInnerRightHTML1 = function() {
      term1.textContent = outputTermString(index0);
      term1.setAttribute("fill", outputColour(index0));
      summ1.textContent = outputDefString(index0);
      link1.setAttribute("xlink:href", outputShowLink(index0));
      if (index0 < terms.length - 1) {
        index0 = index0 + 1;
      }
      else {
        index0 = 0;
      }
    };

    updateInnerRightHTML2 = function() {
      term2.textContent = outputTermString(index1);
      term2.setAttribute("fill", outputColour(index1));
      summ2.textContent = outputDefString(index1);
      link2.setAttribute("xlink:href", outputShowLink(index1));
      if (index1 < terms.length - 1) {
        index1 = index1 + 1;
      }
      else {
        index1 = 0;
      }
    };

    updateInnerRightHTML3 = function() {
      term3.textContent = outputTermString(index2);
      term3.setAttribute("fill", outputColour(index2));
      summ3.textContent = outputDefString(index2);
      link3.setAttribute("xlink:href", outputShowLink(index2));
      if (index2 < terms.length - 1) {
        index2 = index2 + 1;
      }
      else {
        index2 = 0;
      }
    };

    updateInnerRightHTML4 = function() {
      term4.textContent = outputTermString(index3);
      term4.setAttribute("fill", outputColour(index3));
      summ4.textContent = outputDefString(index3);
      link4.setAttribute("xlink:href", outputShowLink(index3));
      if (index3 < terms.length - 1) {
        index3 = index3 + 1;
      }
      else {
        index3 = 0;
      }
    };

    updateInnerRightHTML5 = function() {
      term5.textContent = outputTermString(index4);
      term5.setAttribute("fill", outputColour(index4));
      summ5.textContent = outputDefString(index4);
      link5.setAttribute("xlink:href", outputShowLink(index4));
      if (index4 < terms.length - 1) {
        index4 = index4 + 1;
      }
      else {
        index4 = 0;
      }
    };

    updateInnerRightHTML6 = function() {
      term6.textContent = outputTermString(index5);
      term6.setAttribute("fill", outputColour(index5));
      summ6.textContent = outputDefString(index5);
      link6.setAttribute("xlink:href", outputShowLink(index5));
      if (index5 < terms.length - 1) {
        index5 = index5 + 1;
      }
      else {
        index5 = 0;
      }
    };

    updateInnerRightHTML7 = function() {
      term7.textContent = outputTermString(index6);
      term7.setAttribute("fill", outputColour(index6));
      summ7.textContent = outputDefString(index6);
      link7.setAttribute("xlink:href", outputShowLink(index6));
      if (index6 < terms.length - 1) {
        index6 = index6 + 1;
      }
      else {
        index6 = 0;
      }
    };

    updateInnerRightHTML8 = function() {
      term8.textContent = outputTermString(index7);
      term8.setAttribute("fill", outputColour(index7));
      summ8.textContent = outputDefString(index7);
      link8.setAttribute("xlink:href", outputShowLink(index7));
      if (index7 < terms.length - 1) {
        index7 = index7 + 1;
      }
      else {
        index7 = 0;
      }
    };

    updateInnerRightHTML9 = function() {
      term9.textContent = outputTermString(index8);
      term9.setAttribute("fill", outputColour(index8));
      summ9.textContent = outputDefString(index8);
      link9.setAttribute("xlink:href", outputShowLink(index8));
      if (index8 < terms.length - 1) {
        index8 = index8 + 1;
      }
      else {
        index8 = 0;
      }
    };

    updateInnerLeftHTML1 = function() {
      term1.textContent = outputTermString(index0);
      term1.setAttribute("fill", outputColour(index0));
      summ1.textContent = outputDefString(index0);
      link1.setAttribute("xlink:href", outputShowLink(index0));
      if (index0 === 0) {
        index0 = terms.length - 1;
      }
      else {
        index0 = index0 - 1;
      }
    };

    updateInnerLeftHTML2 = function() {
      term2.textContent = outputTermString(index1);
      term2.setAttribute("fill", outputColour(index1));
      summ2.textContent = outputDefString(index1);
      link2.setAttribute("xlink:href", outputShowLink(index1));
      if (index1 === 0) {
        index1 = terms.length - 1;
      }
      else {
        index1 = index1 - 1;
      }
    };

    updateInnerLeftHTML3 = function() {
      term3.textContent = outputTermString(index2);
      term3.setAttribute("fill", outputColour(index2));
      summ3.textContent = outputDefString(index2);
      link3.setAttribute("xlink:href", outputShowLink(index2));
      if (index2 === 0) {
        index2 = terms.length - 1;
      }
      else {
        index2 = index2 - 1;
      }
    };

    updateInnerLeftHTML4 = function() {
      term4.textContent = outputTermString(index3);
      term4.setAttribute("fill", outputColour(index3));
      summ4.textContent = outputDefString(index3);
      link4.setAttribute("xlink:href", outputShowLink(index3));
      if (index3 === 0) {
        index3 = terms.length - 1;
      }
      else {
        index3 = index3 - 1;
      }
    };

    updateInnerLeftHTML5 = function() {
      term5.textContent = outputTermString(index4);
      term5.setAttribute("fill", outputColour(index4));
      summ5.textContent = outputDefString(index4);
      link5.setAttribute("xlink:href", outputShowLink(index4));
      if (index4 === 0) {
        index4 = terms.length - 1;
      }
      else {
        index4 = index4 - 1;
      }
    };

    updateInnerLeftHTML6 = function() {
      term6.textContent = outputTermString(index5);
      term6.setAttribute("fill", outputColour(index5));
      summ6.textContent = outputDefString(index5);
      link6.setAttribute("xlink:href", outputShowLink(index5));
      if (index5 === 0) {
        index5 = terms.length - 1;
      }
      else {
        index5 = index5 - 1;
      }
    };

    updateInnerLeftHTML7 = function() {
      term7.textContent = outputTermString(index6);
      term7.setAttribute("fill", outputColour(index6));
      summ7.textContent = outputDefString(index6);
      link7.setAttribute("xlink:href", outputShowLink(index6));
      if (index6 === 0) {
        index6 = terms.length - 1;
      }
      else {
        index6 = index6 - 1;
      }
    };

    updateInnerLeftHTML8 = function() {
      term8.textContent = outputTermString(index7);
      term8.setAttribute("fill", outputColour(index7));
      summ8.textContent = outputDefString(index7);
      link8.setAttribute("xlink:href", outputShowLink(index7));
      if (index7 === 0) {
        index7 = terms.length - 1;
      }
      else {
        index7 = index7 - 1;
      }
    };

    updateInnerLeftHTML9 = function() {
      term9.textContent = outputTermString(index8);
      term9.setAttribute("fill", outputColour(index8));
      summ9.textContent = outputDefString(index8);
      link9.setAttribute("xlink:href", outputShowLink(index8));
      if (index8 === 0) {
        index8 = terms.length - 1;
      }
      else {
        index8 = index8 - 1;
      }
    };

  startLeft = function(){
    updateInnerLeftHTML1();
    updateInnerLeftHTML2();
    updateInnerLeftHTML3();
    updateInnerLeftHTML4();
    updateInnerLeftHTML5();
    updateInnerLeftHTML6();
    updateInnerLeftHTML7();
    updateInnerLeftHTML8();
    updateInnerLeftHTML9();
  };

  startRight = function(){
    updateInnerRightHTML1();
    updateInnerRightHTML2();
    updateInnerRightHTML3();
    updateInnerRightHTML4();
    updateInnerRightHTML5();
    updateInnerRightHTML6();
    updateInnerRightHTML7();
    updateInnerRightHTML8();
    updateInnerRightHTML9();
  };

  startRight();
  startLeft();
  });
});

$(".tag").on('change', 'select', function(event) {
    event.preventDefault();
});

document.body.onkeydown = function(event){
  event = event || window.event;
  var keycode = event.charCode || event.keyCode;
  if(keycode === 37 || keycode === 40 ){
    startLeft();
  } else if(keycode === 39 || keycode === 38){
    startRight();
  }
}
