var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var crypto = require("crypto");
var algorithm = "aes256";
var password = "asaadsaad";
var data;


MongoClient.connect("mongodb://localhost:27017/mwpdb", function(err, db){
  if(err) throw err;
  db.collection("lab1").findOne({}, function(err, doc){
    if(err) throw err;
    data = doc.message;
    db.close();
  });
});

router.get("/", function(req, res, next){
	res.send(decrypt(data));
});

function decrypt(text) {
	var decipher = crypto.createDecipher(algorithm, password);
	var dec = decipher.update(text, "hex", "utf8");
	dec += decipher.final("utf8");
	return dec;
}

module.exports = router;
