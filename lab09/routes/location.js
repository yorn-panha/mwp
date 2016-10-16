var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('location');
});

router.post("/", function(req, res, next){
	var name = req.body.name;
	var category = req.body.category;
	var lat = parseFloat(req.body.lat);
	var long = parseFloat(req.body.long);
	// var data = name + ", " + category + ", " + lat + ", " + long;
	// console.log(data);
	MongoClient.connect("mongodb://localhost:27017/mwpdb", function(err, db){
		if(err) throw err;
		var doc = {"name" : name, "category": category, "point": [lat, long]};
		db.collection("location").insert(doc, function(err, docInserted){
			if(err) throw err;
			console.dir("Insert Success");
			res.writeHead(200);
			res.end("Insert Success");
			// return db.close();
		});
	});
});
module.exports = router;

/*
walmart: 41.007660, -91.993244
hyvee: 41.004560, -91.978473
macdonald: 41.006884, -91.98285
MUM: 41.017864, -91.967280
Maharishi School: 41.015441, -91.967004

*/
