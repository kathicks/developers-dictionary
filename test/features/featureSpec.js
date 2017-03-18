// // Setting up the test database
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/developers-dictionary-test');
//
// // Packages
// var chai = require('chai'); // Assertion library
// var Browser = require('zombie'); // Feature testing
// var http = require('http');
// var assert = require('assert');
//
// // Linking in application
// var server = require('../../app');
//
// // Assertion library
// var expect = chai.expect();
//
// describe('Developers Dictionary', function() {
//
//   before(function() {
//     this.server = http.createServer(server).listen(8000);
//     this.browser = new Browser({
//         site: 'http://localhost:8000'
//     });
//     // Setting up browser for zombie
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
