//this collects the terms from the database file, and inserts into the test database.

var addTerm = function() {
  var fs = require('fs');
  var testdatabase = fs.readFile('database.json', 'utf8', function (err, data) {
  var collection = db.collection('termcollection');
   collection.insert(JSON.parse(data), function(err, docs) { // Should succeed
      collection.count(function(err, count) {
          console.log(format("count = %s", count));
          console.log("[" + data + "]" );
          db.close();
      });
  });
});
}
