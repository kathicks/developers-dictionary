var chai      = require('chai');
var chaiHttp  = require('chai-http');
var http      = require('http');
var assert    = require('assert');
var Browser   = require('zombie');
var server    = require('../../app');

var should = chai.should();
var expect = chai.expect();

chai.use(chaiHttp);

describe("showpage", function(){
  before(function() {
    this.server = http.createServer(server).listen(8080);
    this.browser = new Browser({ site: 'http://localhost:8080' });
  });

  before(function(done) {
    this.browser.visit('/show/58c95de3203fa302d5a5263b', done);
  });

  it('should have the term name', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h2'), 'Encapsulation');
  });

  it('should have short definition', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('.short-def'), 'Mechanism, that isolates a particular code and data from all other code and data');
  });

  it('should have long definition', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('.long-def'), 'The mechanism that binds together code and data in manipulates, and keeps both safe from outside interference and misuse.');
  });

  it('should have one source link', function() {
    assert.ok(this.browser.success);
      this.browser.assert.elements('a', 1);
  });


});
