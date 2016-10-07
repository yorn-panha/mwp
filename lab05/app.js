var express = require('express');
var app = express();
var inventors = require("./inventors.json");
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('x-powered-by', false);
app.set('strict routing', true);
app.enable('case sensitive routing');
app.get('/inventors', function (req, res) {
  res.render('index', {inventors: inventors});
});

app.listen(3000, function () {
  console.log('Inventors app listening on port 3000!');
});