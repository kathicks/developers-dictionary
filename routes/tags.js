'use strict';

var express = require('express');
var router = express.Router();

/* POST to filter by tag. */
router.post('/search', function(req, res){
  var db = req.db;
  var tag = req.body.tag;
  var collection = db.get('termcollection');
  collection.find({
      "tags": tag,
  }, function(err, result) {
    if (err) console.log(err);
    req.session.results = result;
    res.json(result)
  });
});

/* POST to filter by tag. */
router.post('/filter', function(req, res){
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

module.exports = router;
