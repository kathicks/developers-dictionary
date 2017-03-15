var chai      = require('chai');
var chaiHttp  = require('chai-http');
var http      = require('http');
var assert    = require('assert');
var Browser   = require('zombie');
var server    = require('../../app');

var should = chai.should();
var expect = chai.expect();

chai.use(chaiHttp);

describe('homepage', function() {
  before(function() {
    this.server = http.createServer(server).listen(8000);
    this.browser = new Browser({ site: 'http://localhost:8000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should have the title', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('a.navbar-brand'), 'Developer\'s Dictionary');
  });

  it('should have a list', function() {
    assert.ok(this.browser.success);
    this.browser.assert.elements('li', 4);
  });

  it('should have a form', function(){
    this.browser.assert.element('form');
  });

  it('should show the new term after the form is submitted', function() {
    this.browser.visit('/', function() {
      this.browser.fill('input[name=term]', 'Mocha');
      this.browser.document.forms[0].submit();
      this.browser.wait().then(function() {
        this.browser.assert.elements('li', 5);
      });
    });

  });
});
