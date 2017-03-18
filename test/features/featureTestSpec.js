process.env.NODE_ENV = "test";

var express = require('express');
var app = express();
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

  var term = "AAX";
  var summary = "Asynchronous JavaScript and XML. It is the use of the XMLHttpRequest object.";
  var definition = "Mocha is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.";
  var source = "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)";

  before(function(){
    this.server = http.createServer(server).listen(8000);
    this.browser = new Browser({
      site: 'http://localhost:8000'
    });

  });


  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should have a navbar', function() {
    assert.equal(this.browser.text('a.navbar-brand'), 'Developer\'s Dictionary');
    assert.equal(this.browser.text('a#newTerm'), 'Add Entry');
  });

  it('should allow to add a new term', function(done) {
    var browser = this.browser;
    assert.ok(browser.success);
    browser.clickLink('a#newTerm');
    browser.assert.element('#addTerm');
    browser.fill('term', term);
    browser.fill('summary', summary);
    browser.pressButton('Add').then(function() {
      assert.ok(browser.success);
      assert.equal(browser.text('p#successAlert'), 'Successfully created a new term!');
      console.log(browser.text('.alert'))
    }).then(done, done);

  });

  it('should list the terms', function() {

  });


  after(function(done) {
     this.server.close(done);
   });

});

describe('show term page', function() {

  before(function(){
    this.server = http.createServer(server).listen(8000);
    this.browser = new Browser({
      site: 'http://localhost:8000'
    });
  });


  it('should allow to add a new term', function() {

  });

  it('should list the terms', function() {

  });

  after(function(done) {
     this.server.close(done);
   });

});
