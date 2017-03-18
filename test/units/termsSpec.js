// Setting up the test database
var mongo = require('mongodb');
var monk = require('monk');

// Packages
var should = require('should');

// Linking in application
var server = require('../../app');

describe('Developers Dictionary', function() {

  var db_test;
  var terms;

  var data;

  beforeEach(function() {
    db_test = monk('localhost:27017/developers-dictionary-test');
    terms = db_test.get('termcollection');

    data = {
    	"term" : "Angular",
    	"summary" : "A structural framework for dynamic web apps",
    	"definitions" : [
    		{
    			"definition" : "It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.\r\n\r\nAngularJS is what HTML would have been, had it been designed for applications.",
    			"source" : "https://docs.angularjs.org/guide/introduction",
    			"rating" : 0
    		}
    	]
    };
  });

  afterEach(function() {
    return terms.remove();
  });

  it('should connect to the testing database', function(done) {
    should.exists(db_test);
    done();
  });

  it('has a collection called termcollection', function(done) {
    should.exists(terms);
    done();
  });

  it('can add a term to the termcollection', function(done) {
    terms.insert(data, function(err, doc) {
      if(err) return done(err);
      
      should.exists(doc);
      done();
    });
  });

});
