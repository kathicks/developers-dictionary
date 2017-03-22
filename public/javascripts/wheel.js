window.onload = function() {

  var colours = ["#F9C00C", "#03A9F4", "#9C56BB", "#FF5722", "#FF4081"];

  var svg = document.getElementById("svg-menu");

  var term1 = document.getElementById("term-09");
  var term2 = document.getElementById("term-08");
  var term3 = document.getElementById("term-07");
  var term4 = document.getElementById("term-06");
  var term5 = document.getElementById("term-05");
  var term6 = document.getElementById("term-04");
  var term7 = document.getElementById("term-03");
  var term8 = document.getElementById("term-02");
  var term9 = document.getElementById("term-01");

  var summ1 = document.getElementById("summary-9");
  var summ2 = document.getElementById("summary-8");
  var summ3 = document.getElementById("summary-7");
  var summ4 = document.getElementById("summary-6");
  var summ5 = document.getElementById("summary-5");
  var summ6 = document.getElementById("summary-4");
  var summ7 = document.getElementById("summary-3");
  var summ8 = document.getElementById("summary-2");
  var summ9 = document.getElementById("summary-1");

  var link1 = document.getElementById("item-9");
  var link2 = document.getElementById("item-8");
  var link3 = document.getElementById("item-7");
  var link4 = document.getElementById("item-6");
  var link5 = document.getElementById("item-5");
  var link6 = document.getElementById("item-4");
  var link7 = document.getElementById("item-3");
  var link8 = document.getElementById("item-2");
  var link9 = document.getElementById("item-1");

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
      if (index0 < terms.length - 1) {
        index0 = index0 + 1;
      }
      else {
        index0 = 0;
      }
      term1.textContent = outputTermString(index0);
      term1.setAttribute("fill", outputColour(index0));
      summ1.textContent = outputDefString(index0);
      link1.setAttribute("xlink:href", outputShowLink(index0));
    };

    updateInnerRightHTML2 = function() {
      if (index1 < terms.length - 1) {
        index1 = index1 + 1;
      }
      else {
        index1 = 0;
      }
      term2.textContent = outputTermString(index1);
      term2.setAttribute("fill", outputColour(index1));
      summ2.textContent = outputDefString(index1);
      link2.setAttribute("xlink:href", outputShowLink(index1));
    };

    updateInnerRightHTML3 = function() {
      if (index2 < terms.length - 1) {
        index2 = index2 + 1;
      }
      else {
        index2 = 0;
      }
      term3.textContent = outputTermString(index2);
      term3.setAttribute("fill", outputColour(index2));
      summ3.textContent = outputDefString(index2);
      link3.setAttribute("xlink:href", outputShowLink(index2));
    };

    updateInnerRightHTML4 = function() {
      if (index3 < terms.length - 1) {
        index3 = index3 + 1;
      }
      else {
        index3 = 0;
      }
      term4.textContent = outputTermString(index3);
      term4.setAttribute("fill", outputColour(index3));
      summ4.textContent = outputDefString(index3);
      link4.setAttribute("xlink:href", outputShowLink(index3));
    };

    updateInnerRightHTML5 = function() {
      if (index4 < terms.length - 1) {
        index4 = index4 + 1;
      }
      else {
        index4 = 0;
      }
      term5.textContent = outputTermString(index4);
      term5.setAttribute("fill", outputColour(index4));
      summ5.textContent = outputDefString(index4);
      link5.setAttribute("xlink:href", outputShowLink(index4));
    };

    updateInnerRightHTML6 = function() {
      if (index5 < terms.length - 1) {
        index5 = index5 + 1;
      }
      else {
        index5 = 0;
      }
      term6.textContent = outputTermString(index5);
      term6.setAttribute("fill", outputColour(index5));
      summ6.textContent = outputDefString(index5);
      link6.setAttribute("xlink:href", outputShowLink(index5));
    };

    updateInnerRightHTML7 = function() {
      if (index6 < terms.length - 1) {
        index6 = index6 + 1;
      }
      else {
        index6 = 0;
      }
      term7.textContent = outputTermString(index6);
      term7.setAttribute("fill", outputColour(index6));
      summ7.textContent = outputDefString(index6);
      link7.setAttribute("xlink:href", outputShowLink(index6));
    };

    updateInnerRightHTML8 = function() {
      if (index7 < terms.length - 1) {
        index7 = index7 + 1;
      }
      else {
        index7 = 0;
      }
      term8.textContent = outputTermString(index7);
      term8.setAttribute("fill", outputColour(index7));
      summ8.textContent = outputDefString(index7);
      link8.setAttribute("xlink:href", outputShowLink(index7));
    };

    updateInnerRightHTML9 = function() {
      if (index8 < terms.length - 1) {
        index8 = index8 + 1;
      }
      else {
        index8 = 0;
      }
      term9.textContent = outputTermString(index8);
      term9.setAttribute("fill", outputColour(index8));
      summ9.textContent = outputDefString(index8);
      link9.setAttribute("xlink:href", outputShowLink(index8));
    };

    updateInnerLeftHTML1 = function() {
      if (index0 === 0) {
        index0 = terms.length - 1;
      }
      else {
        index0 = index0 - 1;
      }
      term1.textContent = outputTermString(index0);
      term1.setAttribute("fill", outputColour(index0));
      summ1.textContent = outputDefString(index0);
      link1.setAttribute("xlink:href", outputShowLink(index0));
    };

    updateInnerLeftHTML2 = function() {
      if (index1 === 0) {
        index1 = terms.length - 1;
      }
      else {
        index1 = index1 - 1;
      }
      term2.textContent = outputTermString(index1);
      term2.setAttribute("fill", outputColour(index1));
      summ2.textContent = outputDefString(index1);
      link2.setAttribute("xlink:href", outputShowLink(index1));
    };

    updateInnerLeftHTML3 = function() {
      if (index2 === 0) {
        index2 = terms.length - 1;
      }
      else {
        index2 = index2 - 1;
      }
      term3.textContent = outputTermString(index2);
      term3.setAttribute("fill", outputColour(index2));
      summ3.textContent = outputDefString(index2);
      link3.setAttribute("xlink:href", outputShowLink(index2));
    };

    updateInnerLeftHTML4 = function() {
      if (index3 === 0) {
        index3 = terms.length - 1;
      }
      else {
        index3 = index3 - 1;
      }
      term4.textContent = outputTermString(index3);
      term4.setAttribute("fill", outputColour(index3));
      summ4.textContent = outputDefString(index3);
      link4.setAttribute("xlink:href", outputShowLink(index3));
    };

    updateInnerLeftHTML5 = function() {
      if (index4 === 0) {
        index4 = terms.length - 1;
      }
      else {
        index4 = index4 - 1;
      }
      term5.textContent = outputTermString(index4);
      term5.setAttribute("fill", outputColour(index4));
      summ5.textContent = outputDefString(index4);
      link5.setAttribute("xlink:href", outputShowLink(index4));
    };

    updateInnerLeftHTML6 = function() {
      if (index5 === 0) {
        index5 = terms.length - 1;
      }
      else {
        index5 = index5 - 1;
      }
      term6.textContent = outputTermString(index5);
      term6.setAttribute("fill", outputColour(index5));
      summ6.textContent = outputDefString(index5);
      link6.setAttribute("xlink:href", outputShowLink(index5));
    };

    updateInnerLeftHTML7 = function() {
      if (index6 === 0) {
        index6 = terms.length - 1;
      }
      else {
        index6 = index6 - 1;
      }
      term7.textContent = outputTermString(index6);
      term7.setAttribute("fill", outputColour(index6));
      summ7.textContent = outputDefString(index6);
      link7.setAttribute("xlink:href", outputShowLink(index6));
    };

    updateInnerLeftHTML8 = function() {
      if (index7 === 0) {
        index7 = terms.length - 1;
      }
      else {
        index7 = index7 - 1;
      }
      term8.textContent = outputTermString(index7);
      term8.setAttribute("fill", outputColour(index7));
      summ8.textContent = outputDefString(index7);
      link8.setAttribute("xlink:href", outputShowLink(index7));
    };

    updateInnerLeftHTML9 = function() {
      if (index8 === 0) {
        index8 = terms.length - 1;
      }
      else {
        index8 = index8 - 1;
      }
      term9.textContent = outputTermString(index8);
      term9.setAttribute("fill", outputColour(index8));
      summ9.textContent = outputDefString(index8);
      link9.setAttribute("xlink:href", outputShowLink(index8));
    };

  startRight = function(){
    updateInnerLeftHTML1();
    updateInnerLeftHTML2();
    updateInnerLeftHTML3();
    updateInnerLeftHTML4();
    updateInnerLeftHTML5();
    updateInnerLeftHTML6();
    updateInnerLeftHTML7();
    updateInnerLeftHTML8();
    updateInnerLeftHTML9();
  }

  startLeft = function(){
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
};

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
  };
};

document.body.onclick = function(event) {
  bgcolour = ($(event.target.getAttribute('xlink:href')).children(".term")[0].attributes.fill.value);
  sessionStorage.setItem("bgcolour", bgcolour);
}
