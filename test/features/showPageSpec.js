process.env.NODE_ENV = "test";

var chai    = require('chai');
var http    = require('http');
var assert  = require('assert');
var Browser = require('zombie');

var server  = require('../../app');

var mongo   = require('mongodb');
var monk    = require('monk');
var should  = require('should');

describe('Developers Dictionary', function() {

    var db_test;
    var terms;
    var data;
    var definition;
    var longDefinition;

    beforeEach(function() {
        db_test = monk('localhost:27017/developers-dictionary-test');
        terms = db_test.get('termcollection');

        data = {
            "term": "Angular ",
            "summary": "A structural framework for dynamic web apps",
            "definitions": [{
                "definition": "It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.\r\n\r\nAngularJS is what HTML would have been, had it been designed for applications.",
                "source": "https://docs.angularjs.org/guide/introduction",
                "rating": 0
            }]
        };

        definition = {
            "definition": "AngularJS (commonly referred to as 'Angular.js') is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.",
            "source": "https://en.wikipedia.org/wiki/AngularJS",
            "rating": 0
        };
    });

    before(function() {
        this.server = http.createServer(server).listen(8000);
        this.browser = new Browser({
            site: 'http://localhost:8000'
        });
    });

    after(function(done) {
        this.server.close(done);
    });

    describe('Show Page', function() {

        beforeEach(function(done) {
            terms.insert(data, function(err, insertion) {
                if (err) return done(err);
                done();
            });
        });

        describe('Features', function() {
            beforeEach(function(done) {
                this.browser.visit('/definitions/Angular', function(err) {
                    if (err) console.log(err);
                    console.log('Title' + this.browser.text())
                    done();
                });
            });

            it('should have a title', function() {
                should.exists(this.browser.text('h2', 'What is Angular?'));
            });

            it('should not have a space between title and ?', function() {
                (this.browser.text('h2')).should.not.match('What is Angular ?');
            });

            it('should have an add an explanation button', function() {
                should.exists(this.browser.text('a', 'Add an explanation'));
            });

            it('should have an the long definition', function() {
                longDefinition = "It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.\r\n\r\nAngularJS is what HTML would have been, had it been designed for applications.";
                should.exists(this.browser.text('div', '.long-def'));
                should.exists(this.browser.text('div#long-def'), longDefinition);
            });

            it('should have a source which is a link', function() {
                should.exists(this.browser.text('a', "https://docs.angularjs.org/guide/introduction"));
            });

            it('should have an upvote button', function() {
                this.browser.assert.element('button.upvote');
            });
        });
    });
});
