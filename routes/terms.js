var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({}, {}, function(e, docs) {
        res.render('index', {
            term: docs,
            messages: req.flash('errors'),
            notices: req.flash('notice')
            home: true
        });
        console.log(req.flash('errors'));
    });
});

/* GET term page. */
router.get('/show/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('termcollection');
    collection.find({
        '_id': req.params.id
    }, function(e, docs) {
      docs[0].definitions.sort(function(a ,b){
          return b.rating - a.rating;
        });
        res.render('show', {
            term: docs[0],
            home: false
        });
    });
});

/* POST to add new term. */
router.post('/newterm', function(req, res) {
    var db = req.db;
    var term = req.body.term;
    var summary = req.body.summary;
    var definition = req.body.definition;
    var source = req.body.source;

    var collection = db.get('termcollection');

    req.checkBody({ 'term': { isLength: { options: [{ min: 2, max: 30 }], errorMessage: 'Must be between 2 and 30 characters long' }, errorMessage: 'Invalid Term' } });
    req.checkBody({ 'summary': { isLength: { options: [{ min: 25, max: 80 }], errorMessage: 'Must be between 25 and 80 characters long' }, errorMessage: 'Invalid Summary' } });

    var errors = req.validationErrors();
      if (errors) {
        req.flash('errors', errors);
        console.log(errors);
        res.redirect('/');
        return;
      } else {
        if (collection.find( { "term" : term}, function (e, docs) {
          if (JSON.stringify(docs) === JSON.stringify([])) {
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
                  req.flash('notice', [ {param: 'term', msg: "Successfully created a new term!"}]);
                  res.redirect("/");
                }
            });
          } else {
            req.flash('errors', [ {param: 'term', msg: "Already added to the database"}]);
            res.redirect('/');
          }
        }));
      }

});

/* POST to add new definition to term. */
router.post('/newdefinition', function(req, res) {
    var db = req.db;
    var definition = req.body.definition;
    var source = req.body.source;
    var term = req.body.term;
    var collection = db.get('termcollection');
    collection.update({"term": term}, {'$push':{"definitions": {
        "definition": definition,
        "source": source,
        "rating": 0
    }}}, function(err, doc) {
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
router.post('/show/upvote', function(req, res){
  var db = req.db;
  var term = req.body.term;
  var definition = req.body.definition;
  var rating = req.body.rating;
  var collection = db.get('termcollection');
  collection.update({"term": term, "definitions.definition": definition}, {$inc:{"definitions.$.rating": 1}}, function(err, result) {
    collection.findOne({"term": term},{"definitions":definition}, function(e, doc){
      res.json(doc);
    });
  });
});

/* POST to downvote definition's rating. */
router.post('/show/downvote', function(req, res){
  var db = req.db;
  var term = req.body.term;
  var definition = req.body.definition;
  var rating = req.body.rating;
  var collection = db.get('termcollection');
  collection.update({"term": term, "definitions.definition": definition}, {$inc:{"definitions.$.rating": -1}}, function(err, result){
    collection.findOne({"term": term},{"definitions":definition}, function(e, doc){
      res.json(doc);
    });
  });
});

module.exports = router;
