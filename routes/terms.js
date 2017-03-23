'use strict';

var database = require('../database/database.js');
var summaryValidate = require('../database/summaryValidate.js');
var termValidate = require('../database/termValidate.js');
var express = require('express');
var router = express.Router();

/* GET index. */
router.get('/', function(req, res) {
  var collection = database(req);
  collection.find({}, {}, function(err, docs) {
    res.render('index', {
      terms: docs,
      messages: req.flash('errors'),
      notices: req.flash('notice')
    });
  });
});

router.get('/clearfilter', function(req, res) {
  var collection = database(req);
  collection.find({}, {}, function(err, docs) {
    res.render('index', {
      terms: docs,
      messages: req.flash('errors'),
      notices: req.flash('notice')
    });
  });
});

/* GET wheel ajax . */
router.get('/show', function(req, res) {
  var collection = database(req);
  collection.find({}, {}, function(err, docs) {
    if (err) console.log(err);
    if (typeof req.session.results != 'undefined') {
      docs = req.session.results;
      req.session.destroy();
    }
    docs.sort(function(a, b){
      var termA=a.term.toLowerCase(), termB=b.term.toLowerCase();
      if(termA < termB) return -1;
      if(termA > termB) return 1;
      return 0;
    });
    res.json(docs);
  });
});

/* POST to add new term. */
router.post('/new', function(req, res) {
    var collection = database(req);
    var term = req.body.term.trim();
    var summary = req.body.summary;
    var definition = req.body.definition;
    var source = req.body.source;
    var tag = req.body.tag;

    termValidate(req, res);
    summaryValidate(req, res);

    var errors = req.validationErrors();
    if (errors) {
      req.flash('errors', errors);
      res.redirect('/');
      return;
    } else {
        if (collection.find({
          "term": term
        }, function(err, docs) {
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
                console.log(err);
                res.send("Could not add information to the database");
              } else {
                req.flash('notice', [{ param: 'term', msg: "successfully created!" }]);
                res.redirect("/");
              }
            });
          }
          else {
            req.flash('errors', [{ param: 'term', msg: "already added to the database" }]);
            res.redirect('/');
          }
      }));
    }
});

module.exports = router;
