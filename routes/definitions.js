'use strict';

var database = require('../database/database.js');
var express = require('express');
var router = express.Router();

/* GET term page. */
router.get('/:term', function(req, res) {
    var collection = database(req);
    collection.find({
        'term': req.params.term
    }, function(err, docs) {
      if (err) console.log(err);
      docs[0].definitions.sort(function(a, b) {
          return b.rating - a.rating;
      });
      var term = docs[0].term;
      res.render('definitions', {
          term: docs[0]
      });
    });
});

/* POST to add new definition to term. */
router.post('/new', function(req, res) {
    var collection = database(req);
    var definition = req.body.definition.replace(/[\n\r]+/g, ' ');
    var source = req.body.source;
    var term = req.body.term;
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
        if (err) { console.log(err);
        console.log("Could not add information to the database");
        } else {
          collection.findOne({
            'term': term
          }, function(e, docs) {
            res.redirect("/definitions/" + docs.term);
          });
        }
    });
});

/* POST to filter by search. */
router.post('/search', function(req, res){
  var collection = database(req);
  var search = req.body.search;
  var termUppercase = search.toUpperCase();
  var termTitleCase  = titleCase(search);

  function titleCase(str) {
     var splitStr = str.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
     }
     return splitStr.join(' ');
  }

  collection.findOne({ $or: [
    {"term": termUppercase},
    {"term": termTitleCase}
  ]}, function(err, result) {
    if (err) console.log(err);
    if (result) {
      res.redirect("/definitions/" + result.term);
    }
    else {
      req.flash('errors', [{ param: 'term', msg: "does not exist in the database!" }]);
      res.redirect('/');
    }
  });
});


/* POST to upvote definition's rating. */
router.post('/update/up', function(req, res) {
  var collection = database(req);
  var term = req.body.term;
  var definition = req.body.definition;
  var rating = req.body.rating;
  collection.update({
    "term": term,
    "definitions.definition": definition
  }, {
    $inc: {
      "definitions.$.rating": 1
    }
  }, function(err, result) {
    if (err) console.log(err);
    collection.findOne({
      "term": term
    }, {
      "definitions": definition
    }, function(err, doc) {
        if (err) console.log(err);
        res.json(doc);
    });
  });
});

/* POST to downvote definition's rating. */
router.post('/update/down', function(req, res) {
    var collection = database(req);
    var term = req.body.term;
    var definition = req.body.definition;
    var rating = req.body.rating;
    collection.update({
        "term": term,
        "definitions.definition": definition
    }, {
        $inc: {
            "definitions.$.rating": -1
        }
    }, function(err, result) {
      if (err) console.log(err);
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
