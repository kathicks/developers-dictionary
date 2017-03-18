process.env.NODE_ENV = "test";

var chai = require('chai');
var http = require('http');
var assert = require('assert');
var Browser = require('zombie');

var server = require('../../app');

var mongo  = require('mongodb');
var monk   = require('monk');
var should = chai.should();

describe('Developers Dictionary', function(){

  var db_test;
  var terms;
  var data;
  var definition;

  beforeEach(function() {
    db_test = monk('localhost:27017/developers-dictionary-test');
    terms = db_test.get('termcollection');

    data = {
      "term" : "Angular",
      "summary" : "A structural framework for dynamic web apps",
      "definitions" : [
        {
          "definition" : "It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.\r\n\r\nAngularJS is what HTML would have been, had it been designed for applications.",
          "source" : "https://docs.angularjs.org/guide/introduction",
          "rating" : 0
        }
      ]
    };

    definition = {
      "definition" : "AngularJS (commonly referred to as 'Angular.js') is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.",
      "source" : "https://en.wikipedia.org/wiki/AngularJS",
      "rating" : 0
    };

    this.server = http.createServer(server).listen(8000);
    this.browser = new Browser({
      site: 'http://localhost:8000'
    });
  });

  describe('Show Page', function(){

    beforeEach(function(done) {
      terms.insert(data, function(err, insertion) {
        if(err) return done(err);
        done();
      });
    });

    describe('Element', function(){
      beforeEach(function(done) {
        var self = this;
        self.browser.visit('/', function(err){
          if (err) return done(err);
          console.log("working");
          self.browser.clickLink('a.showPage', function(){
            // console.log("working");
          });
          done();
        });
      });

      it('should have a title', function(){
        // should.exists(this.browser.text('h2', 'What is Angular?'));
      });
    });
  });

//
//    before(function(done) {
//        this.browser.visit('/', done);
//    });
//
//
//   it('should have the title', function() {
//       assert.equal(this.browser.text('h2, 'term-title), 'Developer\'s Dictionary');
//   });
});
