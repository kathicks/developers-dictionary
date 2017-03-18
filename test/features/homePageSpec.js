process.env.NODE_ENV = "test";

var chai = require('chai');
var chaiHttp = require('chai-http');
var http = require('http');
var assert = require('assert');
var Browser = require('zombie');

var server = require('../../app');

var monk = require('monk');
var db_test = monk('localhost:27017/developers-dictionary-test');

var should = chai.should();
var expect = chai.expect();


chai.use(chaiHttp);

describe('index page', function() {

  var term = "AJAX";
  var summary = "Asynchronous JavaScript and XML. It is the use of the XMLHttpRequest object.";
  var definition = "Mocha is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.";
  var source = "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)";
  var termcollection = db_test.get("termcollection");

  var addingTerm = function(browser, term, summary, definition, source) {
    browser.clickLink('a#newTerm');
    browser.fill('term', term);
    browser.fill('summary', summary);
  };


  before(function(){
    this.server = http.createServer(server).listen(8000);
    this.browser = new Browser({
      site: 'http://localhost:8000'
    });

  });


  beforeEach(function(done) {
    this.browser.visit('/', done);
    termcollection.remove({})
  });

  it('should have a navbar', function() {
    assert.equal(this.browser.text('a.navbar-brand'), 'Developer\'s Dictionary');
    assert.equal(this.browser.text('a#newTerm'), 'Add Entry');
  });

  it('should allow to add a new term', function(done) {
    var browser = this.browser;
    browser.clickLink('a#newTerm');
    browser.assert.element('#addTerm');
    browser.fill('term', term);
    browser.fill('summary', summary);
    browser.pressButton('Add').then(function() {
      assert.ok(browser.success);
      assert.equal(browser.text('p#successAlert'), 'Successfully created a new term!');
    }).then(done, done);
  });

  describe("validations", function() {
    it("can't add a one letter term", function(done) {
      var browser = this.browser;
      browser.clickLink('a#newTerm');
      browser.assert.element('#addTerm');
      browser.fill('term', "A");
      browser.fill('summary', summary);
      browser.pressButton('Add').then(function() {
        assert.ok(browser.success);
        assert.equal(browser.text('p#warningAlert'), 'Must be between 2 and 30 characters long');
      }).then(done, done);
    })
    it("can't add a one letter summary", function(done) {
      var browser = this.browser;
      browser.clickLink('a#newTerm');
      browser.assert.element('#addTerm');
      browser.fill('term', term);
      browser.fill('summary', "summary");
      browser.pressButton('Add').then(function() {
        assert.ok(browser.success);
        assert.equal(browser.text('p#warningAlert'), 'Must be between 25 and 80 characters long');
      }).then(done, done);
    })
    it("can't add duplicate terms", function(done){
      termcollection.insert({"term": term, "summary": summary})
      var browser = this.browser;
      browser.clickLink('a#newTerm');
      browser.assert.element('#addTerm');
      browser.fill('term', term);
      browser.fill('summary', summary);
      browser.pressButton('Add').then(function() {
        assert.ok(browser.success);
        assert.equal(browser.text('p#warningAlert'), 'Already added to the database');
      }).then(done, done);

    })
  })

  after(function(done) {
     this.server.close(done);
   });

});
