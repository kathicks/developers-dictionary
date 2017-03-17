var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({}, {}, function(e, docs) {

        res.render('index', {
            term: docs
        });
    });
});

router.get('/show/:id', function(req, res) {
    var db = req.db;

    var collection = db.get('termcollection');
    collection.find({
        '_id': req.params.id
    }, function(e, docs) {
      docs[0].definitions.sort(function(a ,b){
          return b.rating - a.rating
        })
        res.render('show', {
            term: docs[0]
        });
    });
});

/* GET term page. */

/* POST to add new term. */
router.post('/newterm', function(req, res) {
    var db = req.db;
    // Get our form values, rely on the name attributes
    var term = req.body.term;
    var summary = req.body.summary;
    var definition = req.body.definition;
    var source = req.body.source;

    // Set our collection
    var collection = db.get('termcollection');

    // Submit to the db
    collection.insert({
        "term": term,
        "summary": summary,
        "definitions": [{
            "definition": definition,
            "source": source,
            "rating": 0
        }]
    }, function(err, doc) {
        if (err) {
            res.send("Could not add information to the database");
        } else {
            res.redirect("/");
        }
    });
});

/* POST to add new definition to term. */
router.post('/newdefinition', function(req, res) {
    var db = req.db;
    // Get our form values, rely on the name attributes
    var definition = req.body.definition;
    var source = req.body.source;
    var term = req.body.term;
    // Set our collection
    var collection = db.get('termcollection');
    // Submit to the db
    collection.update({"term": term}, {'$push':{"definitions": {
        "definition": definition,
        "source": source,
        "rating": 0
    }}}, function(err, doc) {
        if (err) {
          console.log(err)
            res.send("Could not add information to the database");
        } else {
            collection.findOne({
                'term': term
            }, function(e, docs) {
                res.redirect("/show/" + docs._id);
            });
        }
    });
});

/* POST to upvote definition's rating. */
router.post('/show/upvote', function(req, res){
  var db = req.db;
  var term = req.body.term;
  var definition = req.body.definition;
  var rating = req.body.rating;
  var collection = db.get('termcollection');
  collection.update({"term": term, "definitions.definition":definition}, {$inc:{"definitions.$.rating": 1}}, function(err, result){
    collection.findOne({"term": term},{"definitions":definition}, function(e, doc){
      res.json(doc)
    })
  });
});

/* POST to downvote definition's rating. */
router.post('/show/downvote', function(req, res){
  var db = req.db;
  var term = req.body.term;
  var definition = req.body.definition;
  var rating = req.body.rating;
  var collection = db.get('termcollection');
  collection.update({"term": term, "definitions.definition":definition}, {$inc:{"definitions.$.rating": -1}}, function(err, result){
    collection.findOne({"term": term},{"definitions":definition}, function(e, doc){
      res.json(doc)
    })
  });
});





        module.exports = router;
