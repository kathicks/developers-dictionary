var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db;
    var collection = db.get('termcollection');
    collection.find({},{},function(e,docs){
        res.render('index', { term : docs });
    });
});

/* POST to add new term. */
router.post('/newterm', function(req, res){
  var db = req.db;

  // Get our form values, rely on the name attributes
  var term = req.body.term;
  var shortDefinition = req.body.shortDefinition;
  var definition = req.body.definition;
  var source = req.body.source;

  // Set our collection
  var collection = db.get('termcollection');
  console.log(collection);

  // Submit to the db
  collection.insert({
    "term" : term,
    "shortDefinition" : shortDefinition,
    "definition" : definition,
    "source" : source
  }, function (err, doc) {
    if (err) {
      res.send("Could not add information to the database");
    }
    else {
      res.redirect("/");
    }
  });
});

module.exports = router;
