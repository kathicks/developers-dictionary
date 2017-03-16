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

/* GET term page. */
router.get('/show/:id', function(req, res) {
    var db = req.db;

    var collection = db.get('termcollection');
    collection.findOne({
        '_id': req.params.id
    }, function(e, docs) {
        console.log(docs);
        res.render('show', {
            term: docs
        });
    });
});

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

module.exports = router;
