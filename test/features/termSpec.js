var chai = require('chai');
var chaiHttp = require('chai-http');
var Browser = require('zombie');
var http = require('http');
var assert = require('assert');

var server = require('../../app');

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
});
