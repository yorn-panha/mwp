var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search');
});

router.post("/", function(req, res, next){
	var category = req.body.category;
	var lat = parseFloat(req.body.lat);
	var long = parseFloat(req.body.long);
	var query = {
				"category": category,
				"point": {
						"$near": [long, lat]
					}
				};
	const option = {
		limit: 3
	};
	console.dir(query);
	MongoClient.connect("mongodb://localhost:27017/mwpdb", function(err, db){
		if(err) return console.dir(err);		

		db.collection("location").find(query, {}, option).toArray(function(err, docs){
			if(err) throw err;
			console.dir(docs);
			res.render("search", {results: docs});
			return db.close();

		});
	});
});
module.exports = router;
