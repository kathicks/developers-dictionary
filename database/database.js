'use strict';

var database = function(req, res){
  var db = req.db;
  var collection = db.get('termcollection');
  return collection;
};

module.exports = database;
