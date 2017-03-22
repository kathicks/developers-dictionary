'use strict';

var express = require('express');
var router = express.Router();

/* GET term page. */
router.get('/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({
        '_id': req.params.id
    }, function(err, docs) {
        docs[0].definitions.sort(function(a, b) {
            return b.rating - a.rating;
        });
        var term = docs[0].term;
        res.render('definitions', {
            term: docs[0],
            home: false
        });
    });
});

/* POST to add new definition to term. */
router.post('/new', function(req, res) {
    var db = req.db;
    var definition = req.body.definition.replace(/[\n\r]+/g, ' ');
    var source = req.body.source;
    var term = req.body.term;
    var collection = db.get('termcollection');
    collection.update({
        "term": term
    }, {
        '$push': {
            "definitions": {
                "definition": definition,
                "source": source,
                "rating": 0
            }
        }
    }, function(err, doc) {
        if (err) {
            res.send("Could not add information to the database");
        } else {
            collection.findOne({
                'term': term
            }, function(e, docs) {
                res.redirect("/definitions/" + docs._id);
            });
        }
    });
});

/* POST to filter by search. */
router.post('/search', function(req, res){
  var db = req.db;
  var search = req.body.search;
  var term = search.charAt(0).toUpperCase() + search.slice(1);
  var termUppercase = search.toUpperCase();
  var collection = db.get('termcollection');
  collection.findOne({ $or: [
    {"term": term},
    {"term": termUppercase}
  ]}, function(err, result) {
    if (err) console.log(err);
    if (result) {
      res.redirect("/definitions/" + result._id);
    }
    else {
      req.flash('errors', [{ param: 'term', msg: "does not exist in the database!" }]);
      res.redirect('/');
    }
  });
});


/* POST to upvote definition's rating. */
router.post('/update/up', function(req, res) {
    var db = req.db;
    var term = req.body.term;
    var definition = req.body.definition;
    var rating = req.body.rating;
    var collection = db.get('termcollection');
    collection.update({
        "term": term,
        "definitions.definition": definition
    }, {
        $inc: {
            "definitions.$.rating": 1
        }
    }, function(err, result) {
        collection.findOne({
            "term": term
        }, {
            "definitions": definition
        }, function(e, doc) {
            res.json(doc);
        });
    });
});

/* POST to downvote definition's rating. */
router.post('/update/down', function(req, res) {
    var db = req.db;
    var term = req.body.term;
    var definition = req.body.definition;
    var rating = req.body.rating;
    var collection = db.get('termcollection');
    collection.update({
        "term": term,
        "definitions.definition": definition
    }, {
        $inc: {
            "definitions.$.rating": -1
        }
    }, function(err, result) {
        collection.findOne({
            "term": term
        }, {
            "definitions": definition
        }, function(e, doc) {
            res.json(doc);
        });
    });
});

module.exports = router;
