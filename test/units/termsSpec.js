// Setting up the test database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/developers-dictionary-test');

// Packages
var should = require('should');

// Linking in application
var server = require('../../app');

describe('Developers Dictionary', function() {

  it('should connect to the testing database', function(done) {
    should.exists(db);
    done();
  });

});
