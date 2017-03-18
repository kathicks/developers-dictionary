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
  before(function(){
    this.server = http.createServer(server).listen(8000);
    this.browser = new Browser({
      site: 'http://localhost:8000'
    });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should allow to add a new term', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('a.navbar-brand'), 'Developer\'s Dictionary');
    this.browser.clickLink('a#newTerm');
    this.browser.assert.element('form');
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
