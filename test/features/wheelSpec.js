process.env.NODE_ENV = "test";

var chai = require('chai');
var chaiHttp = require('chai-http');
var http = require('http');
var assert = require('assert');
var Browser = require('zombie');
var server = require('../../app');

var should = chai.should();
var expect = chai.expect();

var helpers = require('./webHelper.js');
// exports.index = function(req, res) {
//   addTerm = helpers.addTerm();
// };

chai.use(chaiHttp);

describe('Wheel', function() {
  this.timeout(5000)

  before(function(done) {
    this.server = http.createServer(server).listen(5000);
    this.browser = new Browser({
    site: 'http://localhost:5000'
    });
  });

  before(function(done) {
      this.browser.visit('/', done);
  });
  //
  // it('should show the SVG wheel when page is loaded', function() {
  //   // addTerm(done);
  //   // this.browser.assert.element('#svg-menu');
  // });
  //
  // it('should show the first 9 terms within the SVG wheel when page is loaded', function() {
  //   browser.assert.link(('.svg-menu.term-01'), db.termcollection[0]);
  //   browser.assert.link(('.svg-menu.term-02'), db.termcollection[1]);
  //   browser.assert.link(('.svg-menu.term-03'), db.termcollection[2]);
  //   browser.assert.link(('.svg-menu.term-04'), db.termcollection[3]);
  //   browser.assert.link(('.svg-menu.term-05'), db.termcollection[4]);
  //   browser.assert.link(('.svg-menu.term-06'), db.termcollection[5]);
  //   browser.assert.link(('.svg-menu.term-07'), db.termcollection[6]);
  //   browser.assert.link(('.svg-menu.term-08'), db.termcollection[7]);
  //   browser.assert.link(('.svg-menu.term-09'), db.termcollection[8]);
  // });
  //
  // it('should redirect user to definition page when an entry is clicked', function() {
  //   browser.click('${db.termcollection[0]}');
  //   browser.assert.status(200);
  //   browser.assert.url('http://localhost:3000/definitionss/#id');
  // });
  //
  //
  // it('should loop through array of terms and definitions in the database when user scrolls', function() {
  //   browser.assert.element('#term-01').text('AJAX')
  //   browser.scroll
  //   browser.assert.element('#term-01').text('Bees')
  // });
  //
  // it('should display contents in alphabetical order', function() {
  //
  // });
  //
  // it('when user adds a new term, it appears in the wheel when refreshed', function() {
  //   browser
  //     .click('Add a new term');
  //     .fill('Term', 'Aaaaardvark');
  //     .fill('Definition', 'Comes at beginning of the alphabet');
  //     .click('Add');
  //   browser.visit('/', done);
  //   browser.assert.link('Aaaaardvark', 'Comes at beginning of the alphabet');
  // });
  //
  // // it('should spin when user scrolls', function() {
  // //
  // // });

});
