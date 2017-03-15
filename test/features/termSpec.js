var chai      = require('chai');
var chaiHttp  = require('chai-http');
var http      = require('http');
var assert    = require('assert');
var Browser   = require('zombie');
var server    = require('../../app');

var should = chai.should();
var expect = chai.expect();

chai.use(chaiHttp);

it('should have a home route', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});

describe('homepage', function() {
  before(function() {
    this.server = http.createServer(server).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should have the title on the homepage', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'Developer\'s Dictionary');
  });

  it('should have a list on the homepage', function() {
    assert.ok(this.browser.success);
    this.browser.assert.elements('li', 3);
  });

  it('should have a form on the homepage', function(){
    this.browser.assert.element('form');
  });
});
