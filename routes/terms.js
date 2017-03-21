'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({}, {}, function(err, docs) {
        res.render('index', {
            terms: docs,
            messages: req.flash('errors'),
            notices: req.flash('notice'),
            home: true
        });
    });
});

/* GET wheel ajax . */
router.get('/wheel', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({}, {}, function(err, docs) {
      if (typeof req.session.results != 'undefined') {
        docs = req.session.results;
        req.session.destroy();
      }
      docs.sort(function(a, b){
        var termA=a.term.toLowerCase(), termB=b.term.toLowerCase();
        if(termA < termB) return -1;
        if(termA > termB) return 1;
        return 0;
      })
      console.log(docs)
      res.json(docs);
    });
});

/* GET term page. */
router.get('/show/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({
        '_id': req.params.id
    }, function(err, docs) {
        docs[0].definitions.sort(function(a, b) {
            return b.rating - a.rating;
        });
        var term = docs[0].term;
        res.render('show', {
            term: docs[0],
            home: false
        });
    });
});

/* POST to filter by tag. */
router.post('/wheel', function(req, res){
  var db = req.db;
  var tag = req.body.tag;
  var collection = db.get('termcollection');
  collection.find({
      "tags": tag,
  }, function(err, result) {
    if (err) console.log(err);
    req.session.results = result;
    res.render('index', {
        term: result,
        messages: req.flash('errors'),
        notices: req.flash('notice'),
    });
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
      res.redirect("/show/" + result._id);
    }
    else {
      req.flash('errors', [{ param: 'term', msg: "does not exist in the database!" }]);
      res.redirect('/');
    }
  });

});

/* POST to add new term. */
router.post('/newterm', function(req, res) {
    var db = req.db;
    var term = req.body.term.trim();
    var summary = req.body.summary;
    var definition = req.body.definition;
    var source = req.body.source;
    var tag = req.body.tag;
    var collection = db.get('termcollection');
    req.checkBody({
        'term': {
            isLength: {
                options: [{ min: 2, max: 30 }],
                errorMessage: 'must be between 2 and 30 characters long'
            },
            errorMessage: 'Invalid term'
        }
    });
    req.checkBody({
        'summary': {
            isLength: {
                options: [{ min: 42, max: 80 }],
                errorMessage: 'must be between 42 and 80 characters long'
            },
            errorMessage: 'Invalid summary'
        }
    });

    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        res.redirect('/');
        return;
    } else {
        if (collection.find({
                "term": term
            }, function(e, docs) {
                if (JSON.stringify(docs) === JSON.stringify([])) {
                    collection.insert({
                        "term": term,
                        "summary": summary,
                        "tags": tag,
                        "definitions": [{
                            "definition": definition,
                            "source": source,
                            "rating": 0
                        }]
                    }, function(err, doc) {
                        if (err) {
                            res.send("Could not add information to the database");
                        } else {
                            req.flash('notice', [{ param: 'term', msg: "successfully created!" }]);
                            res.redirect("/");
                        }
                    });
                } else {
                    req.flash('errors', [{ param: 'term', msg: "already added to the database" }]);
                    res.redirect('/');
                }
            }));
    };
});

/* POST to add new definition to term. */
router.post('/newdefinition', function(req, res) {
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
                res.redirect("/show/" + docs._id);
            });
        }
    });
});

/* POST to upvote definition's rating. */
router.post('/show/upvote', function(req, res) {
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
router.post('/show/downvote', function(req, res) {
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
