var mongo  = require('mongodb');
var monk   = require('monk');
var should = require('should');
var server = require('../../app');

describe('Developers Dictionary', function() {

    var db_test;
    var terms;
    var data;
    var definition;

    beforeEach(function() {
        db_test = monk('localhost:27017/developers-dictionary-test');
        terms = db_test.get('termcollection');

        data = {
            "term": "Angular",
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

    afterEach(function() {
        return terms.remove();
    });


    describe('Connecting to the database', function() {
        it('should connect to the testing database', function(done) {
            should.exists(db_test);
            done();
        });
        it('has a collection called termcollection', function(done) {
            should.exists(terms);
            done();
        });
    });

    describe('Adding to the database', function() {
        it('can add a term to the termcollection', function(done) {
            terms.insert(data, function(err, insertion) {
                if (err) return done(err);
                should.exists(insertion);
                done();
            });
            terms.find({}).should.eventually.have.length(1);
        });
    });

    describe('Updating the database', function() {

        beforeEach(function(done) {
            terms.insert(data, function(err, insertion) {
                if (err) return done(err);
                done();
            });
        });

        it('can add an additional definition to terms in the termcollection', function(done) {
            terms.update({
                'term': 'Angular'
            }, {
                '$push': {
                    "definitions": definition
                }
            }, function(err, update) {
                if (err) return done(err);
                should.exists(update);
                done();
            });
            terms.find({}, {}, function(err, docs) {
                docs[0].definitions.should.have.length(2);
            });
        });

    });

});
