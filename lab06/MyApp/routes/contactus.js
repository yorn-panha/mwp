var express = require('express');
var router = express.Router();
var fs = require("fs");
var filename = "file.txt";

// var app = express();
// var validator = require("express-validator");
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(validator());

router.route("/")
		.get(function(req, res, next){
			res.render("contactus");
		})
		.post(function(req, res, next){

			req.assert("fullname", "fullname is required").notEmpty();
			req.assert("message", "message is required").notEmpty();
			var errors = req.validationErrors();
			if(errors) {
				res.render("contactus", {errmsg: "Fileds cannot be empty"});
				return next();
			}

			var fullname = req.body.fullname;
			var message = req.body.message;
			var type = req.body.type;

			var data = fullname + ", " + type + ", " + message;
			console.log(data);
			fs.writeFile(filename, data, function(err){
				if(err) {
					res.send("Save file error");
				} else {
					res.send("Thank You");
				}
			});
		})
	 
module.exports = router;
