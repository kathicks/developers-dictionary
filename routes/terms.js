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

router.get('/show/:id', function(req, res) {
  var db = req.db;
  console.log(req.body);
    var collection = db.get('termcollection');
    collection.findOne({'_id': req.params.id },function(e,docs){
      console.log(docs);
        res.render('show', { term : docs });
    });
});

/* GET term page. */

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
