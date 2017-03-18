// process.env.NODE_ENV = "test";
//
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var http = require('http');
// var assert = require('assert');
// var Browser = require('zombie');
// var server = require('../../app');
//
// var should = chai.should();
// var expect = chai.expect();
//
// chai.use(chaiHttp);
//
// describe('Developers Dictionary', function() {
//
//   var term;
//   var summary;
//   var definition;
//   var source;
//
//   before(function() {
//     this.server = http.createServer(server).listen(8000);
//     this.browser = new Browser({
//         site: 'http://localhost:8000'
//     });
//
//     term = "Mocha";
//     summary = "Mocha is a feature-rich JavaScript test framework running on Node.js";
//     definition = "Mocha is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.";
//     source = "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)";
//   });
//
//   before(function(done) {
//       this.browser.visit('/', done);
//   });
//
//   it('should have the title', function() {
//       assert.equal(this.browser.text('a.navbar-brand'), 'Developer\'s Dictionary');
//   });
//
//   it('should have a list', function() {
//       this.browser.visit('/', function() {
//         this.browser.clickLink('a.addTerm');
//         this.browser.fill('term', term);
//         this.browser.fill('summary', summary);
//         this.browser.pressButton('Add');
//         this.browser.wait().then(function() {
//           this.browser.assert.elements('ul', 1);
//         });
//       });
//   });
//
//   it('should have a form', function() {
//     this.browser.visit('/', function() {
//       this.browser.clickLink('a.addTerm');
//       this.browser.wait().then(function() {
//         this.browser.assert.element('form');
//       });
//     });
//   });
//
//   it('should show the new term after the form is submitted', function() {
//     this.browser.visit('/', function() {
//       this.browser.clickLink('a.addTerm');
//       this.browser.fill('term', term);
//       this.browser.fill('summary', summary);
//       this.browser.pressButton('Add');
//       this.browser.wait().then(function() {
//         assert.equal(this.browser.text('p#termtitle'), term);
//       });
//     });
//   });
//
//   it('should have a showpage with correct term name', function() {
//     this.browser.visit('/', function() {
//       this.browser.clickLink('a.addTerm');
//       this.browser.fill('term', term);
//       this.browser.fill('summary', summary);
//       this.browser.pressButton('Add');
//       this.browser.clickLink('a.showPage');
//       this.browser.wait().then(function() {
//         assert.equal(this.browser.text('h2'), term);
//       });
//     });
//   });
//
//   it('should have short definition', function() {
//     this.browser.visit('/', function() {
//       this.browser.clickLink('a.addTerm');
//       this.browser.fill('term', term);
//       this.browser.fill('summary', summary);
//       this.browser.pressButton('Add');
//       this.browser.clickLink('a.showPage');
//       this.browser.wait().then(function() {
//         assert.equal(this.browser.text('.short-def'), summary);
//       });
//     });
//   });
//
//   it('should have long definition', function() {
//     this.browser.visit('/', function() {
//       this.browser.clickLink('a.addTerm');
//       this.browser.fill('term', term);
//       this.browser.fill('summary', summary);
//       this.browser.pressButton('Add');
//       this.browser.clickLink('a.showPage');
//       this.browser.wait().then(function() {
//         assert.equal(this.browser.text('.long-def'), definition);
//       });
//     });
//   });
//
//   it('should have one source link', function() {
//     this.browser.visit('/', function() {
//       this.browser.clickLink('a.addTerm');
//       this.browser.fill('term', term);
//       this.browser.fill('summary', summary);
//       this.browser.pressButton('Add');
//       this.browser.clickLink('a.showPage');
//       this.browser.wait().then(function() {
//         this.browser.assert.elements('a', 1);
//       });
//     });
//   });
//
// });
